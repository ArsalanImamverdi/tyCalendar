import { DateTime } from '../dateTime';
import { DayOfWeek } from '../dayOfWeek';
import { Calendar } from './calendar';

export class HijriCalendar extends Calendar {
  private mHijriAdvance: number = -2147483648;
  private static get hijriMonthDays(): number[] {
    return [0, 30, 59, 89, 118, 148, 177, 207, 236, 266, 295, 325, 355];
  }
  private static get calendarMinValue(): DateTime {
    return new DateTime(622, 7, 18);
  }
  private static get calendarMaxValue(): DateTime {
    return DateTime.maxValue;
  }
  public get minSupprotedDateTime(): DateTime {
    return HijriCalendar.calendarMinValue;
  }
  public get maxSupportedDateTime(): DateTime {
    return HijriCalendar.calendarMaxValue;
  }
  public static get hijriEra(): number {
    return 1;
  }

  protected get daysInYearBeforeMinSupportedYear(): number {
    return 354;
  }

  protected get adderOnNegativeInput(): number {
    return 0;
  }

  private daysUpToHijriYear(hijriYear: number): bigint {
    const num1 = Math.floor((hijriYear - 1) / 30) * 30;
    let year = hijriYear - num1 - 1;
    let num2 = (BigInt(num1) * 10631n) / 30n + 227013n;
    for (; year > 0; --year) num2 = num2 + BigInt(354 + (this.isLeapYearWithEra(year, 0) ? 1 : 0));
    return num2;
  }

  private getAbsoluteDateHijri(y: number, m: number, d: number): bigint {
    return this.daysUpToHijriYear(y) + BigInt(HijriCalendar.hijriMonthDays[m - 1] + d - 1 - this.hijriAdjustment);
  }
  private static checkTicksRange(ticks: bigint): void {
    if (ticks < HijriCalendar.calendarMinValue.ticks || ticks > HijriCalendar.calendarMaxValue.ticks)
      throw new Error('ArgumentOutOfRange_CalendarRange');
  }
  private static checkEraRange(era: number): void {
    if (era !== 0 && era !== HijriCalendar.hijriEra) throw new Error('ArgumentOutOfRange_InvalidEraValue');
  }
  private static checkYearRange(year: number, era: number) {
    HijriCalendar.checkEraRange(era);
    // if (year < 1 || year > 9666)
    //   throw new Error("ArgumentOutOfRange_Range");
  }
  private static checkYearMonthRange(year: number, month: number, era: number): void {
    HijriCalendar.checkYearRange(year, era);
    if (year === 9666 && month > 4) throw Error('ArgumentOutOfRange_Range');
    if (month < 1 || month > 12) throw new Error('ArgumentOutOfRange_Month');
  }

