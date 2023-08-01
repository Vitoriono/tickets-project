import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError, lastValueFrom } from 'rxjs';
import { EVENT_ID, PRICE_URL } from '../constants';

@Injectable()
export class PriceService {
  constructor(private readonly http: HttpService) {}

  async getPrice(eventId): Promise<Map<string, number>> {
    const request = this.http
      .get(PRICE_URL.replace(EVENT_ID, eventId))
      .pipe(
        map((res) =>
          res.data.reduce((acc, curr) => {
            return { ...acc, [curr.ZoneId]: curr.Price };
          }, {}),
        ),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
    return await lastValueFrom(request);
  }
}
