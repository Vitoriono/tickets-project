import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { SeatsService } from '../src/adapters/seatsList/seats.service';
import { TicketsService } from '../src/domain/services/tickets.service';
import { of } from 'rxjs';
import { TotalListService } from '../src/adapters/totalDataList/total-list.service';
import { PriceService } from '../src/adapters/pricesList/price.service';
import totalListMock from './total.list.mock.';
import { PRICE_URL, SEATS_URL } from '../src/adapters/constants';
import { priceResult } from './price.result';
import { seatsResult } from './seats.result';
import { notfoundResult } from './notfound.result ';

describe('Tickets (e2e)', () => {
  let app: INestApplication;
  let httpService: HttpService;

  beforeAll(async () => {
    const testAppModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule, HttpModule],
      providers: [TicketsService, SeatsService, TotalListService, PriceService],
    }).compile();

    app = testAppModule.createNestApplication();
    httpService = testAppModule.get<HttpService>(HttpService);
    await app.init();
  });

  it('API endpoint GET tickets by event_id ', async () => {
    jest.spyOn(httpService, 'get').mockImplementation((requestUrl) => {
      switch (requestUrl) {
        case PRICE_URL.replace(':event_id', '1195'):
          return of(priceResult);
        case SEATS_URL.replace(':event_id', '1195'):
          return of(seatsResult);
        default:
          return of(notfoundResult);
      }
    });

    return await request(app.getHttpServer())
      .get('/tickets/1195')
      .expect(200)
      .expect(totalListMock);
  });

  it('Throw error if API cannot find tickets', async () => {
    return await request(app.getHttpServer()).get('/tickets').expect(404);
  });
});
