import { DayOfWeek } from '../dayOfWeek';

// tslint:disable-next-line:no-namespace
export namespace Internals.Date {
  export class FullSystemTime {
    public wYear: number;
    public wMonth: number;
    public wDayOfWeek: number;
    public wDay: number;
    public wHour: number;
    public wMinute: number;
    public wSecond: number;
    public wMillisecond: number;
    public hundredNanoSecond: number;

    /* tslint:disable:unified-signatures */
    constructor();
    constructor(ticks: number);
    constructor(
      year: number,
      month: number,
      dayOfWeek: DayOfWeek,
      day: number,
      hour: number,
      minute: number,
      second: number,
    );
    constructor(
      year?: number,
      month?: number,
      dayOfWeek?: DayOfWeek,
      day?: number,
      hour?: number,
      minute?: number,
      second?: number,
    ) {
      if (year && !month) {
        return;
      } else if (month) {
        this.wYear = year;
        this.wMonth = month;
        this.wDayOfWeek = dayOfWeek;
        this.wDay = day;
        this.wHour = hour;
        this.wMinute = minute;
        this.wSecond = second;
        this.wMillisecond = 0;
        this.hundredNanoSecond = 0;
      }
    }
    /* tslint:enable:unified-signatures */
  }
}
