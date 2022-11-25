import { HijriCalendar } from '../src/calendars/hijriCalendar';
import { DateTime } from '../src/dateTime';

describe('Persian calendar tests', () => {
    it('should add years correctly', () => {
        let calendar = new HijriCalendar();
        let hijriCalendar = new HijriCalendar();

        let dateTime = new DateTime(2268, 3, 16, 13, 22, 54, 598, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 7027);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9639-12-31 13:22:54:0598');

        dateTime = new DateTime(3329, 1, 3, 12, 34, 50, 680, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3838);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7575-03-03 12:34:50:0680');

        dateTime = new DateTime(2061, 6, 5, 3, 29, 51, 359, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 1639);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4211-10-25 03:29:51:0359');

        dateTime = new DateTime(1398, 9, 25, 18, 56, 10, 607, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 6643);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8423-11-06 18:56:10:0607');

        dateTime = new DateTime(3397, 9, 21, 15, 54, 11, 38, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3954);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7754-05-20 15:54:11:0038');

        dateTime = new DateTime(4028, 6, 2, 8, 2, 19, 532, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 530);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5044-04-04 08:02:19:0532');

        dateTime = new DateTime(1669, 5, 25, 2, 20, 4, 252, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 1238);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3442-05-27 02:20:04:0252');

        dateTime = new DateTime(3988, 10, 24, 21, 43, 16, 685, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3133);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7531-04-29 21:43:16:0685');

        dateTime = new DateTime(4771, 2, 23, 8, 31, 29, 369, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -3323);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2026-08-07 08:31:29:0369');

        dateTime = new DateTime(1942, 9, 6, 13, 54, 52, 957, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3449);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5852-09-14 13:54:52:0957');

        dateTime = new DateTime(3695, 8, 5, 8, 52, 16, 233, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 835);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5017-04-06 08:52:16:0233');

        dateTime = new DateTime(3018, 4, 4, 3, 57, 43, 739, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 5075);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8473-11-02 03:57:43:0739');

        dateTime = new DateTime(1721, 5, 1, 17, 11, 3, 701, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -769);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1545-07-20 17:11:03:0701');

        dateTime = new DateTime(3342, 3, 17, 17, 47, 40, 981, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 829);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4668-07-30 17:47:40:0981');

        dateTime = new DateTime(2472, 7, 8, 15, 42, 55, 739, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 2799);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5736-02-14 15:42:55:0739');

        dateTime = new DateTime(1496, 7, 25, 12, 27, 33, 906, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 1281);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3316-06-07 12:27:33:0906');

        dateTime = new DateTime(4740, 6, 7, 18, 13, 51, 337, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 613);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5815-08-07 18:13:51:0337');

        dateTime = new DateTime(3901, 10, 7, 12, 36, 36, 609, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3888);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8179-05-21 12:36:36:0609');

        dateTime = new DateTime(1876, 4, 24, 17, 26, 11, 344, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -1842);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0654-11-13 17:26:11:0344');

        dateTime = new DateTime(4863, 2, 3, 13, 26, 6, 362, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 4589);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9792-03-16 13:26:06:0362');

        dateTime = new DateTime(2702, 3, 2, 12, 43, 46, 256, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -2149);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1158-04-09 12:43:46:0256');

        dateTime = new DateTime(3067, 11, 14, 19, 39, 4, 240, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 124);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3718-05-26 19:39:04:0240');

        dateTime = new DateTime(3081, 6, 20, 6, 58, 2, 818, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -2484);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1201-04-03 06:58:02:0818');

        dateTime = new DateTime(2512, 2, 9, 8, 47, 57, 49, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 349);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3397-06-26 08:47:57:0049');

        dateTime = new DateTime(1147, 4, 7, 20, 19, 23, 635, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 1000);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2704-11-26 20:19:23:0635');

        dateTime = new DateTime(4894, 8, 6, 3, 45, 8, 671, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -3027);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2433-07-23 03:45:08:0671');

        dateTime = new DateTime(4894, 9, 24, 5, 41, 19, 637, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -335);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5045-07-12 05:41:19:0637');

        dateTime = new DateTime(3122, 11, 8, 8, 41, 58, 423, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 914);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4538-03-21 08:41:58:0423');

        dateTime = new DateTime(1774, 8, 25, 6, 50, 17, 315, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -737);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1628-04-29 06:50:17:0315');

        dateTime = new DateTime(4245, 1, 11, 2, 19, 16, 180, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -2368);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2442-09-16 02:19:16:0180');

        dateTime = new DateTime(3095, 11, 6, 10, 15, 44, 876, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 185);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3804-09-22 10:15:44:0876');

        dateTime = new DateTime(4042, 10, 7, 3, 53, 22, 637, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3177);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7626-05-11 03:53:22:0637');

        dateTime = new DateTime(659, 6, 11, 4, 52, 39, 807, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 2696);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3877-02-07 04:52:39:0807');

        dateTime = new DateTime(2350, 11, 22, 12, 13, 56, 539, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 5756);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8487-01-24 12:13:56:0539');

        dateTime = new DateTime(4210, 2, 20, 19, 57, 2, 36, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -2201);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2570-11-19 19:57:02:0036');

        dateTime = new DateTime(4082, 6, 14, 10, 0, 17, 299, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -128);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4458-04-10 10:00:17:0299');

        dateTime = new DateTime(3102, 7, 6, 11, 25, 40, 154, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 5632);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9095-12-31 11:25:40:0154');

        dateTime = new DateTime(1247, 5, 22, 13, 19, 47, 948, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 5277);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6951-09-09 13:19:47:0948');

        dateTime = new DateTime(1262, 8, 22, 4, 34, 57, 572, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 6041);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7707-09-26 04:34:57:0572');

        dateTime = new DateTime(2895, 11, 23, 7, 21, 52, 889, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 5436);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8705-05-15 07:21:52:0889');

        dateTime = new DateTime(2089, 7, 18, 9, 24, 14, 971, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 74);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2720-09-12 09:24:14:0971');

        dateTime = new DateTime(4945, 9, 16, 8, 36, 11, 626, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -3569);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1957-04-15 08:36:11:0626');

        dateTime = new DateTime(4008, 1, 25, 4, 49, 0, 454, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 5206);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9561-04-10 04:49:00:0454');

        dateTime = new DateTime(4660, 5, 12, 7, 53, 42, 25, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -3650);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1601-11-07 07:53:42:0025');

        dateTime = new DateTime(1021, 8, 3, 8, 6, 15, 506, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 4110);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5600-05-11 08:06:15:0506');

        dateTime = new DateTime(4839, 7, 18, 7, 30, 0, 542, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -4734);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0723-12-24 07:30:00:0542');

        dateTime = new DateTime(1928, 8, 2, 8, 20, 42, 595, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 5430);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7761-01-16 08:20:42:0595');

        dateTime = new DateTime(1999, 4, 22, 15, 20, 9, 607, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 4609);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7033-02-09 15:20:09:0607');

        dateTime = new DateTime(1792, 4, 22, 9, 38, 34, 879, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 103);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2460-06-11 09:38:34:0879');

        dateTime = new DateTime(3721, 10, 22, 17, 1, 49, 420, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -1640);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2641-05-24 17:01:49:0420');

        dateTime = new DateTime(2011, 9, 24, 22, 41, 56, 482, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 6340);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8724-08-13 22:41:56:0482');

        dateTime = new DateTime(2308, 10, 7, 18, 27, 5, 843, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 223);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3077-12-14 18:27:05:0843');

        dateTime = new DateTime(2313, 10, 10, 6, 35, 47, 385, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -330);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2546-04-12 06:35:47:0385');

        dateTime = new DateTime(3371, 6, 23, 14, 52, 40, 462, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3829);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7607-08-24 14:52:40:0462');

        dateTime = new DateTime(3441, 4, 20, 9, 17, 0, 601, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 1740);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5648-08-04 09:17:00:0601');

        dateTime = new DateTime(4146, 1, 12, 13, 21, 39, 648, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -3380);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1364-10-16 13:21:39:0648');

        dateTime = new DateTime(1092, 3, 28, 2, 22, 10, 683, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 1734);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3363-08-29 02:22:10:0683');

        dateTime = new DateTime(2676, 8, 14, 22, 7, 26, 350, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 1613);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4783-06-18 22:07:26:0350');

        dateTime = new DateTime(814, 5, 16, 6, 55, 10, 907, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3955);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5248-12-05 06:55:10:0907');

        dateTime = new DateTime(2420, 1, 21, 7, 18, 18, 533, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3573);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6436-03-04 07:18:18:0533');

        dateTime = new DateTime(940, 10, 17, 18, 37, 27, 28, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 5013);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6398-01-30 18:37:27:0028');

        dateTime = new DateTime(2756, 3, 15, 13, 31, 56, 553, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 6417);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9521-08-18 13:31:56:0553');

        dateTime = new DateTime(2011, 5, 7, 18, 44, 24, 664, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -1571);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1048-10-23 18:44:24:0664');

        dateTime = new DateTime(4806, 1, 6, 11, 11, 44, 963, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 2073);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7295-10-01 11:11:44:0963');

        dateTime = new DateTime(3669, 6, 18, 12, 24, 47, 587, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 236);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4410-09-29 12:24:47:0587');

        dateTime = new DateTime(4101, 5, 9, 21, 36, 25, 356, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -3748);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0964-05-28 21:36:25:0356');

        dateTime = new DateTime(4399, 10, 4, 8, 48, 11, 676, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 1962);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6793-11-24 08:48:11:0676');

        dateTime = new DateTime(4713, 7, 3, 10, 16, 17, 127, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -606);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4606-10-09 10:16:17:0127');

        dateTime = new DateTime(1271, 1, 26, 22, 44, 19, 211, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3422);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5174-11-24 22:44:19:0211');

        dateTime = new DateTime(784, 10, 4, 3, 46, 18, 436, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 4191);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5449-03-03 03:46:18:0436');

        dateTime = new DateTime(2160, 1, 2, 3, 39, 53, 412, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3515);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6127-08-04 03:39:53:0412');

        dateTime = new DateTime(3240, 10, 21, 3, 7, 50, 243, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 4962);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8580-02-15 03:07:50:0243');

        dateTime = new DateTime(1242, 11, 19, 11, 13, 47, 384, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 7226);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8838-04-12 11:13:47:0384');

        dateTime = new DateTime(2426, 2, 9, 9, 39, 53, 547, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -899);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2103-03-18 09:39:53:0547');

        dateTime = new DateTime(3635, 2, 5, 15, 52, 29, 839, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 4987);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8986-12-05 15:52:29:0839');

        dateTime = new DateTime(4983, 9, 6, 2, 31, 29, 199, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -66);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5392-10-26 02:31:29:0199');

        dateTime = new DateTime(4613, 7, 21, 21, 6, 54, 291, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 697);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5773-12-30 21:06:54:0291');

        dateTime = new DateTime(3399, 3, 4, 14, 29, 38, 604, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3227);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7050-06-10 14:29:38:0604');

        dateTime = new DateTime(1319, 11, 27, 4, 25, 57, 433, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 1180);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3047-01-15 04:25:57:0433');

        dateTime = new DateTime(2272, 3, 2, 3, 12, 45, 335, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3866);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6576-12-18 03:12:45:0335');

        dateTime = new DateTime(3110, 3, 14, 16, 58, 50, 229, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -1350);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2329-05-13 16:58:50:0229');

        dateTime = new DateTime(4555, 2, 7, 11, 23, 19, 901, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -3170);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1965-06-06 11:23:19:0901');

        dateTime = new DateTime(1904, 11, 7, 8, 6, 5, 531, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 2969);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5350-04-17 08:06:05:0531');

        dateTime = new DateTime(4904, 4, 23, 11, 56, 16, 83, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -1293);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4125-05-09 11:56:16:0083');

        dateTime = new DateTime(1108, 9, 6, 18, 27, 29, 416, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -1105);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0625-02-22 18:27:29:0416');

        dateTime = new DateTime(2840, 6, 7, 17, 35, 48, 337, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -1852);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1580-07-29 17:35:48:0337');

        dateTime = new DateTime(3228, 3, 15, 4, 57, 31, 553, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3203);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6861-04-11 04:57:31:0553');

        dateTime = new DateTime(2772, 9, 11, 3, 40, 7, 320, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -341);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2980-11-09 03:40:07:0320');

        dateTime = new DateTime(669, 11, 17, 22, 3, 3, 668, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 8968);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9972-06-18 22:03:03:0668');

        dateTime = new DateTime(1002, 9, 1, 12, 44, 37, 352, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 550);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2128-01-03 12:44:37:0352');

        dateTime = new DateTime(4253, 7, 8, 16, 58, 27, 916, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 926);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5646-11-11 16:58:27:0916');

        dateTime = new DateTime(1837, 6, 14, 2, 21, 56, 850, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3267);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5574-01-12 02:21:56:0850');

        dateTime = new DateTime(2827, 4, 27, 3, 1, 43, 187, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 5108);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8320-08-10 03:01:43:0187');

        dateTime = new DateTime(3709, 1, 18, 19, 12, 33, 231, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 3149);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7275-05-29 19:12:33:0231');

        dateTime = new DateTime(4263, 7, 25, 10, 16, 8, 400, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -2803);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2038-08-25 10:16:08:0400');

        dateTime = new DateTime(1101, 4, 2, 8, 6, 17, 179, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 7177);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8653-04-29 08:06:17:0179');

        dateTime = new DateTime(3495, 10, 28, 18, 57, 54, 921, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 2748);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6679-06-24 18:57:54:0921');

        dateTime = new DateTime(1667, 11, 19, 3, 17, 2, 361, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 670);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2889-11-03 03:17:02:0361');

        dateTime = new DateTime(4250, 2, 10, 9, 6, 17, 951, hijriCalendar);
        dateTime = calendar.addYears(dateTime, -3584);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1267-11-06 09:06:17:0951');

        dateTime = new DateTime(4350, 2, 19, 3, 12, 58, 408, hijriCalendar);
        dateTime = calendar.addYears(dateTime, 763);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5582-06-15 03:12:58:0408');

    });

    it('should add months correctly', () => {
        let calendar = new HijriCalendar();
        let hijriCalendar = new HijriCalendar();

        let dateTime = new DateTime(1683, 2, 8, 12, 42, 55, 189, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 7820);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2886-10-26 12:42:55:0189');

        dateTime = new DateTime(874, 9, 19, 20, 19, 22, 314, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -9417);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0708-11-11 20:19:22:0314');

        dateTime = new DateTime(2628, 3, 8, 16, 13, 30, 6, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 6385);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3687-09-27 16:13:30:0006');

        dateTime = new DateTime(959, 4, 1, 5, 33, 17, 34, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -3392);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1278-01-03 05:33:17:0034');

        dateTime = new DateTime(3467, 3, 2, 16, 57, 35, 13, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 5919);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4464-01-24 16:57:35:0013');

        dateTime = new DateTime(2353, 8, 10, 18, 37, 35, 39, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -6771);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2357-08-26 18:37:35:0039');

        dateTime = new DateTime(2546, 2, 23, 18, 6, 18, 878, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 3649);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3386-12-06 18:06:18:0878');

        dateTime = new DateTime(2569, 4, 12, 18, 40, 15, 610, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 7311);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3705-06-16 18:40:15:0610');

        dateTime = new DateTime(1195, 4, 15, 12, 12, 46, 513, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -9971);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0975-02-04 12:12:46:0513');

        dateTime = new DateTime(2018, 7, 20, 3, 39, 25, 386, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -5818);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2109-08-16 03:39:25:0386');

        dateTime = new DateTime(1492, 2, 11, 15, 45, 24, 913, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -5565);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1619-04-25 15:45:24:0913');

        dateTime = new DateTime(1378, 3, 9, 9, 21, 53, 77, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 9046);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2690-02-09 09:21:53:0077');

        dateTime = new DateTime(3554, 1, 15, 1, 4, 1, 148, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 2575);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4277-12-23 01:04:01:0148');

        dateTime = new DateTime(3241, 3, 16, 12, 32, 14, 507, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 7376);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4362-08-19 12:32:14:0507');

        dateTime = new DateTime(2577, 3, 6, 22, 2, 13, 600, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -2973);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2881-08-22 22:02:13:0600');

        dateTime = new DateTime(1338, 11, 24, 3, 7, 42, 224, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 4219);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2261-09-19 03:07:42:0224');

        dateTime = new DateTime(1970, 10, 24, 7, 27, 11, 670, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -8745);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1826-08-27 07:27:11:0670');

        dateTime = new DateTime(3530, 11, 16, 14, 25, 30, 427, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 5341);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4479-02-20 14:25:30:0427');

        dateTime = new DateTime(2463, 6, 13, 11, 23, 48, 299, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 7133);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3588-05-21 11:23:48:0299');

        dateTime = new DateTime(3355, 4, 16, 15, 44, 52, 544, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 4329);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4226-12-18 15:44:52:0544');

        dateTime = new DateTime(3045, 7, 17, 21, 50, 33, 616, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -1290);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3472-02-18 21:50:33:0616');

        dateTime = new DateTime(3719, 8, 15, 1, 56, 8, 802, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 2635);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4443-06-25 01:56:08:0802');

        dateTime = new DateTime(2777, 1, 3, 7, 47, 9, 610, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 6696);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3857-04-09 07:47:09:0610');

        dateTime = new DateTime(3585, 7, 27, 20, 17, 41, 166, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -1501);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3979-01-08 20:17:41:0166');

        dateTime = new DateTime(1688, 9, 22, 21, 27, 34, 162, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -2005);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2097-11-26 21:27:34:0162');

        dateTime = new DateTime(4061, 9, 9, 19, 53, 54, 390, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -1304);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4456-11-19 19:53:54:0390');

        dateTime = new DateTime(3863, 7, 7, 13, 48, 18, 533, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 1523);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4493-03-08 13:48:18:0533');

        dateTime = new DateTime(3483, 4, 15, 12, 12, 8, 109, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 9057);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4733-06-02 12:12:08:0109');

        dateTime = new DateTime(1161, 3, 17, 16, 31, 20, 144, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 6501);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2273-10-29 16:31:20:0144');

        dateTime = new DateTime(3007, 8, 27, 18, 14, 35, 670, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -8566);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2847-02-03 18:14:35:0670');

        dateTime = new DateTime(4863, 1, 4, 13, 20, 30, 816, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -7380);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4743-02-02 13:20:30:0816');

        dateTime = new DateTime(1200, 11, 17, 10, 32, 22, 936, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 5752);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2251-10-03 10:32:22:0936');

        dateTime = new DateTime(2094, 5, 13, 1, 58, 42, 543, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 7925);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3294-04-29 01:58:42:0543');

        dateTime = new DateTime(1881, 1, 13, 8, 22, 33, 675, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 4548);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2814-04-23 08:22:33:0675');

        dateTime = new DateTime(1960, 6, 9, 21, 11, 13, 703, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -7715);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1899-11-12 21:11:13:0703');

        dateTime = new DateTime(1869, 7, 26, 9, 22, 36, 45, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 8893);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3154-06-29 09:22:36:0045');

        dateTime = new DateTime(4823, 11, 8, 12, 2, 42, 263, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -5269);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4875-10-11 12:02:42:0263');

        dateTime = new DateTime(3535, 11, 7, 10, 44, 35, 945, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 7368);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4647-11-08 10:44:35:0945');

        dateTime = new DateTime(1413, 1, 27, 1, 49, 42, 123, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 8462);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2676-09-26 01:49:42:0123');

        dateTime = new DateTime(2557, 7, 3, 18, 56, 56, 213, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -5308);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2673-10-05 18:56:56:0213');

        dateTime = new DateTime(2369, 1, 23, 15, 11, 38, 139, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -3812);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2611-11-20 15:11:38:0139');

        dateTime = new DateTime(1483, 4, 5, 9, 44, 55, 301, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -201);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2044-05-31 09:44:55:0301');

        dateTime = new DateTime(1498, 3, 13, 4, 2, 54, 671, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 6318);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2585-12-25 04:02:54:0671');

        dateTime = new DateTime(735, 6, 24, 6, 20, 26, 555, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -5546);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0886-10-01 06:20:26:0555');

        dateTime = new DateTime(1633, 9, 24, 22, 18, 6, 576, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 6856);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2760-12-23 22:18:06:0576');

        dateTime = new DateTime(1181, 6, 11, 8, 24, 21, 535, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 2795);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1993-10-26 08:24:21:0535');

        dateTime = new DateTime(3612, 9, 23, 4, 37, 44, 925, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -485);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4087-07-06 04:37:44:0925');

        dateTime = new DateTime(1530, 1, 27, 22, 31, 6, 213, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 5501);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2550-11-08 22:31:06:0213');

        dateTime = new DateTime(3623, 6, 26, 14, 24, 39, 467, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -4946);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3737-04-09 14:24:39:0467');

        dateTime = new DateTime(2269, 5, 12, 11, 51, 12, 42, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -9332);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2068-11-06 11:51:12:0042');

        dateTime = new DateTime(1138, 10, 14, 1, 27, 24, 27, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -3578);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1437-03-01 01:27:24:0027');

        dateTime = new DateTime(3072, 5, 1, 11, 55, 25, 378, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -9406);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2841-12-05 11:55:25:0378');

        dateTime = new DateTime(2958, 6, 21, 5, 27, 54, 40, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 1452);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3609-05-08 05:27:54:0040');

        dateTime = new DateTime(3855, 1, 15, 2, 34, 23, 796, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -7674);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3741-05-12 02:34:23:0796');

        dateTime = new DateTime(2263, 6, 19, 11, 20, 37, 729, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 1368);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2928-03-31 11:20:37:0729');

        dateTime = new DateTime(2414, 1, 16, 8, 31, 11, 592, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 6680);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3503-10-29 08:31:11:0592');

        dateTime = new DateTime(2865, 5, 27, 1, 38, 45, 34, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -6169);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2902-11-19 01:38:45:0034');

        dateTime = new DateTime(977, 10, 21, 18, 18, 45, 648, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 6616);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2105-03-07 18:18:45:0648');

        dateTime = new DateTime(3353, 6, 16, 19, 0, 22, 501, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -6613);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3340-07-02 19:00:22:0501');

        dateTime = new DateTime(1912, 4, 1, 3, 48, 13, 442, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -9940);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1673-03-19 03:48:13:0442');

        dateTime = new DateTime(3552, 5, 16, 6, 11, 4, 358, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 157);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4080-11-11 06:11:04:0358');

        dateTime = new DateTime(958, 8, 4, 19, 41, 34, 367, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -7823);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0919-02-12 19:41:34:0367');

        dateTime = new DateTime(3673, 11, 25, 6, 32, 6, 686, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 2916);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4421-11-02 06:32:06:0686');

        dateTime = new DateTime(4865, 1, 25, 12, 45, 10, 694, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -209);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5324-11-16 12:45:10:0694');

        dateTime = new DateTime(3662, 4, 18, 18, 14, 0, 641, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -2991);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3932-12-28 18:14:00:0641');

        dateTime = new DateTime(4138, 11, 25, 22, 51, 26, 75, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -542);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4593-05-28 22:51:26:0075');

        dateTime = new DateTime(1424, 1, 9, 10, 53, 34, 946, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 1170);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2097-10-14 10:53:34:0946');

        dateTime = new DateTime(4701, 5, 10, 13, 1, 35, 327, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -8586);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4488-09-28 13:01:35:0327');

        dateTime = new DateTime(954, 5, 13, 15, 2, 58, 257, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 0);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1547-07-10 15:02:58:0257');

        dateTime = new DateTime(3538, 2, 15, 21, 3, 5, 129, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -7333);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3461-06-15 21:03:05:0129');

        dateTime = new DateTime(1984, 1, 2, 6, 13, 2, 296, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -4128);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2212-09-28 06:13:02:0296');

        dateTime = new DateTime(3768, 7, 8, 18, 4, 31, 656, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -2784);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4052-10-13 18:04:31:0656');

        dateTime = new DateTime(2888, 4, 23, 12, 7, 43, 789, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -8665);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2723-04-20 12:07:43:0789');

        dateTime = new DateTime(3309, 10, 25, 22, 32, 28, 663, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -4249);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3489-04-17 22:32:28:0663');

        dateTime = new DateTime(2048, 1, 20, 14, 17, 22, 607, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 6802);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3158-08-06 14:17:22:0607');

        dateTime = new DateTime(4424, 10, 7, 17, 42, 37, 402, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 7193);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5496-02-25 17:42:37:0402');

        dateTime = new DateTime(2499, 10, 17, 4, 43, 1, 989, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 4499);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3410-09-07 04:43:01:0989');

        dateTime = new DateTime(1391, 7, 28, 1, 8, 56, 944, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 1676);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2107-03-22 01:08:56:0944');

        dateTime = new DateTime(3843, 5, 5, 1, 49, 31, 355, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 1645);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4483-06-23 01:49:31:0355');

        dateTime = new DateTime(1095, 4, 2, 21, 12, 34, 728, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -8001);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1037-04-26 21:12:34:0728');

        dateTime = new DateTime(4875, 1, 22, 14, 30, 49, 600, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -3654);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5056-01-13 14:30:49:0600');

        dateTime = new DateTime(2363, 7, 23, 22, 39, 11, 591, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -7543);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2304-11-21 22:39:11:0591');

        dateTime = new DateTime(1155, 3, 16, 3, 55, 4, 204, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 5405);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2179-05-22 03:55:04:0204');

        dateTime = new DateTime(655, 6, 17, 5, 36, 55, 31, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 9497);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2025-05-14 05:36:55:0031');

        dateTime = new DateTime(4340, 9, 1, 3, 55, 22, 884, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 2148);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5006-08-29 03:55:22:0884');

        dateTime = new DateTime(2673, 11, 11, 1, 57, 40, 972, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -7077);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2643-08-18 01:57:40:0972');

        dateTime = new DateTime(2251, 11, 11, 16, 5, 30, 709, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 9970);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3612-06-22 16:05:30:0709');

        dateTime = new DateTime(1545, 4, 7, 22, 57, 9, 741, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 434);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2155-12-01 22:57:09:0741');

        dateTime = new DateTime(4356, 9, 24, 4, 4, 0, 553, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 1127);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4939-09-11 04:04:00:0553');

        dateTime = new DateTime(3328, 3, 20, 2, 31, 23, 715, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 643);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3902-09-05 02:31:23:0715');

        dateTime = new DateTime(2943, 8, 14, 5, 22, 10, 935, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 6415);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3996-03-16 05:22:10:0935');

        dateTime = new DateTime(2178, 9, 6, 16, 13, 57, 311, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 3362);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3007-03-16 16:13:57:0311');

        dateTime = new DateTime(4197, 2, 27, 19, 36, 13, 388, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 5909);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5171-07-04 19:36:13:0388');

        dateTime = new DateTime(4039, 4, 17, 20, 50, 51, 922, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -7793);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3910-07-06 20:50:51:0922');

        dateTime = new DateTime(2074, 5, 4, 11, 12, 35, 607, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -4674);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2256-03-30 11:12:35:0607');

        dateTime = new DateTime(3912, 4, 22, 3, 10, 14, 153, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -7805);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3786-05-02 03:10:14:0153');

        dateTime = new DateTime(1530, 4, 6, 4, 32, 36, 156, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 4145);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2441-05-26 04:32:36:0156');

        dateTime = new DateTime(3468, 1, 12, 2, 41, 36, 595, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 6073);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4477-05-08 02:41:36:0595');

        dateTime = new DateTime(2550, 8, 7, 2, 55, 35, 90, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, 8833);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3810-05-22 02:55:35:0090');

        dateTime = new DateTime(1252, 8, 28, 9, 42, 22, 52, hijriCalendar);
        dateTime = calendar.addMonths(dateTime, -9107);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1100-08-12 09:42:22:0052');

    });

    it('should add days correctly', () => {
        let calendar = new HijriCalendar();
        let hijriCalendar = new HijriCalendar();

        let dateTime = new DateTime(1970, 1, 24, 13, 50, 28, 151, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -968);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2530-04-29 13:50:28:0151');

        dateTime = new DateTime(4073, 5, 26, 11, 48, 43, 454, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -6427);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4556-02-01 11:48:43:0454');

        dateTime = new DateTime(1443, 10, 18, 21, 24, 49, 860, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 5401);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2037-03-02 21:24:49:0860');

        dateTime = new DateTime(4830, 7, 2, 9, 5, 52, 772, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -7717);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5287-02-09 09:05:52:0772');

        dateTime = new DateTime(4691, 1, 12, 5, 22, 16, 73, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6477);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5190-08-27 05:22:16:0073');

        dateTime = new DateTime(4474, 9, 23, 18, 56, 10, 485, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6051);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4979-08-16 18:56:10:0485');

        dateTime = new DateTime(1466, 7, 10, 4, 37, 50, 958, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -7152);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2024-11-05 04:37:50:0958');

        dateTime = new DateTime(3290, 1, 22, 13, 37, 0, 442, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 3779);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3824-01-05 13:37:00:0442');

        dateTime = new DateTime(4224, 10, 14, 20, 45, 32, 169, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -9742);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4693-11-19 20:45:32:0169');

        dateTime = new DateTime(4219, 4, 15, 20, 41, 33, 48, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -4775);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4702-02-26 20:41:33:0048');

        dateTime = new DateTime(1173, 10, 16, 12, 48, 2, 804, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -7419);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1740-02-07 12:48:02:0804');

        dateTime = new DateTime(3155, 10, 27, 4, 33, 17, 307, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -9923);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3656-04-03 04:33:17:0307');

        dateTime = new DateTime(2866, 11, 24, 17, 15, 49, 489, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 2161);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3409-01-07 17:15:49:0489');

        dateTime = new DateTime(3173, 4, 11, 14, 41, 24, 514, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6278);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3717-07-20 14:41:24:0514');

        dateTime = new DateTime(1900, 4, 27, 7, 35, 26, 250, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -4172);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2453-11-20 07:35:26:0250');

        dateTime = new DateTime(1286, 2, 1, 2, 29, 35, 890, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 7091);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1888-10-10 02:29:35:0890');

        dateTime = new DateTime(1381, 1, 8, 8, 15, 23, 978, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -8316);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1938-09-14 08:15:23:0978');

        dateTime = new DateTime(1643, 7, 18, 4, 8, 48, 518, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -3167);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2207-07-06 04:08:48:0518');

        dateTime = new DateTime(2218, 8, 4, 5, 8, 39, 997, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -206);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2773-07-16 05:08:39:0997');

        dateTime = new DateTime(4619, 3, 2, 8, 22, 21, 220, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -4893);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5089-10-19 08:22:21:0220');

        dateTime = new DateTime(4932, 5, 15, 10, 4, 49, 42, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -9034);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5382-05-04 10:04:49:0042');

        dateTime = new DateTime(1691, 10, 6, 19, 41, 3, 524, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -8400);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2239-12-19 19:41:03:0524');

        dateTime = new DateTime(1619, 1, 10, 7, 45, 37, 723, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 1284);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2195-11-26 07:45:37:0723');

        dateTime = new DateTime(3968, 4, 23, 8, 57, 33, 423, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 7098);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4491-02-26 08:57:33:0423');

        dateTime = new DateTime(2772, 7, 9, 5, 4, 38, 535, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 7911);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3333-03-13 05:04:38:0535');

        dateTime = new DateTime(2447, 4, 3, 20, 47, 28, 415, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 3420);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3005-04-28 20:47:28:0415');

        dateTime = new DateTime(896, 9, 23, 6, 41, 56, 266, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -5611);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1476-03-27 06:41:56:0266');

        dateTime = new DateTime(961, 2, 24, 18, 43, 28, 59, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -3044);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1545-10-08 18:43:28:0059');

        dateTime = new DateTime(1645, 1, 10, 10, 49, 57, 601, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -1990);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2212-03-02 10:49:57:0601');

        dateTime = new DateTime(3054, 5, 25, 22, 11, 33, 837, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -6065);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3568-06-01 22:11:33:0837');

        dateTime = new DateTime(3398, 3, 28, 19, 52, 55, 103, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -6403);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3901-02-05 19:52:55:0103');

        dateTime = new DateTime(1065, 8, 9, 10, 42, 8, 879, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -1805);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1650-07-04 10:42:08:0879');

        dateTime = new DateTime(2913, 1, 12, 9, 11, 10, 521, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 3944);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3458-08-30 09:11:10:0521');

        dateTime = new DateTime(2823, 2, 25, 8, 13, 55, 24, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6103);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3377-05-15 08:13:55:0024');

        dateTime = new DateTime(2264, 5, 4, 7, 48, 10, 680, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 2253);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2824-08-28 07:48:10:0680');

        dateTime = new DateTime(1285, 8, 12, 2, 38, 23, 619, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6889);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1887-10-08 02:38:23:0619');

        dateTime = new DateTime(3393, 8, 14, 5, 52, 40, 791, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6050);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3930-09-16 05:52:40:0791');

        dateTime = new DateTime(4980, 5, 26, 17, 22, 9, 777, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 8510);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5476-12-22 17:22:09:0777');

        dateTime = new DateTime(895, 3, 27, 20, 5, 51, 88, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 4923);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1503-08-21 20:05:51:0088');

        dateTime = new DateTime(4801, 7, 3, 20, 31, 0, 497, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -3060);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5271-09-22 20:31:00:0497');

        dateTime = new DateTime(4809, 9, 13, 5, 42, 23, 716, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -1669);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5283-06-26 05:42:23:0716');

        dateTime = new DateTime(989, 6, 10, 11, 38, 48, 213, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -9338);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1555-12-27 11:38:48:0213');

        dateTime = new DateTime(912, 1, 20, 8, 49, 15, 725, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -810);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1504-04-02 08:49:15:0725');

        dateTime = new DateTime(2461, 3, 18, 10, 19, 26, 308, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6259);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3026-08-21 10:19:26:0308');

        dateTime = new DateTime(2331, 3, 24, 17, 49, 20, 100, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 2444);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2890-01-28 17:49:20:0100');

        dateTime = new DateTime(1081, 3, 16, 17, 50, 54, 541, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 7835);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1692-01-14 17:50:54:0541');

        dateTime = new DateTime(3233, 5, 13, 21, 26, 4, 990, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6143);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3775-06-24 21:26:04:0990');

        dateTime = new DateTime(3678, 5, 13, 22, 5, 9, 304, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -5787);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4174-07-25 22:05:09:0304');

        dateTime = new DateTime(2146, 2, 6, 14, 10, 33, 558, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 7898);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2725-05-23 14:10:33:0558');

        dateTime = new DateTime(2172, 2, 1, 21, 42, 58, 133, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -6512);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2711-02-25 21:42:58:0133');

        dateTime = new DateTime(1998, 2, 20, 10, 30, 27, 660, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -9591);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2533-12-14 10:30:27:0660');

        dateTime = new DateTime(4763, 10, 25, 4, 10, 35, 186, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6954);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5262-07-30 04:10:35:0186');

        dateTime = new DateTime(941, 9, 22, 4, 14, 54, 350, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -172);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1534-10-15 04:14:54:0350');

        dateTime = new DateTime(2310, 11, 21, 7, 33, 36, 766, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -8906);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2839-04-08 07:33:36:0766');

        dateTime = new DateTime(2998, 10, 17, 5, 27, 58, 36, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 1292);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3534-08-12 05:27:58:0036');

        dateTime = new DateTime(3148, 8, 10, 17, 17, 6, 866, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -1958);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3671-01-24 17:17:06:0866');

        dateTime = new DateTime(2402, 6, 21, 12, 22, 15, 58, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -1650);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2947-12-28 12:22:15:0058');

        dateTime = new DateTime(1792, 11, 23, 7, 53, 51, 679, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -5582);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2345-10-19 07:53:51:0679');

        dateTime = new DateTime(1148, 5, 21, 9, 17, 27, 80, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -3263);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1726-11-01 09:17:27:0080');

        dateTime = new DateTime(4407, 11, 5, 5, 48, 33, 309, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 3111);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4906-09-07 05:48:33:0309');

        dateTime = new DateTime(873, 9, 16, 21, 17, 22, 340, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 4012);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1480-04-01 21:17:22:0340');

        dateTime = new DateTime(1994, 10, 20, 14, 7, 7, 971, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 3469);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2566-06-23 14:07:07:0971');

        dateTime = new DateTime(3817, 8, 6, 4, 13, 31, 721, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -7212);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4305-10-01 04:13:31:0721');

        dateTime = new DateTime(2353, 9, 4, 16, 3, 34, 816, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -5854);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2889-02-17 16:03:34:0816');

        dateTime = new DateTime(2934, 9, 23, 1, 38, 22, 538, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -2415);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3462-04-20 01:38:22:0538');

        dateTime = new DateTime(2526, 1, 19, 19, 56, 19, 156, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 9933);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3099-08-08 19:56:19:0156');

        dateTime = new DateTime(2782, 3, 6, 3, 3, 32, 578, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 7320);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3340-12-13 03:03:32:0578');

        dateTime = new DateTime(838, 10, 18, 2, 42, 11, 989, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -1033);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1432-07-26 02:42:11:0989');

        dateTime = new DateTime(2324, 2, 10, 12, 9, 9, 236, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -9472);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2850-07-18 12:09:09:0236');

        dateTime = new DateTime(3676, 10, 13, 15, 26, 20, 906, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 2135);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4194-09-19 15:26:20:0906');

        dateTime = new DateTime(3765, 10, 2, 14, 13, 20, 476, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -1736);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4270-06-10 14:13:20:0476');

        dateTime = new DateTime(1139, 3, 5, 12, 20, 22, 616, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 5367);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1741-07-10 12:20:22:0616');

        dateTime = new DateTime(4615, 5, 22, 2, 24, 46, 765, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6380);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5117-01-01 02:24:46:0765');

        dateTime = new DateTime(3728, 6, 22, 11, 9, 17, 837, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -5571);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4223-10-11 11:09:17:0837');

        dateTime = new DateTime(903, 6, 27, 21, 45, 55, 264, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 875);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1500-07-23 21:45:55:0264');

        dateTime = new DateTime(714, 11, 14, 2, 0, 40, 475, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 6793);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1333-10-02 02:00:40:0475');

        dateTime = new DateTime(2197, 8, 24, 19, 1, 51, 676, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -2587);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2746-09-13 19:01:51:0676');

        dateTime = new DateTime(3514, 1, 6, 16, 4, 32, 809, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 1923);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4036-03-19 16:04:32:0809');

        dateTime = new DateTime(3209, 11, 25, 19, 11, 12, 609, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -7814);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3714-07-01 19:11:12:0609');

        dateTime = new DateTime(2098, 1, 15, 15, 46, 41, 768, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 9863);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2684-02-22 15:46:41:0768');

        dateTime = new DateTime(1782, 1, 26, 18, 13, 44, 979, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -2901);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2342-08-21 18:13:44:0979');

        dateTime = new DateTime(643, 4, 26, 6, 32, 49, 339, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -9620);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1219-05-26 06:32:49:0339');

        dateTime = new DateTime(1128, 11, 20, 15, 3, 35, 284, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 1671);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1721-06-02 15:03:35:0284');

        dateTime = new DateTime(2453, 7, 28, 15, 56, 14, 968, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -4859);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2988-10-13 15:56:14:0968');

        dateTime = new DateTime(1027, 7, 20, 18, 48, 12, 723, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 324);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1619-06-01 18:48:12:0723');

        dateTime = new DateTime(4014, 10, 15, 10, 31, 6, 440, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -6968);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4497-09-25 10:31:06:0440');

        dateTime = new DateTime(1732, 8, 8, 12, 44, 31, 586, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 2761);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2310-02-23 12:44:31:0586');

        dateTime = new DateTime(2345, 6, 8, 14, 12, 8, 77, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 3458);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2906-08-21 14:12:08:0077');

        dateTime = new DateTime(4007, 11, 11, 12, 31, 26, 659, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -9395);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4484-05-14 12:31:26:0659');

        dateTime = new DateTime(1340, 11, 26, 2, 10, 21, 639, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -1067);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1919-08-18 02:10:21:0639');

        dateTime = new DateTime(3908, 3, 8, 13, 1, 14, 340, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 3546);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4423-02-04 13:01:14:0340');

        dateTime = new DateTime(3741, 4, 10, 8, 50, 43, 428, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -2696);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4244-01-24 08:50:43:0428');

        dateTime = new DateTime(2598, 9, 3, 14, 19, 36, 231, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -932);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3140-04-24 14:19:36:0231');

        dateTime = new DateTime(1695, 2, 12, 8, 26, 26, 637, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 2017);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2271-09-26 08:26:26:0637');

        dateTime = new DateTime(3219, 11, 17, 9, 34, 25, 918, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 1144);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3748-09-14 09:34:25:0918');

        dateTime = new DateTime(2142, 6, 27, 13, 47, 25, 795, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 8037);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2722-04-10 13:47:25:0795');

        dateTime = new DateTime(3937, 8, 12, 10, 0, 10, 945, hijriCalendar);
        dateTime = calendar.addDays(dateTime, -3514);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4432-04-25 10:00:10:0945');

        dateTime = new DateTime(2402, 11, 19, 8, 41, 36, 332, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 8950);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2977-05-29 08:41:36:0332');

        dateTime = new DateTime(3503, 11, 16, 5, 57, 28, 512, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 7169);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4040-09-27 05:57:28:0512');

        dateTime = new DateTime(1591, 8, 16, 7, 51, 52, 872, hijriCalendar);
        dateTime = calendar.addDays(dateTime, 792);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2167-12-22 07:51:52:0872');

    });

    it('should add seconds correctly', () => {
        let calendar = new HijriCalendar();
        let hijriCalendar = new HijriCalendar();

        let dateTime = new DateTime(2107, 1, 11, 6, 53, 47, 991, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -7804);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2665-11-10 04:43:43:0991');

        dateTime = new DateTime(961, 4, 20, 7, 14, 11, 915, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5588);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1554-04-03 05:41:03:0915');

        dateTime = new DateTime(643, 7, 5, 18, 20, 17, 198, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 5262);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1245-12-02 19:47:59:0198');

        dateTime = new DateTime(2205, 5, 3, 9, 42, 24, 685, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 586);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2761-03-30 09:52:10:0685');

        dateTime = new DateTime(4596, 5, 25, 9, 47, 36, 849, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -4303);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5081-02-08 08:35:53:0849');

        dateTime = new DateTime(3451, 11, 10, 9, 39, 9, 131, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5051);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3970-08-24 08:14:58:0131');

        dateTime = new DateTime(2418, 10, 14, 16, 37, 50, 188, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -8109);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2968-05-02 14:22:41:0188');

        dateTime = new DateTime(4905, 5, 15, 1, 24, 26, 622, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 6768);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5380-11-16 03:17:14:0622');

        dateTime = new DateTime(2293, 9, 20, 19, 44, 53, 134, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -3470);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2846-12-28 18:47:03:0134');

        dateTime = new DateTime(4783, 5, 24, 10, 9, 58, 42, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 3534);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5262-07-14 11:08:52:0042');

        dateTime = new DateTime(3744, 4, 21, 8, 41, 3, 308, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5452);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4254-05-21 07:10:11:0308');

        dateTime = new DateTime(1927, 8, 19, 2, 54, 45, 583, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 8272);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2491-10-22 05:12:37:0583');

        dateTime = new DateTime(4871, 6, 16, 13, 48, 54, 771, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -624);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5347-12-23 13:38:30:0771');

        dateTime = new DateTime(969, 2, 16, 4, 31, 15, 13, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 9720);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1561-11-04 07:13:15:0013');

        dateTime = new DateTime(2872, 3, 21, 4, 14, 44, 870, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 7680);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3408-04-09 06:22:44:0870');

        dateTime = new DateTime(4768, 1, 12, 3, 36, 19, 60, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 4804);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5247-08-17 04:56:23:0060');

        dateTime = new DateTime(3064, 8, 28, 3, 10, 9, 90, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -1648);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3594-12-23 02:42:41:0090');

        dateTime = new DateTime(3134, 10, 18, 15, 32, 24, 515, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -9478);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3663-01-10 12:54:26:0515');

        dateTime = new DateTime(1480, 1, 27, 2, 51, 47, 538, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 9705);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2057-07-28 05:33:32:0538');

        dateTime = new DateTime(4703, 11, 6, 11, 18, 53, 936, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -1284);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5185-05-09 10:57:29:0936');

        dateTime = new DateTime(1947, 10, 11, 21, 51, 23, 348, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 5822);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2511-05-10 23:28:25:0348');

        dateTime = new DateTime(3915, 4, 28, 2, 22, 6, 148, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5383);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4420-04-24 00:52:23:0148');

        dateTime = new DateTime(1442, 10, 25, 18, 9, 17, 846, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 1063);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2021-06-05 18:27:00:0846');

        dateTime = new DateTime(4141, 11, 28, 7, 2, 24, 724, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -4313);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4640-02-24 05:50:31:0724');

        dateTime = new DateTime(1715, 10, 2, 18, 37, 0, 784, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -4976);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2286-03-27 17:14:04:0784');

        dateTime = new DateTime(3105, 5, 19, 20, 49, 33, 635, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -8912);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3634-06-27 18:21:01:0635');

        dateTime = new DateTime(2038, 3, 19, 3, 1, 52, 53, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -772);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2599-02-05 02:49:00:0053');

        dateTime = new DateTime(3594, 1, 16, 4, 20, 30, 244, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 5875);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4108-08-05 05:58:25:0244');

        dateTime = new DateTime(1989, 8, 12, 20, 16, 52, 620, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5888);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2551-12-11 18:38:44:0620');

        dateTime = new DateTime(817, 10, 8, 11, 42, 21, 246, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 558);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1414-12-29 11:51:39:0246');

        dateTime = new DateTime(3649, 2, 1, 8, 34, 30, 824, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -2860);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4161-12-31 07:46:50:0824');

        dateTime = new DateTime(2870, 11, 26, 17, 33, 1, 258, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 8225);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3406-12-28 19:50:06:0258');

        dateTime = new DateTime(4579, 4, 14, 3, 39, 58, 882, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 9435);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5064-07-03 06:17:13:0882');

        dateTime = new DateTime(3194, 9, 8, 14, 50, 6, 176, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -716);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3721-02-17 14:38:10:0176');

        dateTime = new DateTime(1667, 1, 28, 11, 38, 15, 343, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5674);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2239-01-04 10:03:41:0343');

        dateTime = new DateTime(3250, 4, 19, 10, 41, 55, 523, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -1445);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3775-02-02 10:17:50:0523');

        dateTime = new DateTime(4689, 6, 7, 12, 6, 54, 906, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -6318);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5171-05-16 10:21:36:0906');

        dateTime = new DateTime(4443, 3, 7, 15, 5, 58, 592, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -8105);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4932-06-14 12:50:53:0592');

        dateTime = new DateTime(1921, 9, 14, 22, 6, 56, 462, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 9246);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2486-01-20 00:41:02:0462');

        dateTime = new DateTime(4626, 11, 13, 20, 20, 9, 351, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 8099);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5110-09-01 22:35:08:0351');

        dateTime = new DateTime(4807, 8, 7, 22, 50, 3, 901, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5927);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5286-01-06 21:11:16:0901');

        dateTime = new DateTime(2926, 8, 9, 1, 40, 21, 90, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 5523);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3461-01-12 03:12:24:0090');

        dateTime = new DateTime(2162, 7, 24, 20, 29, 13, 643, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -1305);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2719-09-29 20:07:28:0643');

        dateTime = new DateTime(4182, 6, 7, 10, 56, 28, 160, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5016);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4679-06-20 09:32:52:0160');

        dateTime = new DateTime(4831, 5, 28, 14, 37, 48, 845, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 2574);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5309-02-12 15:20:42:0845');

        dateTime = new DateTime(2388, 9, 3, 11, 9, 52, 355, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5555);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2939-02-12 09:37:17:0355');

        dateTime = new DateTime(2647, 5, 15, 7, 0, 50, 185, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 2116);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3190-02-11 07:36:06:0185');

        dateTime = new DateTime(1332, 5, 22, 5, 41, 58, 860, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -3667);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1914-04-17 04:40:51:0860');

        dateTime = new DateTime(2338, 7, 19, 2, 46, 3, 7, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 7869);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2890-06-27 04:57:12:0007');

        dateTime = new DateTime(3296, 5, 4, 1, 26, 27, 843, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -3954);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3819-10-05 00:20:33:0843');

        dateTime = new DateTime(1202, 2, 25, 12, 16, 25, 513, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -242);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1787-12-05 12:12:23:0513');

        dateTime = new DateTime(3819, 9, 25, 12, 32, 52, 143, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5779);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4327-07-27 10:56:33:0143');

        dateTime = new DateTime(4683, 3, 23, 10, 14, 55, 545, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -89);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5165-05-08 10:13:26:0545');

        dateTime = new DateTime(2632, 4, 2, 15, 16, 16, 621, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 8855);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3175-06-13 17:43:51:0621');

        dateTime = new DateTime(3758, 5, 23, 2, 9, 57, 881, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 3337);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4268-01-21 03:05:34:0881');

        dateTime = new DateTime(3087, 1, 23, 13, 18, 46, 202, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 3386);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3616-09-17 14:15:12:0202');

        dateTime = new DateTime(3787, 1, 20, 10, 21, 12, 335, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -1155);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4295-11-10 10:01:57:0335');

        dateTime = new DateTime(2001, 6, 12, 17, 51, 19, 859, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 2325);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2563-06-04 18:30:04:0859');

        dateTime = new DateTime(3613, 2, 8, 7, 18, 54, 990, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 1529);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4127-02-02 07:44:23:0990');

        dateTime = new DateTime(3673, 1, 1, 16, 0, 9, 995, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 788);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4185-03-14 16:13:17:0995');

        dateTime = new DateTime(920, 5, 12, 9, 42, 45, 875, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -3091);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1514-07-14 08:51:14:0875');

        dateTime = new DateTime(1954, 9, 15, 5, 33, 42, 971, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 8922);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2518-01-27 08:02:24:0971');

        dateTime = new DateTime(3270, 8, 4, 7, 2, 46, 692, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -3195);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3794-10-11 06:09:31:0692');

        dateTime = new DateTime(3426, 7, 9, 1, 55, 16, 104, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 4345);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3946-01-24 03:07:41:0104');

        dateTime = new DateTime(3448, 10, 16, 2, 38, 26, 832, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 2574);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3967-09-03 03:21:20:0832');

        dateTime = new DateTime(3836, 8, 27, 17, 5, 23, 158, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -7254);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4343-12-27 15:04:29:0158');

        dateTime = new DateTime(2476, 10, 21, 6, 48, 7, 389, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 2947);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3024-08-17 07:37:14:0389');

        dateTime = new DateTime(4683, 8, 2, 16, 22, 46, 826, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 6179);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5165-09-12 18:05:45:0826');

        dateTime = new DateTime(4758, 9, 2, 14, 20, 20, 911, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -7354);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5238-07-17 12:17:46:0911');

        dateTime = new DateTime(2845, 4, 1, 12, 48, 34, 480, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -6576);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3382-02-06 10:58:58:0480');

        dateTime = new DateTime(1486, 5, 2, 9, 48, 13, 960, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 8782);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2063-08-25 12:14:35:0960');

        dateTime = new DateTime(626, 1, 23, 4, 58, 37, 721, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 3570);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1228-12-28 05:58:07:0721');

        dateTime = new DateTime(4631, 3, 10, 19, 12, 52, 934, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -6770);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5114-11-12 17:20:02:0934');

        dateTime = new DateTime(762, 10, 23, 21, 26, 23, 929, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -8808);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1361-09-02 18:59:35:0929');

        dateTime = new DateTime(4613, 7, 23, 4, 13, 42, 552, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -1527);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5097-10-03 03:48:15:0552');

        dateTime = new DateTime(3921, 3, 10, 18, 27, 54, 287, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 2441);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4426-01-01 19:08:35:0287');

        dateTime = new DateTime(3959, 10, 16, 10, 27, 38, 562, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 7060);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4463-06-15 12:25:18:0562');

        dateTime = new DateTime(1057, 3, 26, 20, 54, 38, 338, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 2237);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1647-04-30 21:31:55:0338');

        dateTime = new DateTime(4498, 2, 14, 22, 44, 40, 89, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -4784);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4985-10-02 21:24:56:0089');

        dateTime = new DateTime(4523, 3, 23, 12, 47, 26, 88, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -1850);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5010-02-11 12:16:36:0088');

        dateTime = new DateTime(2911, 11, 25, 16, 52, 33, 716, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -6356);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3446-10-07 15:06:37:0716');

        dateTime = new DateTime(2413, 2, 1, 14, 18, 8, 326, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -2967);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2962-10-20 13:28:41:0326');

        dateTime = new DateTime(2962, 7, 16, 18, 35, 43, 889, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 218);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3495-11-25 18:39:21:0889');

        dateTime = new DateTime(791, 1, 2, 22, 26, 15, 203, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 1259);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1389-01-08 22:47:14:0203');

        dateTime = new DateTime(2376, 5, 10, 12, 38, 3, 855, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 8027);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2927-03-04 14:51:50:0855');

        dateTime = new DateTime(4842, 5, 4, 7, 1, 14, 596, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -7348);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5319-09-22 04:58:46:0596');

        dateTime = new DateTime(3544, 6, 16, 5, 33, 27, 407, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -5317);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4060-06-27 04:04:50:0407');

        dateTime = new DateTime(3603, 5, 21, 2, 33, 17, 163, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 9729);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4117-08-31 05:15:26:0163');

        dateTime = new DateTime(3558, 6, 12, 9, 21, 1, 184, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 7896);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4074-01-22 11:32:37:0184');

        dateTime = new DateTime(4160, 5, 11, 3, 5, 6, 503, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -8419);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4658-01-19 00:44:47:0503');

        dateTime = new DateTime(2105, 1, 26, 16, 9, 16, 866, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -1406);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2663-12-17 15:45:50:0866');

        dateTime = new DateTime(2180, 11, 6, 16, 37, 17, 826, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -4238);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2737-06-25 15:26:39:0826');

        dateTime = new DateTime(2517, 5, 20, 3, 6, 44, 804, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -1365);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3064-01-01 02:43:59:0804');

        dateTime = new DateTime(3712, 9, 15, 18, 13, 7, 702, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -1251);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4223-09-23 17:52:16:0702');

        dateTime = new DateTime(3050, 7, 7, 10, 8, 5, 814, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 3853);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3581-04-03 11:12:18:0814');

        dateTime = new DateTime(3908, 2, 25, 10, 11, 40, 340, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 6134);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4413-05-09 11:53:54:0340');

        dateTime = new DateTime(4639, 10, 24, 11, 51, 38, 473, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 191);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5123-03-26 11:54:49:0473');

        dateTime = new DateTime(1323, 8, 21, 4, 1, 15, 243, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -8637);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1905-10-20 01:37:18:0243');

        dateTime = new DateTime(3139, 4, 16, 17, 6, 29, 165, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, 9811);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3667-05-22 19:50:00:0165');

        dateTime = new DateTime(2476, 11, 25, 17, 20, 13, 54, hijriCalendar);
        dateTime = calendar.addSeconds(dateTime, -575);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3024-09-19 17:10:38:0054');

    });

    it('should add miliseconds correctly', () => {
        let calendar = new HijriCalendar();
        let hijriCalendar = new HijriCalendar();

        let dateTime = new DateTime(2079, 4, 10, 1, 1, 7, 390, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -1395);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2638-12-08 01:01:05:0995');

        dateTime = new DateTime(3199, 2, 18, 4, 40, 29, 640, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 5130);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3725-06-12 04:40:34:0770');

        dateTime = new DateTime(3412, 3, 4, 18, 14, 27, 373, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -6194);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3932-02-23 18:14:21:0179');

        dateTime = new DateTime(924, 11, 5, 12, 33, 6, 85, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 3850);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1518-11-17 12:33:09:0935');

        dateTime = new DateTime(1246, 4, 13, 5, 57, 30, 323, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 9089);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1830-09-30 05:57:39:0412');

        dateTime = new DateTime(2609, 2, 4, 18, 3, 12, 59, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -2608);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3152-12-22 18:03:09:0451');

        dateTime = new DateTime(3739, 2, 14, 3, 58, 50, 765, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 1511);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4249-05-10 03:58:52:0276');

        dateTime = new DateTime(4263, 11, 12, 18, 49, 21, 300, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 6096);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4758-06-22 18:49:27:0396');

        dateTime = new DateTime(4380, 1, 21, 10, 40, 33, 389, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -959);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4871-03-16 10:40:32:0430');

        dateTime = new DateTime(4096, 5, 28, 17, 5, 4, 206, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 4333);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4596-01-01 17:05:08:0539');

        dateTime = new DateTime(1147, 7, 20, 16, 57, 57, 911, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -9197);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1734-12-15 16:57:48:0714');

        dateTime = new DateTime(2989, 2, 5, 12, 52, 24, 677, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 371);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3521-08-31 12:52:25:0048');

        dateTime = new DateTime(3426, 11, 24, 6, 4, 7, 745, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -6468);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3946-06-06 06:04:01:0277');

        dateTime = new DateTime(1396, 7, 28, 1, 2, 0, 910, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -1147);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1976-07-24 01:01:59:0763');

        dateTime = new DateTime(3255, 8, 11, 18, 11, 9, 342, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 4612);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3780-03-29 18:11:13:0954');

        dateTime = new DateTime(3338, 9, 13, 10, 54, 24, 420, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -6618);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3860-11-09 10:54:17:0802');

        dateTime = new DateTime(1139, 5, 14, 22, 35, 36, 212, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 1788);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1727-01-06 22:35:38:0000');

        dateTime = new DateTime(4830, 8, 26, 21, 2, 38, 676, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -3839);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5308-05-21 21:02:34:0837');

        dateTime = new DateTime(4317, 5, 19, 6, 46, 33, 304, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 6781);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4810-05-26 06:46:40:0085');

        dateTime = new DateTime(1647, 9, 28, 15, 29, 9, 783, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 9372);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2220-04-02 15:29:19:0155');

        dateTime = new DateTime(3155, 1, 4, 15, 7, 11, 292, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -9314);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3682-08-19 15:07:01:0978');

        dateTime = new DateTime(3717, 2, 4, 18, 28, 30, 240, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 805);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4227-12-26 18:28:31:0045');

        dateTime = new DateTime(3125, 7, 6, 21, 48, 38, 506, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -8864);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3654-01-06 21:48:29:0642');

        dateTime = new DateTime(938, 5, 13, 3, 35, 0, 878, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 2900);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1532-01-01 03:35:03:0778');

        dateTime = new DateTime(2715, 6, 21, 10, 23, 27, 823, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -4176);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3256-03-09 10:23:23:0647');

        dateTime = new DateTime(3692, 7, 1, 16, 4, 40, 256, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -7994);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4204-02-14 16:04:32:0262');

        dateTime = new DateTime(4477, 9, 21, 16, 43, 7, 964, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 1824);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4965-12-17 16:43:09:0788');

        dateTime = new DateTime(4623, 2, 17, 19, 41, 3, 764, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 113);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5107-01-16 19:41:03:0877');

        dateTime = new DateTime(1150, 1, 28, 13, 13, 40, 385, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -1379);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1737-05-27 13:13:39:0006');

        dateTime = new DateTime(2489, 1, 3, 5, 34, 52, 402, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -4360);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3036-06-18 05:34:48:0042');

        dateTime = new DateTime(1895, 3, 9, 2, 27, 9, 962, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -7667);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2460-04-29 02:27:02:0295');

        dateTime = new DateTime(2330, 4, 25, 11, 5, 47, 495, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 977);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2882-07-02 11:05:48:0472');

        dateTime = new DateTime(2028, 8, 5, 13, 22, 30, 298, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -3512);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2589-10-05 13:22:26:0786');

        dateTime = new DateTime(3817, 6, 27, 1, 37, 10, 222, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 2910);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4325-05-23 01:37:13:0132');

        dateTime = new DateTime(1976, 5, 25, 21, 55, 25, 948, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -336);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2539-02-14 21:55:25:0612');

        dateTime = new DateTime(1593, 2, 22, 13, 58, 47, 284, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 8967);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2167-04-12 13:58:56:0251');

        dateTime = new DateTime(4147, 10, 3, 18, 0, 21, 890, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 7679);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4645-10-27 18:00:29:0569');

        dateTime = new DateTime(4294, 4, 22, 5, 31, 10, 366, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 9073);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4788-01-05 05:31:19:0439');

        dateTime = new DateTime(1187, 11, 5, 9, 16, 32, 505, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 4803);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1774-01-17 09:16:37:0308');

        dateTime = new DateTime(1487, 5, 3, 21, 32, 34, 737, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -2499);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2064-08-15 21:32:32:0238');

        dateTime = new DateTime(816, 7, 9, 14, 19, 17, 823, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -2910);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1413-10-13 14:19:14:0913');

        dateTime = new DateTime(4741, 6, 28, 2, 18, 14, 535, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 2999);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5221-11-17 02:18:17:0534');

        dateTime = new DateTime(867, 2, 4, 4, 1, 3, 385, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -4252);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1462-11-06 04:00:59:0133');

        dateTime = new DateTime(1395, 5, 24, 9, 5, 0, 328, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -859);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1975-06-03 09:04:59:0469');

        dateTime = new DateTime(1655, 7, 2, 17, 31, 46, 963, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 6007);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2227-10-12 17:31:52:0970');

        dateTime = new DateTime(4420, 6, 17, 16, 4, 21, 584, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 4457);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4910-05-29 16:04:26:0041');

        dateTime = new DateTime(1070, 11, 17, 14, 58, 21, 629, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -1332);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1660-07-24 14:58:20:0297');

        dateTime = new DateTime(3513, 10, 28, 11, 53, 51, 996, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -7688);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4030-10-08 11:53:44:0308');

        dateTime = new DateTime(4272, 2, 3, 19, 41, 45, 378, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 4101);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4766-06-15 19:41:49:0479');

        dateTime = new DateTime(3212, 9, 28, 5, 37, 33, 669, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 9694);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3738-08-25 05:37:43:0363');

        dateTime = new DateTime(3110, 7, 22, 10, 16, 16, 168, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 4777);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3639-07-05 10:16:20:0945');

        dateTime = new DateTime(989, 6, 19, 10, 13, 47, 277, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -8244);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1581-07-30 10:13:39:0033');

        dateTime = new DateTime(3226, 11, 3, 12, 40, 42, 882, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -4051);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3752-04-28 12:40:38:0831');

        dateTime = new DateTime(2286, 10, 23, 8, 55, 52, 118, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 9721);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2840-04-16 08:56:01:0839');

        dateTime = new DateTime(864, 7, 19, 18, 1, 4, 254, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -3832);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1460-05-18 18:01:00:0422');

        dateTime = new DateTime(2625, 2, 17, 13, 11, 15, 663, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 621);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3168-07-14 13:11:16:0284');

        dateTime = new DateTime(1041, 9, 14, 6, 42, 15, 744, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -3358);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1632-04-03 06:42:12:0386');

        dateTime = new DateTime(1690, 7, 14, 10, 26, 26, 151, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -1238);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2261-10-08 10:26:24:0913');

        dateTime = new DateTime(4072, 3, 6, 13, 44, 32, 306, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -2078);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4572-06-30 13:44:30:0228');

        dateTime = new DateTime(1257, 7, 14, 15, 31, 7, 360, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 1157);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1841-08-31 15:31:08:0517');

        dateTime = new DateTime(3223, 7, 21, 3, 16, 45, 977, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -8331);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3749-02-20 03:16:37:0646');

        dateTime = new DateTime(1169, 11, 2, 19, 8, 41, 835, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -293);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1756-07-28 19:08:41:0542');

        dateTime = new DateTime(1534, 8, 7, 13, 57, 55, 641, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 9106);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2110-06-24 13:58:04:0747');

        dateTime = new DateTime(645, 8, 10, 14, 29, 1, 655, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 8380);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1247-12-16 14:29:10:0035');

        dateTime = new DateTime(4196, 6, 8, 3, 4, 10, 438, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -9546);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4693-01-19 03:04:00:0892');

        dateTime = new DateTime(3437, 1, 9, 11, 53, 54, 340, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 8517);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3956-04-02 11:54:02:0857');

        dateTime = new DateTime(1666, 9, 22, 11, 27, 14, 13, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -5269);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2238-09-01 11:27:08:0744');

        dateTime = new DateTime(2798, 6, 25, 5, 46, 57, 199, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 3202);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3336-09-23 05:47:00:0401');

        dateTime = new DateTime(3742, 10, 3, 1, 20, 15, 406, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 8895);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4252-11-18 01:20:24:0301');

        dateTime = new DateTime(4950, 3, 20, 18, 2, 2, 174, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 5148);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5424-05-23 18:02:07:0322');

        dateTime = new DateTime(3814, 9, 22, 6, 36, 37, 858, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -4850);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4322-09-16 06:36:33:0008');

        dateTime = new DateTime(907, 10, 14, 7, 51, 39, 311, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -5759);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1502-05-01 07:51:33:0552');

        dateTime = new DateTime(2608, 3, 2, 1, 7, 15, 783, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -547);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3152-01-30 01:07:15:0236');

        dateTime = new DateTime(1232, 6, 20, 15, 35, 29, 844, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -2787);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1817-05-06 15:35:27:0057');

        dateTime = new DateTime(1504, 2, 19, 11, 35, 15, 291, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 2673);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2080-12-01 11:35:17:0964');

        dateTime = new DateTime(3084, 10, 5, 6, 14, 31, 435, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -4406);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3614-06-24 06:14:27:0029');

        dateTime = new DateTime(1593, 2, 23, 13, 36, 22, 584, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 6875);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2167-04-13 13:36:29:0459');

        dateTime = new DateTime(3227, 1, 11, 1, 46, 55, 210, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -8442);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3752-07-05 01:46:46:0768');

        dateTime = new DateTime(1177, 8, 21, 10, 53, 41, 413, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 1490);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1764-02-23 10:53:42:0903');

        dateTime = new DateTime(1209, 9, 21, 17, 18, 22, 373, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 3487);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1795-04-10 17:18:25:0860');

        dateTime = new DateTime(972, 6, 17, 18, 26, 44, 350, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -7380);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1565-01-29 18:26:36:0970');

        dateTime = new DateTime(4520, 9, 8, 9, 53, 43, 495, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 8500);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5007-08-25 09:53:51:0995');

        dateTime = new DateTime(1573, 8, 16, 9, 7, 43, 30, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -9014);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2148-05-04 09:07:34:0016');

        dateTime = new DateTime(1128, 1, 15, 6, 57, 26, 924, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -997);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1716-01-09 06:57:25:0927');

        dateTime = new DateTime(1051, 1, 17, 9, 25, 23, 949, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 7565);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1641-04-27 09:25:31:0514');

        dateTime = new DateTime(1546, 10, 9, 15, 50, 14, 296, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -8676);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2122-04-15 15:50:05:0620');

        dateTime = new DateTime(3787, 1, 14, 11, 26, 52, 541, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 5410);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4295-11-04 11:26:57:0951');

        dateTime = new DateTime(1862, 9, 2, 6, 22, 38, 716, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -675);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2428-10-10 06:22:38:0041');

        dateTime = new DateTime(927, 1, 27, 3, 8, 27, 182, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 3597);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1521-01-16 03:08:30:0779');

        dateTime = new DateTime(1386, 11, 24, 18, 44, 20, 503, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 382);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1967-03-05 18:44:20:0885');

        dateTime = new DateTime(2103, 1, 6, 19, 10, 38, 14, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -9624);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2661-12-19 19:10:28:0390');

        dateTime = new DateTime(1438, 3, 14, 14, 44, 20, 925, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -6416);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2016-12-13 14:44:14:0509');

        dateTime = new DateTime(3858, 2, 14, 12, 49, 30, 389, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 7394);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4364-10-23 12:49:37:0783');

        dateTime = new DateTime(2605, 2, 14, 15, 49, 9, 945, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 8199);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3149-02-14 15:49:18:0144');

        dateTime = new DateTime(1388, 9, 14, 22, 45, 6, 670, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 6703);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1968-12-04 22:45:13:0373');

        dateTime = new DateTime(1229, 4, 11, 1, 1, 43, 777, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, -361);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1814-04-01 01:01:43:0416');

        dateTime = new DateTime(4334, 2, 25, 5, 8, 26, 976, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 3181);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4826-09-01 05:08:30:0157');

        dateTime = new DateTime(4163, 11, 11, 22, 14, 3, 785, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 3053);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4661-06-12 22:14:06:0838');

        dateTime = new DateTime(878, 9, 15, 5, 7, 5, 443, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 8636);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1474-02-11 05:07:14:0079');

        dateTime = new DateTime(4790, 3, 9, 3, 4, 34, 586, hijriCalendar);
        dateTime = calendar.addMilliseconds(dateTime, 1079);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5269-02-14 03:04:35:0665');

    });


    it('should add minutes correctly', () => {
        let calendar = new HijriCalendar();
        let hijriCalendar = new HijriCalendar();

        let dateTime = new DateTime(1924, 1, 4, 14, 56, 44, 229, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3033);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2488-04-13 12:23:44:0229');

        dateTime = new DateTime(4969, 5, 13, 22, 48, 32, 833, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 2360);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5442-12-22 14:08:32:0833');

        dateTime = new DateTime(4744, 9, 4, 8, 19, 39, 588, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 3570);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5224-12-20 19:49:39:0588');

        dateTime = new DateTime(2510, 2, 13, 11, 1, 47, 448, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 6985);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3056-12-17 07:26:47:0448');

        dateTime = new DateTime(3455, 9, 1, 10, 20, 7, 943, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -508);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3974-05-04 01:52:07:0943');

        dateTime = new DateTime(3654, 8, 14, 4, 31, 5, 769, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -7541);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4167-05-09 22:50:05:0769');

        dateTime = new DateTime(2620, 9, 16, 3, 51, 38, 364, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3014);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3164-03-28 01:37:38:0364');

        dateTime = new DateTime(2155, 5, 9, 7, 4, 32, 53, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 3721);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2712-10-03 21:05:32:0053');

        dateTime = new DateTime(1352, 3, 13, 6, 6, 23, 939, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 3890);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1933-07-07 22:56:23:0939');

        dateTime = new DateTime(3156, 7, 25, 11, 22, 15, 851, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 8721);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3684-02-29 12:43:15:0851');

        dateTime = new DateTime(1231, 11, 20, 11, 57, 43, 912, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -1699);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1816-10-10 07:38:43:0912');

        dateTime = new DateTime(3460, 9, 9, 17, 53, 6, 217, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -5);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3979-03-19 17:48:06:0217');

        dateTime = new DateTime(1166, 7, 8, 14, 2, 19, 247, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -9498);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1753-05-03 23:44:19:0247');

        dateTime = new DateTime(2844, 1, 4, 9, 49, 44, 721, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -2444);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3380-11-20 17:05:44:0721');

        dateTime = new DateTime(1770, 7, 15, 15, 19, 27, 109, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -4839);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2339-05-21 06:40:27:0109');

        dateTime = new DateTime(2245, 4, 4, 15, 6, 4, 588, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -4241);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2799-12-20 16:25:04:0588');

        dateTime = new DateTime(1415, 7, 4, 10, 10, 17, 21, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 1327);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1994-12-07 08:17:17:0021');

        dateTime = new DateTime(4056, 4, 17, 11, 39, 24, 191, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 2378);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4557-02-02 03:17:24:0191');

        dateTime = new DateTime(1660, 8, 23, 7, 14, 43, 59, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 6845);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2232-10-13 01:19:43:0059');

        dateTime = new DateTime(890, 9, 1, 15, 48, 2, 368, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -9949);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1485-09-12 17:59:02:0368');

        dateTime = new DateTime(2475, 2, 24, 9, 5, 2, 902, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 9311);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3023-01-14 20:16:02:0902');

        dateTime = new DateTime(3174, 8, 20, 8, 46, 36, 134, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 8563);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3701-09-11 07:29:36:0134');

        dateTime = new DateTime(2034, 10, 26, 18, 42, 31, 737, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -4136);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2595-10-17 21:46:31:0737');

        dateTime = new DateTime(4304, 11, 11, 1, 26, 29, 133, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -7948);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4798-03-26 12:58:29:0133');

        dateTime = new DateTime(2574, 4, 19, 20, 1, 17, 912, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -1105);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3119-03-22 01:36:17:0912');

        dateTime = new DateTime(992, 2, 5, 8, 23, 13, 606, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 4133);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1584-02-19 05:16:13:0606');

        dateTime = new DateTime(4812, 4, 1, 21, 1, 4, 671, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -1169);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5290-07-12 01:32:04:0671');

        dateTime = new DateTime(2219, 10, 13, 7, 51, 30, 346, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -8268);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2775-03-30 14:03:30:0346');

        dateTime = new DateTime(3947, 6, 28, 5, 17, 14, 358, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 7270);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4451-07-15 06:27:14:0358');

        dateTime = new DateTime(4612, 7, 5, 3, 9, 19, 224, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 747);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5096-09-26 15:36:19:0224');

        dateTime = new DateTime(3891, 3, 15, 18, 4, 45, 59, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 5677);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4396-12-02 16:41:45:0059');

        dateTime = new DateTime(2947, 1, 20, 19, 18, 31, 911, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -1234);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3480-11-13 22:44:31:0911');

        dateTime = new DateTime(2879, 11, 4, 18, 37, 7, 198, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 7418);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3415-09-04 22:15:07:0198');

        dateTime = new DateTime(2836, 10, 12, 10, 49, 37, 359, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -5119);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3373-11-14 21:30:37:0359');

        dateTime = new DateTime(2996, 5, 25, 3, 1, 23, 517, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3290);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3528-09-28 20:11:23:0517');

        dateTime = new DateTime(650, 1, 28, 20, 49, 28, 707, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 8667);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1252-04-22 21:16:28:0707');

        dateTime = new DateTime(861, 11, 20, 13, 0, 49, 464, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -8260);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1457-10-11 19:20:49:0464');

        dateTime = new DateTime(952, 9, 7, 18, 47, 48, 667, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -4835);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1545-11-18 10:12:48:0667');

        dateTime = new DateTime(2692, 5, 12, 21, 0, 17, 510, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -7778);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3233-10-02 11:22:17:0510');

        dateTime = new DateTime(2416, 7, 5, 6, 31, 5, 312, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3164);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2966-02-13 01:47:05:0312');

        dateTime = new DateTime(2196, 7, 26, 2, 14, 53, 390, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 3601);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2752-09-28 14:15:53:0390');

        dateTime = new DateTime(2777, 2, 3, 20, 54, 0, 82, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3625);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3315-12-19 08:29:00:0082');

        dateTime = new DateTime(3009, 11, 12, 15, 14, 38, 78, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -6218);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3541-10-20 07:36:38:0078');

        dateTime = new DateTime(685, 2, 20, 14, 58, 37, 903, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 3657);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1286-04-26 03:55:37:0903');

        dateTime = new DateTime(1156, 11, 5, 7, 9, 50, 186, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 5589);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1743-12-24 04:18:50:0186');

        dateTime = new DateTime(4198, 10, 28, 1, 43, 15, 443, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -2820);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4695-05-14 02:43:15:0443');

        dateTime = new DateTime(2375, 4, 5, 5, 49, 31, 784, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 9542);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2926-02-14 20:51:31:0784');

        dateTime = new DateTime(2572, 2, 24, 19, 8, 21, 468, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -9863);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3117-02-11 22:45:21:0468');

        dateTime = new DateTime(1146, 9, 6, 10, 29, 15, 691, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 9724);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1734-02-16 04:33:15:0691');

        dateTime = new DateTime(890, 5, 23, 6, 53, 56, 807, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 7845);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1485-06-20 17:38:56:0807');

        dateTime = new DateTime(1602, 11, 27, 21, 41, 38, 532, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -7503);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2176-09-25 16:38:38:0532');

        dateTime = new DateTime(4285, 9, 10, 8, 10, 22, 345, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 7750);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4779-08-31 17:20:22:0345');

        dateTime = new DateTime(4117, 7, 16, 13, 53, 38, 19, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 4009);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4616-07-07 08:42:38:0019');

        dateTime = new DateTime(2428, 2, 13, 10, 8, 13, 655, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -7459);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2977-05-17 05:49:13:0655');

        dateTime = new DateTime(1983, 4, 3, 21, 49, 15, 184, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -6454);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2545-10-06 10:15:15:0184');

        dateTime = new DateTime(3871, 10, 19, 14, 31, 43, 877, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3150);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4378-01-29 10:01:43:0877');

        dateTime = new DateTime(909, 9, 2, 15, 53, 23, 642, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -2986);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1504-02-25 14:07:23:0642');

        dateTime = new DateTime(4757, 6, 10, 20, 35, 34, 786, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -4769);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5237-05-06 13:06:34:0786');

        dateTime = new DateTime(967, 10, 22, 9, 30, 19, 532, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 2651);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1560-07-27 05:41:19:0532');

        dateTime = new DateTime(1164, 4, 1, 14, 36, 12, 617, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -6940);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1751-02-21 18:56:12:0617');

        dateTime = new DateTime(2422, 9, 21, 14, 34, 19, 537, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 5681);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2972-03-01 13:15:19:0537');

        dateTime = new DateTime(4871, 8, 24, 19, 2, 1, 850, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 3189);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5348-03-02 00:11:01:0850');

        dateTime = new DateTime(1182, 8, 6, 3, 10, 23, 472, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 4366);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1768-12-18 03:56:23:0472');

        dateTime = new DateTime(1056, 5, 24, 3, 33, 26, 202, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 1536);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1646-07-08 05:09:26:0202');

        dateTime = new DateTime(2760, 6, 27, 3, 51, 52, 440, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 9067);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3299-11-18 10:58:52:0440');

        dateTime = new DateTime(3172, 6, 14, 19, 44, 26, 885, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -2117);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3699-07-23 08:27:26:0885');

        dateTime = new DateTime(2006, 11, 22, 19, 10, 39, 879, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -9303);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2568-09-08 08:07:39:0879');

        dateTime = new DateTime(657, 6, 24, 4, 43, 35, 354, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 2272);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1259-06-25 18:35:35:0354');

        dateTime = new DateTime(2015, 8, 11, 22, 36, 58, 497, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -788);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2577-03-01 09:28:58:0497');

        dateTime = new DateTime(939, 3, 27, 21, 43, 49, 107, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 3974);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1532-11-08 15:57:49:0107');

        dateTime = new DateTime(4812, 4, 13, 12, 42, 13, 45, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3743);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5290-07-21 22:19:13:0045');

        dateTime = new DateTime(2163, 2, 11, 4, 14, 39, 230, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -2724);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2720-04-09 06:50:39:0230');

        dateTime = new DateTime(4407, 8, 18, 7, 29, 42, 669, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -8309);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4897-12-10 13:00:42:0669');

        dateTime = new DateTime(2557, 11, 21, 6, 41, 39, 462, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3045);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3103-04-17 03:56:39:0462');

        dateTime = new DateTime(1518, 11, 23, 3, 53, 14, 168, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3878);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2095-03-25 11:15:14:0168');

        dateTime = new DateTime(2377, 8, 9, 6, 29, 6, 576, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3742);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2928-05-16 16:07:06:0576');

        dateTime = new DateTime(1070, 9, 7, 11, 37, 26, 240, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 5422);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1660-05-20 05:59:26:0240');

        dateTime = new DateTime(1416, 2, 11, 10, 30, 54, 884, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -9701);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1995-07-02 16:49:54:0884');

        dateTime = new DateTime(2492, 2, 14, 6, 15, 53, 54, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 1336);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3039-06-28 04:31:53:0054');

        dateTime = new DateTime(1372, 3, 16, 21, 8, 16, 444, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -343);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1952-12-03 15:25:16:0444');

        dateTime = new DateTime(2221, 10, 15, 8, 57, 39, 4, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 7122);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2777-03-21 07:39:39:0004');

        dateTime = new DateTime(1364, 8, 15, 19, 55, 54, 147, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -2417);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1945-07-24 03:38:54:0147');

        dateTime = new DateTime(2613, 9, 24, 7, 0, 0, 631, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 9024);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3157-06-29 13:24:00:0631');

        dateTime = new DateTime(1363, 5, 7, 8, 35, 24, 126, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 8641);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1944-05-05 08:36:24:0126');

        dateTime = new DateTime(2465, 9, 9, 14, 35, 48, 466, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 2262);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3013-11-05 04:17:48:0466');

        dateTime = new DateTime(1456, 6, 19, 12, 21, 49, 300, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 8162);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2034-09-08 04:23:49:0300');

        dateTime = new DateTime(3450, 4, 5, 17, 45, 45, 738, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 1599);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3969-02-06 20:24:45:0738');

        dateTime = new DateTime(1735, 4, 18, 19, 37, 53, 480, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 351);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2305-03-16 01:28:53:0480');

        dateTime = new DateTime(1833, 3, 22, 14, 57, 26, 93, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 660);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2400-03-19 01:57:26:0093');

        dateTime = new DateTime(2115, 3, 22, 6, 50, 44, 394, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -4854);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2673-10-20 21:56:44:0394');

        dateTime = new DateTime(4523, 9, 4, 8, 36, 48, 309, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -7002);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5010-07-14 11:54:48:0309');

        dateTime = new DateTime(3508, 6, 28, 8, 7, 16, 71, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 8697);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4025-08-11 09:04:16:0071');

        dateTime = new DateTime(1164, 7, 9, 1, 9, 44, 282, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 7464);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1751-06-07 05:33:44:0282');

        dateTime = new DateTime(1207, 7, 24, 22, 4, 37, 742, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -5054);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1793-03-03 09:50:37:0742');

        dateTime = new DateTime(3408, 8, 12, 20, 35, 41, 79, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 3789);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3928-09-12 11:44:41:0079');

        dateTime = new DateTime(1936, 7, 19, 19, 1, 41, 921, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -3437);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2500-06-14 09:44:41:0921');

        dateTime = new DateTime(2374, 9, 2, 15, 53, 27, 416, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 4911);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2925-07-17 01:44:27:0416');

        dateTime = new DateTime(3390, 5, 17, 3, 34, 43, 515, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, -5832);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3910-12-27 02:22:43:0515');

        dateTime = new DateTime(1489, 4, 2, 15, 30, 3, 460, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 2266);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2066-06-27 05:16:03:0460');

        dateTime = new DateTime(4211, 6, 10, 13, 55, 46, 879, hijriCalendar);
        dateTime = calendar.addMinutes(dateTime, 6504);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4707-08-18 02:19:46:0879');

    });

    it('should calculate dayOfMonth correctly', () => {
        let calendar = new HijriCalendar();
        let hijriCalendar = new HijriCalendar();

        let dateTime = new DateTime(4966, 11, 16, 7, 48, 46, 850, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(1748, 5, 5, 22, 14, 5, 924, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3488, 11, 12, 21, 17, 8, 887, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(1065, 6, 6, 4, 5, 53, 252, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(6);

        dateTime = new DateTime(880, 11, 23, 6, 17, 22, 702, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(23);

        dateTime = new DateTime(3541, 6, 11, 18, 33, 49, 281, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(11);

        dateTime = new DateTime(3631, 3, 2, 7, 50, 27, 79, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(3312, 9, 1, 18, 39, 33, 701, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4583, 1, 12, 13, 45, 13, 798, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(3081, 6, 16, 2, 51, 33, 553, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(3699, 4, 16, 1, 40, 1, 820, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(2028, 10, 21, 7, 49, 23, 924, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(21);

        dateTime = new DateTime(2246, 11, 10, 22, 44, 46, 865, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(10);

        dateTime = new DateTime(1912, 2, 10, 1, 16, 2, 178, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4793, 6, 14, 6, 34, 31, 772, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(14);

        dateTime = new DateTime(4035, 3, 22, 18, 47, 54, 935, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(22);

        dateTime = new DateTime(2090, 3, 28, 15, 40, 57, 452, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(3724, 4, 17, 2, 29, 50, 263, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(17);

        dateTime = new DateTime(1489, 6, 21, 5, 27, 54, 981, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(21);

        dateTime = new DateTime(4372, 11, 24, 18, 1, 55, 472, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(24);

        dateTime = new DateTime(4621, 8, 15, 19, 34, 20, 898, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(15);

        dateTime = new DateTime(2602, 9, 14, 4, 54, 39, 158, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(14);

        dateTime = new DateTime(2565, 8, 14, 18, 11, 31, 503, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(14);

        dateTime = new DateTime(4355, 7, 22, 14, 54, 39, 81, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(22);

        dateTime = new DateTime(626, 1, 6, 12, 18, 4, 246, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(6);

        dateTime = new DateTime(4242, 10, 28, 3, 56, 32, 965, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(3114, 5, 12, 22, 6, 25, 370, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(2972, 10, 6, 6, 48, 41, 743, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(6);

        dateTime = new DateTime(2719, 8, 24, 17, 6, 49, 628, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(24);

        dateTime = new DateTime(1505, 6, 7, 16, 10, 25, 898, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(7);

        dateTime = new DateTime(3079, 6, 2, 20, 57, 28, 657, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(2541, 5, 7, 16, 6, 26, 943, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(7);

        dateTime = new DateTime(3361, 9, 20, 12, 57, 1, 467, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(20);

        dateTime = new DateTime(3669, 8, 13, 22, 25, 4, 388, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(13);

        dateTime = new DateTime(3615, 8, 11, 14, 10, 36, 944, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(11);

        dateTime = new DateTime(4413, 3, 28, 10, 14, 55, 828, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(3953, 1, 3, 8, 0, 0, 207, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(3);

        dateTime = new DateTime(4375, 2, 28, 12, 23, 12, 972, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(1882, 2, 9, 10, 29, 3, 395, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(9);

        dateTime = new DateTime(1161, 3, 28, 14, 24, 22, 135, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(4856, 11, 26, 9, 56, 19, 50, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(26);

        dateTime = new DateTime(4428, 7, 8, 3, 20, 47, 385, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(8);

        dateTime = new DateTime(869, 2, 18, 10, 1, 50, 245, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(18);

        dateTime = new DateTime(1798, 7, 1, 19, 0, 23, 97, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4962, 8, 6, 9, 20, 5, 65, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(6);

        dateTime = new DateTime(4956, 1, 2, 13, 21, 23, 639, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(4712, 6, 12, 19, 8, 48, 549, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(1634, 4, 26, 20, 47, 33, 165, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(26);

        dateTime = new DateTime(3110, 2, 12, 14, 3, 36, 383, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(2862, 9, 1, 6, 13, 35, 687, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(1);

        dateTime = new DateTime(1464, 5, 11, 12, 32, 39, 844, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2065, 5, 9, 17, 46, 5, 116, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(9);

        dateTime = new DateTime(4794, 1, 21, 21, 5, 7, 238, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(21);

        dateTime = new DateTime(3370, 3, 20, 13, 34, 27, 479, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(20);

        dateTime = new DateTime(1501, 4, 9, 10, 9, 8, 438, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(9);

        dateTime = new DateTime(2632, 10, 4, 17, 33, 16, 593, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1185, 6, 24, 20, 25, 42, 82, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(24);

        dateTime = new DateTime(1078, 7, 12, 1, 53, 30, 632, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(3521, 8, 10, 21, 4, 34, 142, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4461, 5, 25, 10, 23, 45, 203, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(25);

        dateTime = new DateTime(3255, 10, 1, 13, 35, 0, 749, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4406, 9, 15, 3, 12, 4, 107, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(15);

        dateTime = new DateTime(2776, 1, 22, 15, 41, 2, 894, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(22);

        dateTime = new DateTime(3487, 9, 19, 15, 5, 44, 51, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(19);

        dateTime = new DateTime(3309, 6, 25, 18, 38, 4, 84, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(25);

        dateTime = new DateTime(3658, 1, 5, 14, 58, 51, 416, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3184, 6, 16, 6, 7, 22, 419, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(841, 11, 14, 19, 43, 24, 492, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(14);

        dateTime = new DateTime(1432, 11, 12, 13, 43, 14, 458, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(1062, 6, 11, 11, 29, 55, 88, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(11);

        dateTime = new DateTime(1621, 11, 1, 19, 45, 25, 703, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(1);

        dateTime = new DateTime(800, 7, 7, 21, 42, 26, 146, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(7);

        dateTime = new DateTime(4947, 6, 23, 14, 49, 10, 721, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(23);

        dateTime = new DateTime(4085, 7, 28, 4, 27, 34, 952, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(2887, 8, 6, 22, 38, 47, 572, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(6);

        dateTime = new DateTime(4609, 9, 14, 3, 47, 12, 707, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(14);

        dateTime = new DateTime(3280, 6, 24, 7, 20, 21, 272, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(24);

        dateTime = new DateTime(1899, 10, 4, 3, 53, 5, 78, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1191, 8, 19, 22, 22, 17, 959, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(19);

        dateTime = new DateTime(3289, 1, 20, 10, 32, 49, 159, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(20);

        dateTime = new DateTime(1355, 7, 16, 1, 3, 48, 321, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(2405, 4, 15, 2, 16, 39, 636, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(15);

        dateTime = new DateTime(3301, 1, 20, 18, 15, 29, 685, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(20);

        dateTime = new DateTime(1842, 7, 2, 6, 9, 35, 305, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(1220, 8, 3, 22, 29, 57, 747, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(3);

        dateTime = new DateTime(1182, 9, 14, 8, 28, 22, 671, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(14);

        dateTime = new DateTime(4202, 6, 22, 5, 46, 2, 573, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(22);

        dateTime = new DateTime(1210, 2, 1, 1, 18, 10, 396, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(1);

        dateTime = new DateTime(3098, 4, 5, 18, 52, 50, 667, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3339, 4, 2, 1, 53, 44, 895, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(3462, 10, 17, 22, 45, 14, 559, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(17);

        dateTime = new DateTime(2970, 11, 12, 22, 53, 8, 368, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(4883, 6, 24, 12, 45, 10, 394, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(24);

        dateTime = new DateTime(3226, 10, 14, 8, 37, 41, 436, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(14);

        dateTime = new DateTime(2840, 6, 27, 13, 36, 4, 533, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(27);

        dateTime = new DateTime(969, 10, 19, 15, 45, 33, 736, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(19);

        dateTime = new DateTime(2709, 9, 17, 10, 4, 38, 745, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(17);

        dateTime = new DateTime(1762, 4, 21, 3, 24, 53, 829, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(21);

        dateTime = new DateTime(745, 2, 16, 20, 16, 42, 819, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(1259, 3, 11, 9, 2, 3, 876, hijriCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(11);

    });

    it('should calculate dayOfYear correctly', () => {
        let calendar = new HijriCalendar();
        let hijriCalendar = new HijriCalendar();

        let dateTime = new DateTime(2205, 5, 16, 8, 34, 3, 689, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(134);

        dateTime = new DateTime(2538, 10, 20, 7, 40, 4, 482, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(286);

        dateTime = new DateTime(4934, 8, 19, 15, 29, 41, 760, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(226);

        dateTime = new DateTime(2726, 9, 2, 3, 5, 26, 458, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(238);

        dateTime = new DateTime(748, 10, 3, 19, 18, 51, 994, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(269);

        dateTime = new DateTime(3534, 3, 4, 16, 50, 49, 626, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(63);

        dateTime = new DateTime(1923, 6, 14, 18, 0, 27, 479, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(162);

        dateTime = new DateTime(4258, 4, 2, 5, 14, 30, 615, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(91);

        dateTime = new DateTime(4472, 9, 8, 6, 17, 9, 246, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(244);

        dateTime = new DateTime(3602, 2, 17, 10, 34, 13, 235, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(47);

        dateTime = new DateTime(1909, 1, 10, 7, 54, 47, 469, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(10);

        dateTime = new DateTime(3190, 9, 18, 19, 8, 29, 843, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(254);

        dateTime = new DateTime(1469, 7, 28, 1, 30, 6, 840, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(205);

        dateTime = new DateTime(4628, 1, 14, 19, 5, 22, 782, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(14);

        dateTime = new DateTime(1824, 10, 15, 12, 17, 29, 678, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(281);

        dateTime = new DateTime(972, 1, 22, 14, 3, 52, 480, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(22);

        dateTime = new DateTime(1020, 1, 1, 4, 46, 44, 377, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(1);

        dateTime = new DateTime(1063, 3, 14, 8, 54, 41, 122, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(73);

        dateTime = new DateTime(4177, 3, 1, 1, 50, 32, 785, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(60);

        dateTime = new DateTime(2780, 4, 19, 8, 9, 40, 906, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(108);

        dateTime = new DateTime(2729, 3, 4, 3, 7, 50, 449, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(63);

        dateTime = new DateTime(2406, 9, 2, 2, 6, 35, 794, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(238);

        dateTime = new DateTime(4006, 10, 28, 4, 56, 8, 230, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(294);

        dateTime = new DateTime(4695, 9, 27, 2, 52, 7, 811, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(263);

        dateTime = new DateTime(1303, 1, 18, 17, 10, 1, 357, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(18);

        dateTime = new DateTime(3237, 10, 3, 9, 49, 6, 506, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(269);

        dateTime = new DateTime(1989, 3, 13, 15, 27, 17, 497, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(72);

        dateTime = new DateTime(3951, 8, 14, 20, 47, 0, 156, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(221);

        dateTime = new DateTime(4710, 10, 17, 7, 21, 16, 123, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(283);

        dateTime = new DateTime(4917, 1, 11, 11, 3, 58, 682, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(11);

        dateTime = new DateTime(3996, 11, 21, 15, 1, 29, 845, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(316);

        dateTime = new DateTime(2722, 2, 3, 7, 15, 13, 886, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(33);

        dateTime = new DateTime(3272, 5, 23, 2, 10, 36, 38, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(141);

        dateTime = new DateTime(1778, 4, 20, 6, 46, 43, 975, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(109);

        dateTime = new DateTime(4634, 7, 3, 6, 27, 18, 393, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(180);

        dateTime = new DateTime(4013, 3, 1, 1, 52, 22, 963, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(60);

        dateTime = new DateTime(4594, 10, 25, 15, 35, 19, 457, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(291);

        dateTime = new DateTime(2863, 10, 19, 14, 1, 53, 235, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(285);

        dateTime = new DateTime(3629, 11, 27, 22, 41, 0, 268, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(322);

        dateTime = new DateTime(1294, 1, 1, 12, 22, 9, 907, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(1);

        dateTime = new DateTime(1682, 1, 5, 12, 57, 29, 65, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(5);

        dateTime = new DateTime(803, 9, 7, 16, 55, 21, 221, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(243);

        dateTime = new DateTime(1989, 1, 18, 3, 49, 0, 703, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(18);

        dateTime = new DateTime(2263, 3, 2, 14, 16, 29, 686, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(61);

        dateTime = new DateTime(4586, 5, 16, 18, 57, 53, 673, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(134);

        dateTime = new DateTime(4859, 5, 26, 7, 21, 17, 401, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(144);

        dateTime = new DateTime(1182, 1, 26, 11, 45, 13, 450, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(26);

        dateTime = new DateTime(2248, 3, 11, 7, 13, 58, 89, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(70);

        dateTime = new DateTime(2030, 5, 20, 1, 43, 29, 60, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(138);

        dateTime = new DateTime(1374, 6, 14, 17, 12, 15, 865, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(162);

        dateTime = new DateTime(4721, 9, 8, 13, 3, 17, 179, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(244);

        dateTime = new DateTime(2103, 4, 21, 22, 3, 23, 814, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(110);

        dateTime = new DateTime(2053, 11, 7, 15, 32, 0, 970, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(302);

        dateTime = new DateTime(2440, 5, 17, 18, 44, 40, 396, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(135);

        dateTime = new DateTime(1917, 9, 7, 9, 7, 11, 327, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(243);

        dateTime = new DateTime(2840, 6, 8, 9, 14, 43, 29, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(156);

        dateTime = new DateTime(4057, 2, 9, 20, 12, 39, 242, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(39);

        dateTime = new DateTime(860, 10, 26, 10, 55, 46, 335, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(292);

        dateTime = new DateTime(4421, 1, 5, 7, 20, 25, 964, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(5);

        dateTime = new DateTime(4935, 3, 14, 9, 2, 24, 499, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(73);

        dateTime = new DateTime(4075, 2, 15, 12, 3, 11, 25, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(45);

        dateTime = new DateTime(4669, 9, 2, 8, 50, 12, 269, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(238);

        dateTime = new DateTime(4553, 2, 14, 20, 18, 28, 49, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(44);

        dateTime = new DateTime(4855, 8, 10, 12, 21, 7, 945, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(217);

        dateTime = new DateTime(4644, 6, 18, 8, 47, 27, 394, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(166);

        dateTime = new DateTime(2163, 3, 21, 21, 21, 6, 961, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(80);

        dateTime = new DateTime(1999, 8, 16, 20, 56, 36, 677, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(223);

        dateTime = new DateTime(833, 3, 5, 22, 17, 7, 661, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(64);

        dateTime = new DateTime(3583, 11, 10, 5, 10, 30, 273, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(305);

        dateTime = new DateTime(3265, 7, 13, 9, 29, 5, 569, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(190);

        dateTime = new DateTime(1937, 8, 1, 7, 0, 11, 683, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(208);

        dateTime = new DateTime(2480, 1, 13, 2, 45, 49, 993, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(13);

        dateTime = new DateTime(3033, 9, 10, 9, 44, 55, 449, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(246);

        dateTime = new DateTime(1011, 1, 24, 10, 9, 37, 240, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(24);

        dateTime = new DateTime(4347, 8, 17, 2, 54, 5, 240, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(224);

        dateTime = new DateTime(770, 1, 20, 4, 32, 43, 647, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(20);

        dateTime = new DateTime(3512, 5, 11, 14, 39, 17, 127, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(129);

        dateTime = new DateTime(667, 4, 14, 1, 29, 1, 657, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(103);

        dateTime = new DateTime(2303, 11, 1, 22, 18, 28, 740, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(296);

        dateTime = new DateTime(4485, 5, 11, 7, 7, 2, 746, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(129);

        dateTime = new DateTime(4586, 9, 13, 11, 37, 36, 376, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(249);

        dateTime = new DateTime(4185, 3, 1, 6, 10, 53, 601, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(60);

        dateTime = new DateTime(1951, 9, 19, 21, 54, 49, 259, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(255);

        dateTime = new DateTime(4557, 6, 19, 22, 2, 54, 717, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(167);

        dateTime = new DateTime(4995, 1, 11, 2, 4, 41, 818, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(11);

        dateTime = new DateTime(4646, 10, 19, 19, 18, 47, 212, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(285);

        dateTime = new DateTime(3475, 1, 27, 10, 3, 13, 763, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(27);

        dateTime = new DateTime(3025, 5, 26, 21, 50, 32, 74, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(144);

        dateTime = new DateTime(1955, 3, 6, 19, 28, 0, 480, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(65);

        dateTime = new DateTime(2736, 6, 12, 18, 6, 53, 818, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(160);

        dateTime = new DateTime(718, 7, 18, 10, 3, 14, 803, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(195);

        dateTime = new DateTime(1504, 4, 20, 3, 42, 52, 86, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(109);

        dateTime = new DateTime(4315, 7, 10, 9, 21, 57, 996, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(187);

        dateTime = new DateTime(4201, 10, 6, 1, 21, 37, 714, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(272);

        dateTime = new DateTime(1534, 4, 18, 3, 33, 10, 998, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(107);

        dateTime = new DateTime(3226, 6, 6, 1, 54, 4, 449, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(154);

        dateTime = new DateTime(1134, 5, 17, 3, 23, 50, 151, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(135);

        dateTime = new DateTime(4288, 10, 20, 11, 0, 51, 53, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(286);

        dateTime = new DateTime(2297, 1, 3, 3, 23, 12, 717, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(3);

        dateTime = new DateTime(1088, 2, 22, 5, 42, 19, 936, hijriCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(52);

    });

    it('should calculate getMonth correctly', () => {
        let calendar = new HijriCalendar();
        let hijriCalendar = new HijriCalendar();

        let dateTime = new DateTime(3245, 11, 16, 18, 16, 38, 649, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2147, 9, 7, 5, 52, 2, 261, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(1538, 4, 13, 17, 53, 4, 316, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1050, 4, 10, 7, 23, 31, 770, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1685, 1, 4, 14, 3, 6, 385, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(2411, 2, 27, 15, 37, 55, 672, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(2734, 3, 26, 6, 54, 11, 252, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(1418, 8, 26, 20, 35, 10, 612, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(1080, 5, 18, 10, 1, 49, 520, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(4927, 6, 23, 3, 58, 39, 702, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(1055, 7, 28, 21, 17, 19, 528, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(3281, 9, 26, 4, 17, 45, 34, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(4681, 7, 28, 10, 25, 22, 43, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(1652, 10, 24, 5, 17, 8, 62, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4910, 11, 7, 16, 22, 47, 64, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(861, 11, 12, 2, 48, 21, 340, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(834, 2, 25, 17, 25, 31, 240, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(4780, 8, 1, 9, 21, 18, 27, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(4807, 7, 1, 10, 10, 19, 206, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(3513, 2, 14, 7, 47, 40, 820, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(3081, 10, 1, 14, 17, 2, 733, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(3237, 9, 21, 21, 40, 29, 660, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(2178, 8, 10, 15, 47, 5, 982, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(3784, 6, 23, 15, 40, 4, 836, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(1332, 7, 25, 11, 27, 7, 840, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(1561, 2, 23, 13, 43, 35, 591, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(2834, 6, 8, 22, 16, 21, 573, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(2687, 11, 9, 10, 2, 37, 627, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2009, 2, 27, 13, 50, 23, 202, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(2477, 6, 11, 4, 14, 29, 774, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(3089, 11, 17, 18, 28, 32, 652, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2476, 7, 6, 20, 39, 46, 992, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(4547, 10, 8, 1, 0, 37, 396, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(3936, 7, 4, 6, 46, 58, 645, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(2044, 10, 19, 10, 22, 45, 423, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(1607, 6, 6, 17, 33, 31, 378, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(1353, 2, 23, 8, 36, 44, 716, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(4879, 3, 10, 5, 19, 55, 897, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(4603, 10, 13, 19, 22, 57, 765, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4118, 7, 15, 8, 37, 1, 344, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(3294, 5, 1, 2, 18, 23, 96, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(4366, 4, 6, 15, 30, 23, 718, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(4296, 5, 6, 2, 48, 34, 11, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(1816, 1, 23, 18, 1, 55, 699, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4887, 4, 7, 10, 42, 35, 338, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1800, 8, 18, 14, 14, 36, 43, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(2463, 11, 21, 6, 48, 57, 90, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2176, 6, 23, 18, 43, 23, 367, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(3409, 10, 2, 19, 29, 54, 633, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(2159, 1, 21, 18, 30, 35, 782, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4028, 2, 17, 8, 41, 16, 290, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(3010, 8, 26, 10, 22, 11, 967, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(1953, 11, 7, 11, 2, 24, 224, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(3173, 7, 4, 1, 26, 6, 909, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(3461, 6, 12, 5, 33, 38, 872, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(4067, 6, 25, 9, 37, 32, 309, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(4559, 9, 28, 17, 23, 10, 512, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(3945, 1, 2, 20, 54, 28, 117, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4275, 8, 5, 13, 38, 24, 36, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(1564, 10, 20, 19, 27, 58, 686, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4580, 8, 24, 8, 10, 9, 666, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(3567, 8, 13, 7, 49, 31, 710, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(3684, 7, 28, 16, 8, 50, 973, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(3927, 9, 1, 14, 31, 58, 321, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(1409, 4, 12, 17, 25, 27, 596, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(3527, 1, 16, 19, 1, 34, 90, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4650, 11, 16, 5, 29, 43, 625, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(678, 10, 12, 9, 34, 34, 821, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(633, 4, 22, 14, 31, 53, 513, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1191, 9, 7, 13, 27, 19, 462, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(1577, 1, 14, 5, 37, 21, 510, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(2837, 1, 5, 14, 39, 28, 468, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(2091, 9, 13, 16, 53, 57, 233, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(2762, 3, 18, 13, 57, 11, 616, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(1698, 4, 19, 12, 5, 19, 635, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(4302, 9, 26, 7, 24, 42, 369, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(3605, 4, 28, 12, 6, 17, 216, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(2621, 7, 16, 21, 12, 38, 613, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(2643, 8, 4, 13, 30, 33, 968, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(1912, 3, 14, 14, 6, 16, 625, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(3882, 4, 24, 11, 39, 44, 581, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1251, 3, 6, 16, 45, 51, 81, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(4717, 5, 7, 3, 47, 2, 314, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(2896, 11, 14, 6, 26, 11, 984, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(3200, 5, 20, 7, 5, 0, 79, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(2891, 5, 26, 10, 29, 40, 665, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(1262, 10, 1, 4, 37, 16, 634, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4436, 5, 7, 8, 22, 2, 254, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3933, 2, 6, 14, 35, 34, 828, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(2304, 8, 23, 17, 42, 38, 990, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(4234, 4, 5, 2, 49, 56, 334, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1628, 10, 3, 16, 44, 32, 205, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(2062, 6, 12, 9, 46, 58, 168, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(1151, 8, 17, 7, 53, 33, 405, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(2539, 10, 27, 18, 51, 39, 839, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4089, 11, 26, 3, 42, 35, 288, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(3612, 4, 21, 10, 53, 18, 238, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(2925, 4, 16, 14, 41, 23, 726, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(853, 8, 17, 4, 42, 5, 94, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(4460, 9, 26, 11, 42, 13, 988, hijriCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

    });

    it('should calculate isLeapYear correctly', () => {
        let calendar = new HijriCalendar();

        expect(calendar.isLeapYear(3796)).toBe(true);

        expect(calendar.isLeapYear(1972)).toBe(false);

        expect(calendar.isLeapYear(3738)).toBe(true);

        expect(calendar.isLeapYear(4052)).toBe(true);

        expect(calendar.isLeapYear(3104)).toBe(false);

        expect(calendar.isLeapYear(810)).toBe(false);

        expect(calendar.isLeapYear(1105)).toBe(false);

        expect(calendar.isLeapYear(4133)).toBe(false);

        expect(calendar.isLeapYear(3511)).toBe(false);

        expect(calendar.isLeapYear(1416)).toBe(false);

        expect(calendar.isLeapYear(2849)).toBe(true);

        expect(calendar.isLeapYear(1343)).toBe(false);

        expect(calendar.isLeapYear(2416)).toBe(true);

        expect(calendar.isLeapYear(4207)).toBe(true);

        expect(calendar.isLeapYear(1261)).toBe(false);

        expect(calendar.isLeapYear(4720)).toBe(true);

        expect(calendar.isLeapYear(4394)).toBe(false);

        expect(calendar.isLeapYear(4148)).toBe(false);

        expect(calendar.isLeapYear(1879)).toBe(false);

        expect(calendar.isLeapYear(2661)).toBe(true);

        expect(calendar.isLeapYear(4042)).toBe(false);

        expect(calendar.isLeapYear(3173)).toBe(false);

        expect(calendar.isLeapYear(4628)).toBe(false);

        expect(calendar.isLeapYear(3872)).toBe(true);

        expect(calendar.isLeapYear(623)).toBe(false);

        expect(calendar.isLeapYear(1334)).toBe(false);

        expect(calendar.isLeapYear(1482)).toBe(false);

        expect(calendar.isLeapYear(672)).toBe(false);

        expect(calendar.isLeapYear(2912)).toBe(true);

        expect(calendar.isLeapYear(3791)).toBe(false);

        expect(calendar.isLeapYear(1698)).toBe(true);

        expect(calendar.isLeapYear(2969)).toBe(true);

        expect(calendar.isLeapYear(2145)).toBe(false);

        expect(calendar.isLeapYear(1150)).toBe(true);

        expect(calendar.isLeapYear(3670)).toBe(true);

        expect(calendar.isLeapYear(1442)).toBe(true);

        expect(calendar.isLeapYear(4595)).toBe(true);

        expect(calendar.isLeapYear(4705)).toBe(false);

        expect(calendar.isLeapYear(737)).toBe(false);

        expect(calendar.isLeapYear(2906)).toBe(true);

        expect(calendar.isLeapYear(1082)).toBe(true);

        expect(calendar.isLeapYear(2890)).toBe(true);

        expect(calendar.isLeapYear(2108)).toBe(false);

        expect(calendar.isLeapYear(4920)).toBe(false);

        expect(calendar.isLeapYear(4878)).toBe(true);

        expect(calendar.isLeapYear(3827)).toBe(false);

        expect(calendar.isLeapYear(4385)).toBe(true);

        expect(calendar.isLeapYear(2914)).toBe(false);

        expect(calendar.isLeapYear(1930)).toBe(true);

        expect(calendar.isLeapYear(2185)).toBe(false);

        expect(calendar.isLeapYear(4411)).toBe(false);

        expect(calendar.isLeapYear(1595)).toBe(true);

        expect(calendar.isLeapYear(2276)).toBe(true);

        expect(calendar.isLeapYear(3339)).toBe(false);

        expect(calendar.isLeapYear(2265)).toBe(false);

        expect(calendar.isLeapYear(3089)).toBe(true);

        expect(calendar.isLeapYear(2369)).toBe(true);

        expect(calendar.isLeapYear(2041)).toBe(false);

        expect(calendar.isLeapYear(4223)).toBe(false);

        expect(calendar.isLeapYear(2358)).toBe(true);

        expect(calendar.isLeapYear(3835)).toBe(false);

        expect(calendar.isLeapYear(4166)).toBe(true);

        expect(calendar.isLeapYear(3737)).toBe(false);

        expect(calendar.isLeapYear(2807)).toBe(false);

        expect(calendar.isLeapYear(2601)).toBe(true);

        expect(calendar.isLeapYear(1463)).toBe(false);

        expect(calendar.isLeapYear(4120)).toBe(true);

        expect(calendar.isLeapYear(1872)).toBe(false);

        expect(calendar.isLeapYear(1246)).toBe(true);

        expect(calendar.isLeapYear(2504)).toBe(false);

        expect(calendar.isLeapYear(732)).toBe(false);

        expect(calendar.isLeapYear(733)).toBe(true);

        expect(calendar.isLeapYear(3629)).toBe(true);

        expect(calendar.isLeapYear(1778)).toBe(false);

        expect(calendar.isLeapYear(4649)).toBe(true);

        expect(calendar.isLeapYear(2470)).toBe(true);

        expect(calendar.isLeapYear(3051)).toBe(true);

        expect(calendar.isLeapYear(4303)).toBe(true);

        expect(calendar.isLeapYear(2376)).toBe(false);

        expect(calendar.isLeapYear(4466)).toBe(true);

        expect(calendar.isLeapYear(4519)).toBe(false);

        expect(calendar.isLeapYear(4598)).toBe(false);

        expect(calendar.isLeapYear(3711)).toBe(true);

        expect(calendar.isLeapYear(1742)).toBe(true);

        expect(calendar.isLeapYear(1894)).toBe(false);

        expect(calendar.isLeapYear(3342)).toBe(false);

        expect(calendar.isLeapYear(4788)).toBe(true);

        expect(calendar.isLeapYear(2576)).toBe(true);

        expect(calendar.isLeapYear(1467)).toBe(false);

        expect(calendar.isLeapYear(3113)).toBe(false);

        expect(calendar.isLeapYear(4083)).toBe(false);

        expect(calendar.isLeapYear(4984)).toBe(false);

        expect(calendar.isLeapYear(1500)).toBe(false);

        expect(calendar.isLeapYear(1004)).toBe(false);

        expect(calendar.isLeapYear(3058)).toBe(false);

        expect(calendar.isLeapYear(3422)).toBe(true);

        expect(calendar.isLeapYear(1456)).toBe(true);

        expect(calendar.isLeapYear(3228)).toBe(true);

        expect(calendar.isLeapYear(1707)).toBe(false);

        expect(calendar.isLeapYear(3682)).toBe(false);

    });

});