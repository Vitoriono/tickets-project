import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { TicketsService } from './services/tickets.service';

@Controller({ path: 'tickets' })
export class TicketsReadController {
  constructor(private readonly ticketsServ: TicketsService) {}

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  getTickets(@Param('id', new ParseIntPipe()) eventId: number) {
    return this.ticketsServ.getAll(eventId);
  }
}
