import { DateTime } from '../dateTime';

const bigIntMax = (...args) => args.reduce((m, e) => (e > m ? e : m));
const bigIntMin = (...args) => args.reduce((m, e) => (e < m ? e : m));

enum CorrectionAlgorithm {
  Default,
  Year1988to2019,
  Year1900to1987,
  Year1800to1899,
  Year1700to1799,
  Year1620to1699,
}

export class CalendaricalCalculationHelper {
  private static ephemerisCorrectionTable = [
    { year: 2020, algorithm: CorrectionAlgorithm.Default },
    { year: 1988, algorithm: CorrectionAlgorithm.Year1988to2019 },
    { year: 1900, algorithm: CorrectionAlgorithm.Year1900to1987 },
    { year: 1800, algorithm: CorrectionAlgorithm.Year1800to1899 },
    { year: 1700, algorithm: CorrectionAlgorithm.Year1700to1799 },
    { year: 1620, algorithm: CorrectionAlgorithm.Year1620to1699 },
    { year: Number.MIN_VALUE, algorithm: CorrectionAlgorithm.Default },
  ];
  private static get coefficients1900to1987(): number[] {
    return [-2e-5, 0.000297, 0.025184, -0.181133, 0.55304, -0.861938, 0.677066, -0.212591];
  }
  private static coefficients1800to1899 = [
    -9e-6, 0.003844, 0.083563, 0.865736, 4.867575, 15.845535, 31.332267, 38.291999, 28.316289, 11.636204, 2.043794,
  ];
  private static coefficients1700to1799 = [8.118780842, -0.005092142, 0.003336121, -2.66484e-5];
  private static coefficients1620to1699 = [196.58333, -1627.0 / 400.0, 0.0219167];

  private static get lambdaCoefficients(): number[] {
    return [280.46645, 36000.76983, 0.0003032];
  }
  private static get anomalyCoefficients(): number[] {
    return [357.5291, 35999.0503, -0.0001559, -4.8e-7];
  }
  private static get eccentricityCoefficients(): number[] {
    return [0.016708617, -4.2037e-5, -1.236e-7];
  }
  private static get coefficients(): number[] {
    return [
      this.angle(23, 26, 21.448),
      this.angle(0, 0, -46.815),
      this.angle(0, 0, -0.00059),
      this.angle(0, 0, 0.001813),
    ];
  }
  private static get coefficientsA(): number[] {
    return [124.9, -1934.134, 0.002063];
  }

  private static get coefficientsB(): number[] {
    return [201.11, 72001.5377, 0.00057];
  }

