import { DateTime } from '../dateTime';
import { DayOfWeek } from '../dayOfWeek';
import { Calendar } from './calendar';
import { CalendaricalCalculationHelper } from './calendaricalCalculationsHelper';

export class PersianCalendar extends Calendar {
  private static get persianEpoch(): bigint {
    const date = new DateTime(622, 3, 22);
    return date.ticks / BigInt(864000000000);
  }
  private static get persianEra(): number {
    return 1;
  }
  private static get daysToMonth(): number[] {
    return [0, 31, 62, 93, 124, 155, 186, 216, 246, 276, 306, 336, 366];
  }
  private static daysInPreviousMonths(month: number): number {
    --month;
    return this.daysToMonth[month];
  }
  protected static get minDate(): DateTime {
    return new DateTime(622, 3, 22);
  }
  protected static get maxDate(): DateTime {
    return DateTime.maxValue;
  }

  public addMonths(time: DateTime, months: number): DateTime {
    if (months < -120000 || months > 120000) throw new Error('ArgumentOutOfRange_Range');
    const datePart1 = this.getDatePart(time.ticks, 0);
    const datePart2 = this.getDatePart(time.ticks, 2);
    let day = this.getDatePart(time.ticks, 3);
    const num = datePart2 - 1 + months;
    let month: number;
    let year: number;
    if (num >= 0) {
      month = (num % 12) + 1;
      year = Math.floor(datePart1 + num / 12);
    } else {
      month = 12 + ((num + 1) % 12);
      year = Math.ceil(datePart1 + (num - 11) / 12);
    }
    const daysInMonth = this.getDaysInMonth(year, month);
    if (day > daysInMonth) day = daysInMonth;
    const ticks = this.getAbsoluteDatePersian(year, month, day) * 864000000000n + (time.ticks % 864000000000n);
    Calendar.checkAddResult(ticks, this.minSupprotedDateTime, this.maxSupportedDateTime);
    return new DateTime(ticks);
  }
  public addYears(time: DateTime, years: number): DateTime {
    return this.addMonths(time, years * 12);
  }
  public getDayOfMonth(time: DateTime): number {
    return this.getDatePart(time.ticks, 3);
  }
  public getDayOfWeek(time: DateTime): DayOfWeek {
    return Number((time.ticks / 864000000000n + 1n) % 7n) as DayOfWeek;
  }
  public getDayOfYear(time: DateTime): number {
    return this.getDatePart(time.ticks, 1);
  }
  public getDaysInMonthWithEra(year: number, month: number, era: number): number {
    PersianCalendar.checkYearMonthRange(year, month, era);
    if (month === 10 && year === 9378) return 13;
    let num = PersianCalendar.daysToMonth[month] - PersianCalendar.daysToMonth[month - 1];
    if (month === 12 && !this.isLeapYear(year)) --num;
    return num;
  }
  public getDaysInYearWithEra(year: number, era: number): number {
    PersianCalendar.checkYearRange(year, era);
    if (year === 9378) return PersianCalendar.daysToMonth[9] + 13;
    return this.isLeapYear(year) ? 366 : 365;
  }
  public getEra(time: DateTime): number {
    PersianCalendar.checkTicksRange(time.ticks);
    return PersianCalendar.persianEra;
  }
  public getMonth(time: DateTime): number {
    return Math.floor(this.getDatePart(time.ticks, 2));
  }
  public getMonthInYearWithEra(year: number, era: number): number {
    PersianCalendar.checkYearRange(year, era);
    return year === 9378 ? 10 : 12;
  }
  public getYear(time: DateTime): number {
    return Math.floor(this.getDatePart(time.ticks, 0));
  }
  public isLeapDayWithEra(year: number, month: number, day: number, era: number): boolean {
    const daysInMonth = this.getDaysInMonthWithEra(year, month, era);
    if (day < 1 || day > daysInMonth) throw new Error('ArgumentOutOfRange_Day');
    return this.isLeapYearWithEra(year, era) && month === 12 && day === 30;
  }
  public isLeapMonthWithEra(year: number, month: number, era: number): boolean {
    PersianCalendar.checkYearMonthRange(year, month, era);
    return false;
  }
  public isLeapYearWithEra(year: number, era: number): boolean {
    PersianCalendar.checkYearRange(year, era);
    return (
      year !== 9378 &&
      this.getAbsoluteDatePersian(year + 1, 1, 1) - this.getAbsoluteDatePersian(year, 1, 1) === BigInt(366)
    );
  }

  private getDatePart(ticks: bigint, part: number): number {
    const numberOfDays = ticks / 864000000000n + 1n;
    const year = Math.floor(
      Number(CalendaricalCalculationHelper.persianNewYearOnOrBefore(numberOfDays) - PersianCalendar.persianEpoch) /
        365.242189 +
        0.5 +
        1,
    );
    if (part === 0) return year;
    const ordinalDay = Number(
      numberOfDays - CalendaricalCalculationHelper.getNumberOfDays(this.toDateTime(year, 1, 1, 0, 0, 0, 0, 1)),
    );
    if (part === 1) return ordinalDay;
    const month = PersianCalendar.monthFromOrdinalDay(ordinalDay);
    if (part === 2) return month;
    const num = ordinalDay - PersianCalendar.daysInPreviousMonths(month);
    if (part === 3) return num;
  }
  private getAbsoluteDatePersian(year: number, month: number, day: number): bigint {
    if (year < 1 || year > 9378 || month < 1 || month > 12) throw new Error('ArgumentOutOfRange_BadYearMonthDay');
    const num1 = PersianCalendar.daysInPreviousMonths(month) + day - 1;
    const num2 = Math.floor(365.242189 * (year - 1));
    return (
      CalendaricalCalculationHelper.persianNewYearOnOrBefore(PersianCalendar.persianEpoch + BigInt(num2) + 180n) +
      BigInt(Math.round(num1))
    );
  }
  public toDateTime(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number,
    era: number,
  ): DateTime {
    const daysInMonth = this.getDaysInMonthWithEra(year, month, era);
    if (day < 1 || day > daysInMonth) throw new Error('ArgumentOutOfRange_Day');
    const absoluteDatePersian = this.getAbsoluteDatePersian(year, month, day);
    if (absoluteDatePersian >= BigInt(0))
      return new DateTime(
        absoluteDatePersian * BigInt(864000000000) + Calendar.timeToTicks(hour, minute, second, millisecond),
      );
    throw new Error('ArgumentOutOfRange_BadYearMonthDay');
  }

  private static monthFromOrdinalDay(ordinalDay: number): number {
    let index = 0;
    while (ordinalDay > this.daysToMonth[index]) ++index;
    return index;
  }
  private static checkYearMonthRange(year: number, month: number, era: number): void {
    this.checkYearRange(year, era);
    if (year === 9378 && month > 10) throw new Error('ArgumentOutOfRange_YearRange');
    if (month < 1 && month > 12) throw new Error('ArgumentOutOfRange_MonthRange');
  }
  private static checkYearRange(year: number, era: number): void {
    this.checkEraRange(era);
    if (year < 1 || year > 9378) throw new Error('ArgumentOutOfRange_YearRange');
  }
  private static checkEraRange(era: number): void {
    if (era !== 0 && era !== PersianCalendar.persianEra) throw new Error('ArgumentOutOfRange_InvalidEraValue');
  }
  private static checkTicksRange(ticks: bigint): void {
    if (ticks < PersianCalendar.minDate.ticks || ticks > PersianCalendar.maxDate.ticks)
      throw new Error('ArgumentOutOfRange_CalendarRange');
  }
}
