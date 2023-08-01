import { Exclude, Expose } from 'class-transformer';

export class TicketsReadsDTO {
  @Exclude({ toPlainOnly: true })
  Id: number;

  @Expose({ name: 'Section', toPlainOnly: true })
  SectionId: number;

  @Expose({ name: 'Row', toPlainOnly: true })
  SeatRow: string;

  @Expose({ name: 'Seat number', toPlainOnly: true })
  SeatNumber: string;

  @Exclude({ toPlainOnly: true })
  ZoneId: number;

  @Exclude({ toPlainOnly: true })
  AllocationId: number;

  @Exclude({ toPlainOnly: true })
  SeatTypeId: number;

  @Exclude({ toPlainOnly: true })
  LogicalSeatRow: number;

  @Exclude({ toPlainOnly: true })
  LogicalSeatNumber: number;

  @Exclude({ toPlainOnly: true })
  XPosition: number;

  @Exclude({ toPlainOnly: true })
  YPosition: number;

  @Exclude({ toPlainOnly: true })
  IsSeat: boolean;

  @Exclude({ toPlainOnly: true })
  SeatStatusId: number;

  @Exclude({ toPlainOnly: true })
  AisleIndicator: string;

  @Exclude({ toPlainOnly: true })
  HasStairs: boolean;

  @Exclude({ toPlainOnly: true })
  ScreenId: number;

  @Exclude({ toPlainOnly: true })
  DisplayLetter: string;

  @Exclude({ toPlainOnly: true })
  HoldCodeId: number;

  Price: number;
}
