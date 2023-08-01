import { Module } from '@nestjs/common';
import { TicketsReadController } from './tickets.read.controller';
import { TicketsService } from './services/tickets.service';
import { AdaptersModule } from '../adapters/adapters.module';

@Module({
  imports: [AdaptersModule],
  controllers: [TicketsReadController],
  providers: [TicketsService],
  exports: [TicketsService],
})
export class TicketsModule {}
