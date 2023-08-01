import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { TotalListService } from '../../adapters/totalDataList/total-list.service';
import { TicketsReadsDTO } from '../../dtos/tickets.reads.dto';

@Injectable()
export class TicketsService {
  constructor(private readonly resultServ: TotalListService) {}

  async getAll(eventId): Promise<TicketsReadsDTO> {
    const allTickets = await plainToClass(
      TicketsReadsDTO,
      this.resultServ.getResult(eventId),
    );
    return allTickets;
  }
}
