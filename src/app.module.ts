import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AdaptersModule } from './adapters/adapters.module';
import { TicketsModule } from './domain/tickets.module';

@Module({
  imports: [HttpModule, AdaptersModule, TicketsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
