import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PriceService } from './pricesList/price.service';
import { SeatsService } from './seatsList/seats.service';
import { TotalListService } from './totalDataList/total-list.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [PriceService, SeatsService, TotalListService],
  exports: [PriceService, SeatsService, TotalListService],
})
export class AdaptersModule {}