  public static middayAtPersianObservationSite(date: number) {
    return this.midday(date, this.initLongitude(52.5));
  }
  public static normalizeLongitude(longitude: number) {
    longitude = this.remaindar(longitude, 360);
    if (longitude < 0) return longitude + 360;
    return longitude;
  }
  private static initLongitude(longitude: number): number {
    return this.normalizeLongitude(longitude + 180) - 180;
  }
  private static remaindar(divisor: number, dividend: number): number {
    const num = Math.floor(divisor / dividend);
    return divisor - dividend * num;
  }
  public static midday(date: number, longitude: number): number {
    return this.asLocalTime(Number(date) + 0.5, longitude) - this.asDayFraction(longitude);
  }
  public static asDayFraction(longitude: number): number {
    return longitude / 360;
  }
  public static asLocalTime(apparentMidday: number, longitude: number): number {
    const time = apparentMidday - this.asDayFraction(longitude);
    return apparentMidday - this.equationOfTime(time);
  }
  private static equationOfTime(time: number): number {
    const num1 = this.julianCenturies(time);
    const num2 = this.polyNomialSum(this.lambdaCoefficients, num1);
    const degree = this.polyNomialSum(this.anomalyCoefficients, num1);
    const x1 = this.polyNomialSum(this.eccentricityCoefficients, num1);
    const num3 = this.tanOfDegree(this.obliquity(num1) / 2.0);
    const x2 = num3 * num3;
    const sign =
      (x2 * this.sinOfDegree(2.0 * num2) -
        2.0 * x1 * this.sinOfDegree(degree) +
        4.0 * x1 * x2 * this.sinOfDegree(degree) * this.cosOfDegree(2.0 * num2) -
        0.5 * Math.pow(x2, 2.0) * this.sinOfDegree(4.0 * num2) -
        1.25 * Math.pow(x1, 2.0) * this.sinOfDegree(2.0 * degree)) /
      (2.0 * Math.PI);
    return this.copySign(Math.min(Math.abs(sign), 0.5), sign);
  }
  public static julianCenturies(moment: number): number {
    return (moment + this.ephemerisCorrection(moment) - 730120.5) / 36525.0;
  }
  private static ephemerisCorrection(moment: number): number {
    const gregorianYear = this.getGregorianYear(moment);

    this.ephemerisCorrectionTable.forEach((correctionAlgorithmMap) => {
      if (correctionAlgorithmMap.year <= gregorianYear) {
        switch (correctionAlgorithmMap.algorithm) {
          case CorrectionAlgorithm.Default:
            return this.defaultEphemerisCorrection(gregorianYear);
          case CorrectionAlgorithm.Year1988to2019:
            return this.ephemerisCorrection1988to2019(gregorianYear);
          case CorrectionAlgorithm.Year1900to1987:
            return this.ephemerisCorrection1900to1987(gregorianYear);
          case CorrectionAlgorithm.Year1800to1899:
            return this.ephemerisCorrection1800to1899(gregorianYear);
          case CorrectionAlgorithm.Year1700to1799:
            return this.ephemerisCorrection1700to1799(gregorianYear);
          case CorrectionAlgorithm.Year1620to1699:
            return this.ephemerisCorrection1620to1699(gregorianYear);
          default:
            return this.defaultEphemerisCorrection(gregorianYear);
        }
      }
    });
    return this.defaultEphemerisCorrection(gregorianYear);
  }
  private static getGregorianYear(numberOfDays: number): number {
    return new DateTime(bigIntMin(BigInt(Math.round(numberOfDays)) * BigInt(864000000000), DateTime.maxValue.ticks))
      .year;
  }
  private static defaultEphemerisCorrection(gregorianYear: number): number {
    return (
      (Math.pow(0.5 + Number(this.getNumberOfDays(new DateTime(gregorianYear, 1, 1)) - this.startOf1810), 2) /
        41048480.0 -
        15.0) /
      86400
    );
  }
  private static ephemerisCorrection1988to2019(gregorianYear: number): number {
    return (gregorianYear - 1933) / 86400.0;
  }
  private static ephemerisCorrection1900to1987(gregorianYear: number): number {
    const indeterminate = this.centuriesFrom1900(gregorianYear);
    return this.polyNomialSum(this.coefficients1900to1987, indeterminate);
  }
  private static ephemerisCorrection1800to1899(gregorianYear: number): number {
    const indeterminate = this.centuriesFrom1900(gregorianYear);
    return this.polyNomialSum(this.coefficients1800to1899, indeterminate);
  }

  private static ephemerisCorrection1700to1799(gregorianYear: number): number {
    const indeterminate = gregorianYear - 1700;
    return this.polyNomialSum(this.coefficients1700to1799, indeterminate) / 86400.0;
  }
  private static ephemerisCorrection1620to1699(gregorianYear: number): number {
    const indeterminate = gregorianYear - 1600;
    return this.polyNomialSum(this.coefficients1620to1699, indeterminate) / 86400.0;
  }

  private static centuriesFrom1900(gregorianYear: number) {
    return Number(this.getNumberOfDays(new DateTime(gregorianYear, 7, 1)) - this.startOf1900Century) / 36525;
  }

