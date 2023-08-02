import { AxiosResponse } from 'axios';

export const seatsResult: AxiosResponse = {
  data: [
    {
      Id: 21439,
      SectionId: 2,
      SeatRow: 'A',
      SeatNumber: '101',
      ZoneId: 997,
      AllocationId: 0,
      SeatTypeId: 1,
      LogicalSeatRow: 1950,
      LogicalSeatNumber: 61,
      XPosition: 69,
      YPosition: 10,
      IsSeat: true,
      SeatStatusId: 0,
      AisleIndicator: 'R',
      HasStairs: false,
      ScreenId: 9,
      DisplayLetter: ' ',
      HoldCodeId: 0,
    },
  ],
  status: 200,
  statusText: 'OK',
  headers: {},
  config: undefined,
};
