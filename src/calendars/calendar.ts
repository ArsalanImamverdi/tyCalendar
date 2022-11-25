import { DateTime } from '../dateTime';
import { DayOfWeek } from '../dayOfWeek';

export abstract class Calendar {
  protected get adderOnNegativeInput(): number {
    return 0;
  }
  public get minSupprotedDateTime(): DateTime {
    return DateTime.minValue;
  }
  public get maxSupportedDateTime(): DateTime {
    return DateTime.maxValue;
  }
  protected static checkAddResult(ticks: bigint, minValue: DateTime, maxValue: DateTime) {
    // if (ticks < minValue.ticks || ticks > maxValue.ticks)
    //   throw new Error('Argument_ResultCalendarRange')
  }
  private add(time: DateTime, value: number, scale: number): DateTime {
    const num = BigInt(value * scale + (value >= 0 ? 0 : this.adderOnNegativeInput));
    if (!(num > -315537897600000.0) || !(num < 315537897600000.0)) {
      throw new Error('ArgumentOutOfRange_AddValue');
    }
    const num2 = num;
    const ticks = time.ticks + num2 * 10000n;
    Calendar.checkAddResult(ticks, this.minSupprotedDateTime, this.maxSupportedDateTime);
    return new DateTime(ticks);
  }

  protected static timeToTicks(hour: number, minute: number, second: number, millisecond: number): bigint {
    if (hour < 0 || hour >= 24 || minute < 0 || minute >= 60 || second < 0 || second >= 60)
      throw new Error('ArgumentOutOfRange_BadHourMinuteSecond');

    const num = BigInt(hour) * 3600n + BigInt(minute) * 60n + BigInt(second);
    return num * 10000000n + BigInt(millisecond) * 10000n;
  }

  public addMilliseconds(time: DateTime, milliseconds: number): DateTime {
    return this.add(time, milliseconds, 1);
  }
  public addDays(time: DateTime, days: number): DateTime {
    return this.add(time, days, 86400000);
  }
  public addHours(time: DateTime, hours: number): DateTime {
    return this.add(time, hours, 3600000);
  }
  public addMinutes(time: DateTime, minutes: number): DateTime {
    return this.add(time, minutes, 60000);
  }
  public addSeconds(time: DateTime, seconds: number): DateTime {
    return this.add(time, seconds, 1000);
  }
  public addWeeks(time: DateTime, weeks: number): DateTime {
    return this.addDays(time, weeks * 7);
  }
  public abstract addMonths(time: DateTime, month: number): DateTime;
  public abstract addYears(time: DateTime, years: number): DateTime;
  public abstract getDayOfMonth(time: DateTime): number;
  public abstract getDayOfWeek(time: DateTime): DayOfWeek;
  public abstract getDayOfYear(time: DateTime): number;

  public abstract getDaysInMonthWithEra(year: number, month: number, era: number): number;
  public getDaysInMonth(year: number, month: number) {
    return this.getDaysInMonthWithEra(year, month, 0);
  }

  public abstract getDaysInYearWithEra(year: number, era: number): number;
  public getDaysInYear(year: number): number {
    return this.getDaysInYearWithEra(year, 0);
  }
  public abstract getEra(time: DateTime): number;
  public getHour(time: DateTime): number {
    return Number((time.ticks / 36000000000n) % 24n);
  }
  public getMilliseconds(time: DateTime): number {
    return Number((time.ticks / 10000n) % 1000n);
  }
  public getMinute(time: DateTime): number {
    return Number((time.ticks / 600000000n) % 60n);
  }
  public getSeconds(time: DateTime): number {
    return Number((time.ticks / 10000000n) % 60n);
  }
  public abstract getMonth(time: DateTime): number;
  public abstract getMonthInYearWithEra(year: number, era: number): number;
  public getMonthInYear(year: number): number {
    return this.getMonthInYearWithEra(year, 0);
  }

  public abstract getYear(time: DateTime): number;

  public abstract isLeapDayWithEra(year: number, month: number, day: number, era: number): boolean;
  public isLeapDay(year: number, month: number, day: number): boolean {
    return this.isLeapDayWithEra(year, month, day, 0);
  }

  public abstract isLeapMonthWithEra(year: number, month: number, era: number): boolean;
  public isLeapMonth(year: number, month: number): boolean {
    return this.isLeapMonthWithEra(year, month, 0);
  }

  public abstract isLeapYearWithEra(year: number, era: number): boolean;
  public isLeapYear(year: number): boolean {
    return this.isLeapYearWithEra(year, 0);
  }

  public getLeapMonthWithEra(year: number, era: number): number {
    if (!this.isLeapYearWithEra(year, era)) {
      return 0;
    }

    const monthsInYear = this.getMonthInYearWithEra(year, era);
    for (let month = 0; month <= monthsInYear; ++month) {
      if (this.isLeapMonthWithEra(year, month, era)) return month;
    }
    return 0;
  }

  public abstract toDateTime(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number,
    era: number,
  ): DateTime;
}