  public static getNumberOfDays(date: DateTime): bigint {
    return date.ticks / BigInt(864000000000);
  }
  private static get startOf1810(): bigint {
    return this.getNumberOfDays(new DateTime(1810, 1, 1));
  }
  private static get startOf1900Century(): bigint {
    return this.getNumberOfDays(new DateTime(1900, 1, 1));
  }

  private static polyNomialSum(coefficients: number[], indeterminate: number): number {
    let coefficient = coefficients[0];
    let num = 1.0;
    for (let index = 1; index < coefficients.length; ++index) {
      num *= indeterminate;
      coefficient += coefficients[index] * num;
    }
    return coefficient;
  }
  private static tanOfDegree(degree: number): number {
    return Math.tan(this.radiansFromDegrees(degree));
  }
  private static sinOfDegree(degree: number): number {
    return Math.sin(this.radiansFromDegrees(degree));
  }
  private static cosOfDegree(degree: number): number {
    return Math.cos(this.radiansFromDegrees(degree));
  }
  private static radiansFromDegrees(degree: number): number {
    return (degree * Math.PI) / 180.0;
  }
  private static obliquity(julianCenturies: number): number {
    return this.polyNomialSum(this.coefficients, julianCenturies);
  }

  private static angle(degrees: number, minute: number, second: number) {
    return (second / 60.0 + minute) / 60.0 + degrees;
  }
  private static isNegative(value: number): boolean {
    return Math.sign(value) === -1;
  }
  private static copySign(value: number, sign: number): number {
    return this.isNegative(value) !== this.isNegative(sign) ? -value : value;
  }

