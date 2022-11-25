import { Calendar, GregorianCalendar } from './calendars/index';
import { DayOfWeek } from './dayOfWeek';
import { Internals } from './internals/fullSystemTime';

export class DateTime {
  private dateDate: bigint;

  private static readonly DaysToMonth365: number[] = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
  private static readonly DaysToMonth366: number[] = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];

  public static get minValue(): DateTime {
    return new DateTime(0n);
  }
  public static get maxValue(): DateTime {
    return new DateTime(3155378975999999999n);
  }
  public readonly calendar: Calendar;
  /* tslint:disable:unified-signatures */
  constructor();
  constructor(ticks: bigint);
  constructor(year: number, month: number, day: number);
  constructor(year: number, month: number, day: number, calendar: Calendar);
  constructor(year: number, month: number, day: number, hour: number, minute: number, second: number);
  constructor(year: number, month: number, day: number, hour: number, minute: number, second: number);
  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    miliseconds: number,
  );
  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    calendar: Calendar,
  );
  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    miliseconds: number,
    calendar: Calendar,
  );
  constructor(
    ticksOrYear?: bigint | number | any,
    month?: number,
    day?: number,
    hourOrCalendar?: number | Calendar,
    minute?: number,
    second?: number,
    milisecondsOrCalendar?: number | Calendar,
    calendar?: Calendar,
  ) {
    if (!ticksOrYear) ticksOrYear = DateTime.now.ticks;
    if (typeof ticksOrYear !== 'number') {
      this.dateDate = ticksOrYear;
    } else if (calendar) {
      this.setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSecondsAndMilisecondsAndCalendar(
        ticksOrYear,
        month,
        day,
        Number(hourOrCalendar),
        minute,
        second,
        Number(milisecondsOrCalendar),
        calendar,
      );
      this.calendar = calendar;
    } else {
      if (hourOrCalendar instanceof Calendar) this.calendar = hourOrCalendar;
      else if (milisecondsOrCalendar instanceof Calendar) this.calendar = milisecondsOrCalendar;
      else calendar = new GregorianCalendar();

      if (hourOrCalendar) {
        if (!(hourOrCalendar instanceof Calendar)) {
          if (!(milisecondsOrCalendar instanceof Calendar)) {
            this.setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSeconds(
              ticksOrYear,
              month,
              day,
              hourOrCalendar,
              minute,
              second,
            );
            if (milisecondsOrCalendar)
              this.setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSecondsAndMiliseconds(
                ticksOrYear,
                month,
                day,
                hourOrCalendar,
                minute,
                second,
                milisecondsOrCalendar,
              );
          }
          // milisecondsOrCalendar is instance of calendar
          else {
            this.setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSecondsAndCalendar(
              ticksOrYear,
              month,
              day,
              hourOrCalendar,
              minute,
              second,
              milisecondsOrCalendar,
            );
          }
        }
        // hourOrCalendar is instance of Calendar
        else {
          this.setPropertiesWithYearAndMonthAndDayAndCalendar(ticksOrYear, month, day, hourOrCalendar);
        }
      }
      // hourOrCalendar is undefined
      else {
        this.setPropertiesWithYearAndMonthAndDay(ticksOrYear, month, day);
      }
    }
  }
  /* tslint:enable:unified-signatures */
  private setPropertiesWithYearAndMonthAndDay(year: number, month: number, day: number) {
    this.dateDate = DateTime.dateToTicks(year, month, day);
  }
  private setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSeconds(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
  ) {
    this.setPropertiesWithYearAndMonthAndDay(year, month, day);
    this.dateDate += DateTime.timeToTicks(hour, minute, second);
  }
  private setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSecondsAndMiliseconds(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    miliseconds: number,
  ) {
    this.setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSeconds(year, month, day, hour, minute, second);
    this.dateDate += BigInt(miliseconds) * 10000n;
  }

  private setPropertiesWithYearAndMonthAndDayAndCalendar(year: number, month: number, day: number, calendar: Calendar) {
    this.setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSecondsAndCalendar(year, month, day, 0, 0, 0, calendar);
  }

  private setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSecondsAndCalendar(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    calendar: Calendar,
  ) {
    this.setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSecondsAndMilisecondsAndCalendar(
      year,
      month,
      day,
      hour,
      minute,
      second,
      0,
      calendar,
    );
  }

  private setPropertiesWithYearAndMonthAndDayAndHourAndMinuteAndSecondsAndMilisecondsAndCalendar(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    miliseconds: number,
    calendar: Calendar,
  ) {
    this.dateDate = calendar.toDateTime(year, month, day, hour, minute, second, miliseconds, 0).ticks;
  }

  public get ticks(): bigint {
    return this.internalTicks;
  }
  private get internalTicks(): bigint {
    // tslint:disable-next-line:no-bitwise
    return this.dateDate & 4611686018427387903n;
  }
  private get internalKind(): bigint {
    // tslint:disable-next-line:no-bitwise
    return this.dateDate & 13835058055282163712n;
  }
  private getDatePart(part: number): number {
    const num1 = Number(this.internalTicks / 864000000000n);
    const num2 = Math.floor(num1 / 146097);
    const num3 = num1 - num2 * 146097;
    let num4 = Math.floor(num3 / 36524);
    if (num4 === 4) num4 = 3;
    const num5 = num3 - num4 * 36524;
    const num6 = Math.floor(num5 / 1461);
    const num7 = num5 - num6 * 1461;
    let num8 = Math.floor(num7 / 365);
    if (num8 === 4) num8 = 3;
    if (part === 0) return Number(num2) * 400 + Number(num4) * 100 + Number(num6) * 4 + Number(num8) + 1;
    const num9 = num7 - num8 * 365;
    if (part === 1) return Number(num9) + 1;
    const numArray = num8 === 3 && (num6 !== 24 || num4 === 3) ? DateTime.DaysToMonth366 : DateTime.DaysToMonth365;
    // tslint:disable-next-line:no-bitwise
    let index = Number(num9) >> 6;
    while (num9 >= numArray[index]) ++index;
    return part === 2 ? index : Number(num9) - numArray[index - 1] + 1;
  }
  public get day(): number {
    return this.getDatePart(3);
  }

  public get month(): number {
    return this.getDatePart(2);
  }

  public get year(): number {
    return this.getDatePart(0);
  }
  public get dayOfWeek(): DayOfWeek {
    return Number((this.internalTicks / (864000000000n + 1n)) % 7n) as DayOfWeek;
  }
  public get dayOfYear(): number {
    return this.getDatePart(1);
  }

  public get hour(): number {
    return Number((this.internalTicks / 36000000000n) % 24n);
  }
  public get minute(): number {
    return Number((this.internalTicks / 600000000n) % 60n);
  }
  public get second(): number {
    return Number((this.internalTicks / 10000000n) % 60n);
  }
  public get millisecond(): number {
    return Number((this.internalTicks / 10000n) % 1000n);
  }
  public get date(): DateTime {
    // tslint:disable-next-line:no-bitwise
    return new DateTime((this.internalTicks - (this.internalTicks % 864000000000n)) | this.internalKind);
  }

  public static get utcNow(): DateTime {
    const fullSystemTime = this.getSystemTimeWithLeapSecondsHandling();
    return this.createDateTimeFromSystemTime(fullSystemTime);
  }
  public static get now(): DateTime {
    const fullSystemTime = this.getTimeWithLeapSecondsHandling();
    return this.createDateTimeFromSystemTime(fullSystemTime);
  }

  private static getSystemTimeWithLeapSecondsHandling(): Internals.Date.FullSystemTime {
    const date = new Date();
    const fullSystemTime = new Internals.Date.FullSystemTime(
      date.getUTCFullYear(),
      date.getUTCMonth() + 1,
      date.getUTCDay() as DayOfWeek,
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
    );
    if (fullSystemTime.wSecond > 59) {
      fullSystemTime.wSecond = 59;
      fullSystemTime.wMillisecond = 999;
      fullSystemTime.hundredNanoSecond = 9999;
    }
    return fullSystemTime;
  }
  private static getTimeWithLeapSecondsHandling(): Internals.Date.FullSystemTime {
    const date = new Date();
    const fullSystemTime = new Internals.Date.FullSystemTime(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDay() as DayOfWeek,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    );
    if (fullSystemTime.wSecond > 59) {
      fullSystemTime.wSecond = 59;
      fullSystemTime.wMillisecond = 999;
      fullSystemTime.hundredNanoSecond = 9999;
    }
    return fullSystemTime;
  }
  private static createDateTimeFromSystemTime(time: Internals.Date.FullSystemTime) {
    const dateticks = this.dateToTicks(time.wYear, time.wMonth, time.wDay);
    const timeticks = this.timeToTicks(time.wHour, time.wMinute, time.wSecond);
    // tslint:disable-next-line:no-bitwise
    const ele = (BigInt(time.wMillisecond) * 100000n + BigInt(time.hundredNanoSecond)) | 4611686018427387904n;
    return new DateTime(dateticks + timeticks + ele);
  }

  static dateToTicks(year: number, month: number, day: number): bigint;
  static dateToTicks(date: Date): bigint;
  static dateToTicks(date?: Date | number, month?: number, day?: number): bigint {
    let iyear: number;
    let imonth: number;
    let iday: number;

    if (date instanceof Date) {
      iyear = date.getFullYear();
      imonth = date.getMonth() + 1;
      iday = date.getDate();
    } else {
      iyear = date;
      imonth = month;
      iday = day;
    }

    const numArray = this.isLeapYear(iyear) ? this.DaysToMonth366 : this.DaysToMonth365;
    if (iday >= 1 && iday <= numArray[imonth] - numArray[imonth - 1]) {
      const num = BigInt(Math.round(iyear) - 1);
      const iiday = BigInt(iday);
      const numArrayVal = BigInt(numArray[imonth - 1]);
      return (num * 365n + num / 4n - num / 100n + num / 400n + numArrayVal + iiday - 1n) * 864000000000n;
    }
    throw new Error('ArgumentOutOfRange_BadYearMonthDay');
  }
  static timeToTicks(hour: number, minute: number, second: number): bigint {
    if (hour >= 0 && hour < 24 && minute >= 0 && minute < 60 && second >= 0 && second < 60) {
      const num = hour * 3600 + minute * 60 + second;
      if (num > 922337203685 || num < -922337203685) throw new Error('Overflow_TimeSpanTooLong');
      return BigInt(num) * 10000000n;
    }
    throw new Error('ArgumentOutOfRange_BadHourMinuteSecond');
  }

  public addTicks(value: bigint): DateTime {
    const internalTicks = this.internalTicks;
    if (value > 3155378975999999999n - internalTicks || value < internalTicks * -1n)
      throw new Error('ArgumentOutOfRange_DateArithmetic');
    // tslint:disable-next-line:no-bitwise
    return new DateTime((internalTicks + value) | this.internalKind);
  }
  public addDays(value: number): DateTime {
    return this.add(value, 86400000);
  }
  public addMonths(months: number): DateTime {
    if (months < -120000 || months > 120000) throw new Error('ArgumentOutOfRange_DateTimeBadMonths');
    const val = this.internalgetDatePart();

    const num1 = val.month - 1 + months;
    let year2: number;
    if (num1 >= 0) {
      val.month = (num1 % 12) + 1;
      year2 = Math.floor(val.year + num1 / 12);
    } else {
      val.month = 12 + ((num1 + 1) % 12);
      year2 = Math.floor(val.year + num1 / 12);
    }
    let num2: number;
    if (year2 >= 1 && year2 <= 9999) {
      num2 = DateTime.daysInMonth(year2, val.month);
    } else {
      throw new Error('ArgumentOutOfRange_DateArithmetic');
    }
    if (val.day > num2) val.day = num2;
    // tslint:disable-next-line:no-bitwise
    return new DateTime(
      // tslint:disable-next-line:no-bitwise
      (DateTime.dateToTicks(year2, val.month, val.day) + (this.internalTicks % 864000000000n)) | this.internalKind,
    );
  }
  public addYears(value: number): DateTime {
    if (value < -10000 || value > 10000) throw new Error('ArgumentOutOfRange_DateTimeBadYears');
    return this.addMonths(value * 12);
  }
  public addHours(value: number): DateTime {
    return this.add(value, 3600000);
  }
  public addSeconds(value: number): DateTime {
    return this.add(value, 1000);
  }
  public addMinutes(value: number): DateTime {
    return this.add(value, 60000);
  }
  public addMilliseconds(value: number): DateTime {
    return this.add(value, 1);
  }
  public add(value: number, scale: number): DateTime {
    const num = BigInt(value * scale + (value >= 0 || scale === 1 ? 0 : 1));
    if (num <= -315537897600000n || num >= 315537897600000n) throw new Error('ArgumentOutOfRange_AddValue');
    return this.addTicks(num * 10000n);
  }
  public internalgetDatePart(): { year: number; month: number; day: number } {
    const internalTicks = this.internalTicks;
    let num = Math.floor(Number(internalTicks / 864000000000n));
    const num2 = Math.floor(num / 146097);
    num -= num2 * 146097;
    let num3 = Math.floor(num / 36524);
    if (num3 === 4) {
      num3 = 3;
    }
    num -= num3 * 36524;
    const num4 = Math.floor(num / 1461);
    num -= num4 * 1461;
    let num5 = Math.floor(num / 365);
    if (num5 === 4) {
      num5 = 3;
    }
    const year = num2 * 400 + num3 * 100 + num4 * 4 + num5 + 1;
    num -= num5 * 365;
    const array = num5 === 3 && (num4 !== 24 || num3 === 3) ? DateTime.DaysToMonth366 : DateTime.DaysToMonth365;
    let i: number;
    /* tslint:disable:no-bitwise */
    // tslint:disable-next-line:no-empty
    for (i = (num >> 5) + 1; num >= array[i]; i++) {}
    /* tslint:enable:no-bitwise */
    const month = i;
    const day = num - array[i - 1] + 1;

    // tslint:disable-next-line:object-literal-shorthand
    return { year: year, month: month, day: day };
  }

  public static isLeapYear(year: number) {
    if (year < 1 || year > 9999) throw new Error('ArgumentOutOfRange_Year');
    if (year % 4 !== 0) return false;
    return year % 100 !== 0 || year % 400 === 0;
  }
  public static daysInMonth(year: number, month: number): number {
    if (month < 1 || month > 12) throw new Error('ArgumentOutOfRange_Month');
    const numArray = DateTime.isLeapYear(year) ? DateTime.DaysToMonth366 : DateTime.DaysToMonth365;
    return numArray[month] - numArray[month - 1];
  }

  public clone(): DateTime {
    return new DateTime(this.ticks);
  }

  /* tslint:disable:unified-signatures */
  public toString(): string;
  public toString(format: string): string;
  public toString(format?: string): string {
    const formatNumber = (theNumber: number, length: number) => {
      const unformatted = `${`0`.repeat(length)}${theNumber.toString()}`;
      return unformatted.substring(unformatted.length - length, unformatted.length);
    };

    if (!format)
      return `${formatNumber(this.year, 4)}-${formatNumber(this.month, 2)}-${formatNumber(this.day, 2)}${
        this.hour > 0
          ? `T${formatNumber(this.hour, 2)}:${formatNumber(this.minute, 2)}:${formatNumber(this.second, 2)}`
          : ''
      }`;

    return format
      .replace('yyyy', formatNumber(this.year, 4))
      .replace('MM', formatNumber(this.month, 2))
      .replace('dd', formatNumber(this.day, 2))
      .replace('HH', formatNumber(this.hour, 2))
      .replace('mm', formatNumber(this.minute, 2))
      .replace('ss', formatNumber(this.second, 2))
      .replace('ffff', formatNumber(this.millisecond, 4));
  }
  /* tslint:enable:unified-signatures */
}
