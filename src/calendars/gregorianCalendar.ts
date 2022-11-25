import { DateTime } from '../dateTime';
import { DayOfWeek } from '../dayOfWeek';
import { Calendar } from './calendar';

export class GregorianCalendar extends Calendar {
  public get minSupprotedDateTime(): DateTime {
    return DateTime.minValue;
  }
  public get maxSupportedDateTime(): DateTime {
    return DateTime.maxValue;
  }
  private static get daysToMonth365(): number[] {
    return [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  }
  private static get daysToMonth366(): number[] {
    return [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
  }
  public addMonths(time: DateTime, months: number): DateTime {
    if (months < -120000 || months > 120000) throw new Error('ArgumentOutOfRange_Range');

    const datePart = time.internalgetDatePart();
    let year: number = datePart.year;
    let month: number = datePart.month;
    let day: number = datePart.day;
    const num = month - 1 + months;
    if (num >= 0) {
      month = (num % 12) + 1;
      year += Math.floor(num / 12);
    } else {
      month = 12 + ((num + 1) % 12);
      year += Math.ceil((num - 11) / 12);
    }
    const array =
      year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
        ? GregorianCalendar.daysToMonth366
        : GregorianCalendar.daysToMonth365;
    const num2 = array[month] - array[month - 1];
    if (day > num2) day = num2;
    const ticks = this.dateToTicks(year, month, day) + (time.ticks % 864000000000n);
    Calendar.checkAddResult(ticks, this.minSupprotedDateTime, this.maxSupportedDateTime);
    return new DateTime(ticks);
  }
  public addYears(time: DateTime, years: number): DateTime {
    return this.addMonths(time, years * 12);
  }
  public getDayOfMonth(time: DateTime): number {
    return time.day;
  }
  public getDayOfWeek(time: DateTime): DayOfWeek {
    return (Number(time.ticks / 864000000000n + 1n) % 7) as DayOfWeek;
  }
  public getDayOfYear(time: DateTime): number {
    return time.dayOfYear;
  }
  public getDaysInMonthWithEra(year: number, month: number, era: number): number {
    if (era !== 0 && era !== 1) throw new Error('ArgumentOutOfRange_InvalidEraValue');
    if (year < 1 || year > 9999) throw new Error('ArgumentOutOfRange_Range');
    if (month < 1 || month > 12) throw new Error('ArgumentOutOfRange_Month');
    const numArray =
      year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)
        ? GregorianCalendar.daysToMonth365
        : GregorianCalendar.daysToMonth366;
    return numArray[month] - numArray[month - 1];
  }
  public getDaysInYearWithEra(year: number, era: number): number {
    if (era !== 0 && era !== 1) throw new Error('ArgumentOutOfRange_InvalidEraValue');
    if (year < 1 || year > 9999) throw new Error('ArgumentOutOfRange_Range');
    return year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0) ? 365 : 366;
  }
  public getEra(time: DateTime): number {
    return 1;
  }
  public getMonth(time: DateTime): number {
    return time.month;
  }
  public getMonthInYearWithEra(year: number, era: number): number {
    if (era !== 0 && era !== 1) throw new Error('ArgumentOutOfRange_InvalidEraValue');
    if (year >= 1 && year <= 9999) return 12;
    throw new Error('ArgumentOutOfRange_Range');
  }
  public getYear(time: DateTime): number {
    return time.year;
  }
  public isLeapDayWithEra(year: number, month: number, day: number, era: number): boolean {
    if (month < 1 || month > 12) throw new Error('ArgumentOutOfRange_Range');
    if (era !== 0 && era !== 1) throw new Error('ArgumentOutOfRange_InvalidEraValue');
    if (year < 1 || year > 9999) throw new Error('ArgumentOutOfRange_Range');
    if (day < 1 || day > this.getDaysInMonth(year, month)) throw new Error('ArgumentOutOfRange_Range');
    return this.isLeapYear(year) && month === 2 && day === 29;
  }
  public isLeapMonthWithEra(year: number, month: number, era: number): boolean {
    if (era !== 0 && era !== 1) throw new Error('ArgumentOutOfRange_InvalidEraValue');
    if (year < 1 || year > 9999) throw new Error('ArgumentOutOfRange_Range');
    if (month < 1 || month > 12) throw new Error('ArgumentOutOfRange_Range');
    return false;
  }
  public isLeapYearWithEra(year: number, era: number): boolean {
    if (era !== 0 && era !== 1) throw new Error('ArgumentOutOfRange_InvalidEraValue');
    if (year < 1 || year > 9999) throw new Error('ArgumentOutOfRange_Range');
    if (year % 4 !== 0) return false;
    return year % 100 !== 0 || year % 400 === 0;
  }
  public getLeapMonthWithEra(year: number, era: number): number {
    if (era !== 0 && era !== 1) throw new Error('ArgumentOutOfRange_InvalidEraValue');
    if (year < 1 || year > 9999) throw new Error('ArgumentOutOfRange_Range');
    return 0;
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
    if (era === 0 || era === 1) return new DateTime(year, month, day, hour, minute, second, millisecond);
    throw new Error('ArgumentOutOfRange_BadYearMonthDay');
  }

  private getDatePart(ticks: bigint, part: number): number {
    const num1 = Number(ticks / 864000000000n);
    const num2 = Math.floor(num1 / 146097);
    const num3 = num1 - num2 * 146097;
    let num4 = Math.floor(num3 / 36524);
    if (num4 === 4) num4 = 3;
    const num5 = num3 - num4 * 36524;
    const num6 = Math.floor(num5 / 1461);
    const num7 = num5 - num6 * 1461;
    let num8 = Math.floor(num7 / 365);
    if (num8 === 4) num8 = 3;
    if (part === 0) return num2 * 400 + num4 * 100 + num6 * 4 + num8 + 1;
    const num9 = num7 - num8 * 365;
    if (part === 1) return num9 + 1;
    const numArray =
      num8 === 3 && (num6 !== 24 || num4 === 3) ? GregorianCalendar.daysToMonth366 : GregorianCalendar.daysToMonth365;

    // tslint:disable-next-line:no-bitwise
    let index = num9 >> 6;
    while (num9 >= numArray[index]) ++index;
    return part === 2 ? index : num9 - numArray[index - 1] + 1;
  }

  private static getAbsoluteDate(year: number, month: number, day: number): bigint {
    if (year >= 1 && year <= 9999 && month >= 1 && month <= 12) {
      const array =
        year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
          ? GregorianCalendar.daysToMonth366
          : GregorianCalendar.daysToMonth365;
      if (day >= 1 && day <= array[month] - array[month - 1]) {
        const num = year - 1;
        const num2 =
          num * 365 + Math.floor(num / 4) - Math.floor(num / 100) + Math.floor(num / 400) + array[month - 1] + day - 1;
        return BigInt(num2);
      }
    }
    throw new Error('ArgumentOutOfRange_BadYearMonthDay');
  }

  public dateToTicks(year: number, month: number, day: number): bigint {
    return GregorianCalendar.getAbsoluteDate(year, month, day) * 864000000000n;
  }
}