  public static compute(time: number): number {
    const julianCenturies = this.julianCenturies(time);
    return this.initLongitude(
      282.7771834 +
        36000.76953744 * julianCenturies +
        5.72957795130823e-6 * this.sumLongSequenceOfPeriodicTerms(julianCenturies) +
        this.aberration(julianCenturies) +
        this.nutation(julianCenturies),
    );
  }
  public static asSeason(longitude: number): number {
    return longitude >= 0.0 ? longitude : longitude + 360.0;
  }
  public static estimatePrior(longitude: number, time: number): number {
    const time1 = time - 1.01456163611111 * this.asSeason(this.initLongitude(this.compute(time) - longitude));
    const num = this.initLongitude(this.compute(time1) - longitude);
    return Math.min(time, time1 - 1.01456163611111 * num);
  }
  public static persianNewYearOnOrBefore(numberOfDays: bigint): bigint {
    const num1 =
      BigInt(Math.floor(this.estimatePrior(0.0, this.middayAtPersianObservationSite(Number(numberOfDays))))) -
      BigInt(1);
    const num2 = num1 + 3n;
    let num3: bigint = num1;
    while (num3 !== num2) {
      const num4 = this.compute(this.middayAtPersianObservationSite(Number(num3)));
      if (0.0 <= num4 && num4 <= 2.0) break;
      num3 = num3 + BigInt(1);
    }
    return num3 - BigInt(1);
  }
  private static periodicTerm(julianCenturies: number, x: number, y: number, z: number): number {
    return x * this.sinOfDegree(y + z * julianCenturies);
  }
  private static sumLongSequenceOfPeriodicTerms(julianCenturies: number): number {
    return (
      0.0 +
      this.periodicTerm(julianCenturies, 403406, 270.54861, 0.9287892) +
      this.periodicTerm(julianCenturies, 195207, 340.19128, 35999.1376958) +
      this.periodicTerm(julianCenturies, 119433, 63.91854, 35999.4089666) +
      this.periodicTerm(julianCenturies, 112392, 331.2622, 35998.7287385) +
      this.periodicTerm(julianCenturies, 3891, 317.843, 71998.20261) +
      this.periodicTerm(julianCenturies, 2819, 86.631, 71998.4403) +
      this.periodicTerm(julianCenturies, 1721, 240.052, 36000.35726) +
      this.periodicTerm(julianCenturies, 660, 310.26, 71997.4812) +
      this.periodicTerm(julianCenturies, 350, 247.23, 32964.4678) +
      this.periodicTerm(julianCenturies, 334, 260.87, -19.441) +
      this.periodicTerm(julianCenturies, 314, 297.82, 445267.1117) +
      this.periodicTerm(julianCenturies, 268, 343.14, 45036.884) +
      this.periodicTerm(julianCenturies, 242, 166.79, 1938.0 / 625.0) +
      this.periodicTerm(julianCenturies, 234, 81.53, 22518.4434) +
      this.periodicTerm(julianCenturies, 158, 3.5, -19.9739) +
      this.periodicTerm(julianCenturies, 132, 132.75, 65928.9345) +
      this.periodicTerm(julianCenturies, 129, 182.95, 9038.0293) +
      this.periodicTerm(julianCenturies, 114, 162.03, 3034.7684) +
      this.periodicTerm(julianCenturies, 99, 29.8, 33718.148) +
      this.periodicTerm(julianCenturies, 93, 266.4, 3034.448) +
      this.periodicTerm(julianCenturies, 86, 249.2, -2280.773) +
      this.periodicTerm(julianCenturies, 78, 157.6, 29929.992) +
      this.periodicTerm(julianCenturies, 72, 257.8, 31556.493) +
      this.periodicTerm(julianCenturies, 68, 185.1, 149.588) +
      this.periodicTerm(julianCenturies, 64, 69.9, 9037.75) +
      this.periodicTerm(julianCenturies, 46, 8.0, 107997.405) +
      this.periodicTerm(julianCenturies, 38, 197.1, -4444.176) +
      this.periodicTerm(julianCenturies, 37, 250.4, 151.771) +
      this.periodicTerm(julianCenturies, 32, 65.3, 67555.316) +
      this.periodicTerm(julianCenturies, 29, 162.7, 31556.08) +
      this.periodicTerm(julianCenturies, 28, 341.5, -4561.54) +
      this.periodicTerm(julianCenturies, 27, 291.6, 107996.706) +
      this.periodicTerm(julianCenturies, 27, 98.5, 1221.655) +
      this.periodicTerm(julianCenturies, 25, 146.7, 62894.167) +
      this.periodicTerm(julianCenturies, 24, 110.0, 31437.369) +
      this.periodicTerm(julianCenturies, 21, 5.2, 14578.298) +
      this.periodicTerm(julianCenturies, 21, 342.6, -31931.757) +
      this.periodicTerm(julianCenturies, 20, 230.9, 34777.243) +
      this.periodicTerm(julianCenturies, 18, 256.1, 1221.999) +
      this.periodicTerm(julianCenturies, 17, 45.3, 62894.511) +
      this.periodicTerm(julianCenturies, 14, 242.9, -4442.039) +
      this.periodicTerm(julianCenturies, 13, 115.2, 107997.909) +
      this.periodicTerm(julianCenturies, 13, 151.8, 119.066) +
      this.periodicTerm(julianCenturies, 13, 285.3, 16859.071) +
      this.periodicTerm(julianCenturies, 12, 53.3, -4.578) +
      this.periodicTerm(julianCenturies, 10, 126.6, 26895.292) +
      this.periodicTerm(julianCenturies, 10, 205.7, -39.127) +
      this.periodicTerm(julianCenturies, 10, 85.9, 12297.536) +
      this.periodicTerm(julianCenturies, 10, 146.1, 90073.778)
    );
  }
  private static aberration(julianCenturies: number): number {
    return 9.74e-5 * this.cosOfDegree(177.63 + 35999.01848 * julianCenturies) - 0.005575;
  }
  private static nutation(julianCenturies: number): number {
    const degree1 = this.polyNomialSum(this.coefficientsA, julianCenturies);
    const degree2 = this.polyNomialSum(this.coefficientsB, julianCenturies);
    return -0.004778 * this.sinOfDegree(degree1) - 0.0003667 * this.sinOfDegree(degree2);
  }
}
