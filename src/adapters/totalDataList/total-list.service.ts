import { Injectable } from '@nestjs/common';
import { PriceService } from '../pricesList/price.service';
import { SeatsService } from '../seatsList/seats.service';

@Injectable()
export class TotalListService {
  constructor(
    private readonly priceServ: PriceService,
    private readonly seatsServ: SeatsService,
  ) {}

  async getResult(eventId) {
    const firstPromise = () => this.priceServ.getPrice(eventId);

    const secondPromise = (param) =>
      this.seatsServ
        .getSeats(eventId)
        .then((x) =>
          x.map((tickets) => ({ ...tickets, Price: param[tickets.ZoneId] })),
        );

    async function promisesInSeries(asyncFns) {
      let param;

      for (let i = 0; i < asyncFns.length; i++) {
        param = await asyncFns[i](param);
      }
      return param;
    }
    return await promisesInSeries([firstPromise, secondPromise]);
  }
}
