import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError, lastValueFrom } from 'rxjs';
import { EVENT_ID, SEATS_URL } from '../constants';
import { TicketsReadsDTO } from '../../dtos/tickets.reads.dto';

@Injectable()
export class SeatsService {
  constructor(private readonly http: HttpService) {}

  async getSeats(eventId): Promise<TicketsReadsDTO[]> {
    const request = this.http
      .get(SEATS_URL.replace(EVENT_ID, eventId))
      .pipe(map((res) => res.data))
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
    return await lastValueFrom(request);
  }
}