  private getDatePart(ticks: bigint, part: number): number {
    HijriCalendar.checkTicksRange(ticks);
    let num = ticks / 864000000000n + 1n;
    num += BigInt(this.hijriAdjustment);
    let num2 = Math.floor((Number(num - 227013n) * 30) / 10631) + 1;
    let num3 = this.daysUpToHijriYear(num2);
    const num4 = BigInt(this.getDaysInYearWithEra(num2, 0));
    if (num < num3) {
      num3 -= num4;
      num2--;
    } else if (num === num3) {
      num2--;
      num3 -= num4;
    } else if (num > num3 + num4) {
      num3 += num4;
      num2++;
    }
    if (part === 0) {
      return num2;
    }
    let i = 1;
    num -= num3;
    if (part === 1) {
      return Math.floor(Number(num));
    }
    // tslint:disable-next-line:no-empty
    for (; i <= 12 && num > HijriCalendar.hijriMonthDays[i - 1]; i++) {}
    i--;
    if (part === 2) {
      return i;
    }
    const result = Math.floor(Number(num) - HijriCalendar.hijriMonthDays[i - 1]);
    if (part === 3) {
      return result;
    }
    throw new Error('InvalidOperation_DateTimeParsing');
  }
  public get hijriAdjustment(): number {
    if (this.mHijriAdvance === -2147483648)
      // TODO: this should reconsider
      this.mHijriAdvance = 0;
    return this.mHijriAdvance;
  }
  public addMonths(time: DateTime, months: number): DateTime {
    if (months < -120000 || months > 120000) {
      throw new Error('ArgumentOutOfRange_Range');
    }
    let datePart = this.getDatePart(time.ticks, 0);
    let datePart2 = this.getDatePart(time.ticks, 2);
    let num = this.getDatePart(time.ticks, 3);
    const num2 = datePart2 - 1 + months;
    if (num2 >= 0) {
      datePart2 = (num2 % 12) + 1;
      datePart += Math.floor(num2 / 12);
    } else {
      datePart2 = 12 + ((num2 + 1) % 12);
      datePart += Math.ceil((num2 - 11) / 12);
    }
    const daysInMonth = this.getDaysInMonth(datePart, datePart2);
    if (num > daysInMonth) {
      num = daysInMonth;
    }
    const ticks = this.getAbsoluteDateHijri(datePart, datePart2, num) * 864000000000n + (time.ticks % 864000000000n);
    return new DateTime(ticks);
  }
  public addYears(time: DateTime, years: number): DateTime {
    return this.addMonths(time, years * 12);
  }
  public getDayOfMonth(time: DateTime): number {
    return this.getDatePart(time.ticks, 3);
  }
  public getDayOfWeek(time: DateTime): DayOfWeek {
    return (Number(time.ticks / 864000000000n + 1n) % 7) as DayOfWeek;
  }
  public getDayOfYear(time: DateTime): number {
    return this.getDatePart(time.ticks, 1);
  }
  public getDaysInMonthWithEra(year: number, month: number, era: number): number {
    HijriCalendar.checkYearMonthRange(year, month, era);
    return month === 12 ? (!this.isLeapYearWithEra(year, 0) ? 29 : 30) : month % 2 !== 1 ? 29 : 30;
  }
  public getDaysInYearWithEra(year: number, era: number): number {
    HijriCalendar.checkYearRange(year, era);
    return !this.isLeapYearWithEra(year, 0) ? 354 : 355;
  }
  public getEra(time: DateTime): number {
    HijriCalendar.checkTicksRange(time.ticks);
    return HijriCalendar.hijriEra;
  }
  public getMonth(time: DateTime): number {
    return this.getDatePart(time.ticks, 2);
  }
  public getMonthInYearWithEra(year: number, era: number): number {
    HijriCalendar.checkYearRange(year, era);
    return 12;
  }
  public getYear(time: DateTime): number {
    return this.getDatePart(time.ticks, 0);
  }
  public isLeapDayWithEra(year: number, month: number, day: number, era: number): boolean {
    const daysInMonth = this.getDaysInMonthWithEra(year, month, era);
    if (day < 1 || day > daysInMonth) throw new Error('ArgumentOutOfRange_Day');
    return this.isLeapYearWithEra(year, era) && month === 12 && day === 30;
  }
  public isLeapMonthWithEra(year: number, month: number, era: number): boolean {
    HijriCalendar.checkYearMonthRange(year, month, era);
    return false;
  }
  public getLeapMonthWithEra(year: number, era: number): number {
    HijriCalendar.checkYearRange(year, era);
    return 0;
  }
  public isLeapYearWithEra(year: number, era: number): boolean {
    HijriCalendar.checkYearRange(year, era);
    return (year * 11 + 14) % 30 < 11;
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
    const absoluteDateHijri = this.getAbsoluteDateHijri(year, month, day);
    if (absoluteDateHijri >= 0n)
      return new DateTime(absoluteDateHijri * 864000000000n + Calendar.timeToTicks(hour, minute, second, millisecond));
    throw new Error('ArgumentOutOfRange_BadYearMonthDay');
  }
}
