import { PersianCalendar } from '../src/calendars/persianCalendar';
import { DateTime } from '../src/dateTime';
import { DayOfWeek } from '../src/dayOfWeek';

describe('Persian calendar tests', () => {
    it('should add months correctly', () => {
        let calendar = new PersianCalendar();
        let persianCalendar = new PersianCalendar();

        let dateTime = new DateTime(4831, 5, 14, 22, 26, 9, 467, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -8405);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4752-03-04 22:26:09:0467');


        dateTime = new DateTime(4487, 9, 22, 22, 38, 31, 694, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 8695);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5833-07-12 22:38:31:0694');


        dateTime = new DateTime(732, 2, 23, 3, 20, 17, 691, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -4842);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0949-11-14 03:20:17:0691');


        dateTime = new DateTime(2195, 3, 20, 17, 38, 3, 146, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 2849);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3053-11-11 17:38:03:0146');


        dateTime = new DateTime(2470, 8, 4, 20, 18, 16, 436, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -7486);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2467-12-25 20:18:16:0436');


        dateTime = new DateTime(4621, 3, 24, 7, 9, 2, 477, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -2641);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5022-05-14 07:09:02:0477');


        dateTime = new DateTime(1097, 6, 28, 20, 4, 46, 179, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 9683);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2525-08-19 20:04:46:0179');


        dateTime = new DateTime(2937, 5, 3, 5, 14, 21, 468, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -6091);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3050-12-24 05:14:21:0468');


        dateTime = new DateTime(3929, 6, 19, 13, 54, 30, 982, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -4845);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4146-12-10 13:54:30:0982');


        dateTime = new DateTime(2539, 10, 25, 12, 4, 45, 928, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -2158);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2981-03-15 12:04:45:0928');


        dateTime = new DateTime(1796, 8, 28, 3, 6, 18, 974, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 1237);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2520-12-18 03:06:18:0974');


        dateTime = new DateTime(1551, 11, 7, 4, 29, 17, 373, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -9618);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1371-07-29 04:29:17:0373');


        dateTime = new DateTime(3622, 8, 2, 13, 56, 26, 442, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 8281);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4933-11-22 13:56:26:0442');


        dateTime = new DateTime(2006, 2, 4, 16, 34, 54, 557, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -6437);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2090-11-24 16:34:54:0557');


        dateTime = new DateTime(2767, 9, 24, 5, 1, 41, 249, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 3508);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3681-04-12 05:01:41:0249');


        dateTime = new DateTime(3427, 4, 17, 9, 57, 3, 457, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 961);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4128-08-07 09:57:03:0457');


        dateTime = new DateTime(2541, 10, 12, 9, 36, 22, 409, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -7195);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2563-06-02 09:36:22:0409');


        dateTime = new DateTime(661, 6, 22, 17, 54, 42, 619, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -1636);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1146-05-12 17:54:42:0619');


        dateTime = new DateTime(2462, 6, 6, 20, 39, 44, 583, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 1849);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3237-09-27 20:39:44:0583');


        dateTime = new DateTime(3302, 6, 15, 1, 28, 58, 20, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 7587);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4555-12-06 01:28:58:0020');


        dateTime = new DateTime(2822, 10, 3, 10, 0, 7, 365, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 2451);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3648-03-22 10:00:07:0365');


        dateTime = new DateTime(1451, 8, 18, 4, 1, 40, 188, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -4311);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1713-08-09 04:01:40:0188');


        dateTime = new DateTime(4963, 11, 12, 10, 37, 40, 66, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -8760);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4855-01-31 10:37:40:0066');


        dateTime = new DateTime(4017, 7, 2, 11, 42, 15, 325, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 9018);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5390-03-21 11:42:15:0325');


        dateTime = new DateTime(3672, 3, 13, 15, 19, 26, 782, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 5921);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4786-11-04 15:19:26:0782');


        dateTime = new DateTime(3872, 4, 5, 7, 21, 22, 369, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -5225);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4058-01-24 07:21:22:0369');


        dateTime = new DateTime(4788, 5, 14, 19, 25, 40, 565, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -8455);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4705-01-04 19:25:40:0565');


        dateTime = new DateTime(4251, 1, 3, 4, 18, 56, 637, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 8240);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5558-11-24 04:18:56:0637');


        dateTime = new DateTime(1369, 5, 14, 2, 40, 43, 652, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 326);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2017-10-06 02:40:43:0652');


        dateTime = new DateTime(3621, 4, 14, 19, 27, 28, 234, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -7005);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3658-10-05 19:27:28:0234');


        dateTime = new DateTime(3057, 11, 16, 3, 38, 16, 40, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 8793);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4411-11-07 03:38:16:0040');


        dateTime = new DateTime(1461, 6, 5, 22, 22, 37, 138, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 6786);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2648-02-24 22:22:37:0138');


        dateTime = new DateTime(1155, 6, 4, 2, 58, 56, 348, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -5133);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1348-11-24 02:58:56:0348');


        dateTime = new DateTime(3685, 5, 24, 21, 11, 17, 963, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -5756);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3826-12-15 21:11:17:0963');


        dateTime = new DateTime(2560, 9, 23, 19, 3, 46, 118, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 7236);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3784-12-13 19:03:46:0118');


        dateTime = new DateTime(3586, 8, 27, 12, 25, 35, 519, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -4798);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3808-01-17 12:25:35:0519');


        dateTime = new DateTime(3238, 7, 26, 4, 49, 1, 945, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -2723);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3632-11-16 04:49:01:0945');


        dateTime = new DateTime(1543, 8, 6, 13, 2, 33, 867, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -2105);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1989-05-27 13:02:33:0867');


        dateTime = new DateTime(2152, 10, 25, 9, 19, 50, 367, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 4034);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3110-03-16 09:19:50:0367');


        dateTime = new DateTime(3626, 7, 3, 22, 30, 45, 371, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -4889);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3840-04-22 22:30:45:0371');


        dateTime = new DateTime(4186, 7, 23, 10, 27, 36, 308, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -4625);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4422-05-12 10:27:36:0308');


        dateTime = new DateTime(4410, 9, 13, 7, 57, 6, 312, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -3906);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4706-06-03 07:57:06:0312');


        dateTime = new DateTime(1499, 1, 21, 20, 45, 38, 474, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -9992);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1287-08-12 20:45:38:0474');


        dateTime = new DateTime(2162, 1, 22, 20, 20, 9, 32, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -8594);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2067-02-10 20:20:09:0032');


        dateTime = new DateTime(1607, 6, 19, 20, 2, 6, 168, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 7623);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2863-12-10 20:02:06:0168');


        dateTime = new DateTime(4929, 5, 17, 17, 3, 15, 387, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 8534);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6261-10-08 17:03:15:0387');


        dateTime = new DateTime(3695, 8, 9, 5, 8, 31, 931, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -3502);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4024-12-29 05:08:31:0931');


        dateTime = new DateTime(4101, 5, 19, 6, 19, 46, 693, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 9070);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5478-06-08 06:19:46:0693');


        dateTime = new DateTime(1307, 4, 20, 16, 4, 5, 407, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -5606);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1461-05-10 16:04:05:0407');


        dateTime = new DateTime(4722, 3, 9, 3, 46, 20, 112, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -3114);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5083-11-30 03:46:20:0112');


        dateTime = new DateTime(1658, 8, 25, 19, 46, 23, 281, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -1127);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2185-12-15 19:46:23:0281');


        dateTime = new DateTime(2109, 9, 9, 4, 10, 27, 989, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -8014);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2063-01-28 04:10:27:0989');


        dateTime = new DateTime(3332, 3, 10, 6, 46, 45, 768, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -5088);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3529-05-31 06:46:45:0768');


        dateTime = new DateTime(3568, 1, 9, 1, 14, 52, 626, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 6442);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4726-01-29 01:14:52:0626');


        dateTime = new DateTime(2999, 9, 8, 11, 40, 29, 487, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 6784);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4186-03-27 11:40:29:0487');


        dateTime = new DateTime(1299, 7, 12, 4, 8, 34, 320, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -3560);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1624-02-01 04:08:34:0320');


        dateTime = new DateTime(1768, 11, 19, 22, 44, 45, 390, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 6096);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2898-02-07 22:44:45:0390');


        dateTime = new DateTime(1058, 6, 13, 14, 37, 48, 948, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -2685);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1455-12-04 14:37:48:0948');


        dateTime = new DateTime(4172, 2, 2, 19, 29, 42, 745, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -2332);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4598-12-22 19:29:42:0745');


        dateTime = new DateTime(3202, 9, 6, 7, 55, 14, 480, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -3687);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3516-08-28 07:55:14:0480');


        dateTime = new DateTime(1363, 9, 19, 19, 40, 26, 634, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 6035);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2487-11-09 19:40:26:0634');


        dateTime = new DateTime(3238, 5, 16, 7, 43, 58, 623, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -4323);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3499-05-06 07:43:58:0623');


        dateTime = new DateTime(3861, 1, 9, 4, 28, 50, 24, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -8266);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3793-05-29 04:28:50:0024');


        dateTime = new DateTime(3907, 1, 21, 14, 25, 16, 965, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -9130);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3767-06-11 14:25:16:0965');


        dateTime = new DateTime(764, 1, 13, 2, 41, 29, 314, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -5501);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0926-11-04 02:41:29:0314');


        dateTime = new DateTime(634, 5, 14, 7, 45, 56, 225, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -1266);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1150-02-03 07:45:56:0225');


        dateTime = new DateTime(1595, 3, 22, 2, 9, 58, 563, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -551);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2170-07-13 02:09:58:0563');


        dateTime = new DateTime(3653, 11, 7, 2, 39, 44, 75, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 1819);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4426-08-28 02:39:44:0075');


        dateTime = new DateTime(3066, 11, 23, 6, 31, 5, 835, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 2795);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3921-01-13 06:31:05:0835');


        dateTime = new DateTime(2784, 10, 11, 9, 11, 7, 793, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -2898);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3164-07-02 09:11:07:0793');


        dateTime = new DateTime(3641, 7, 7, 18, 51, 0, 160, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -2259);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4074-06-27 18:51:00:0160');


        dateTime = new DateTime(2359, 8, 16, 12, 5, 10, 627, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 5410);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3431-09-07 12:05:10:0627');


        dateTime = new DateTime(3291, 10, 14, 22, 33, 56, 147, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -8386);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3214-03-04 22:33:56:0147');


        dateTime = new DateTime(2551, 10, 25, 7, 24, 56, 442, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 7414);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3790-11-15 07:24:56:0442');


        dateTime = new DateTime(2654, 2, 13, 6, 50, 24, 753, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 1397);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3391-10-05 06:50:24:0753');


        dateTime = new DateTime(1723, 4, 17, 15, 4, 40, 169, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 627);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2396-10-08 15:04:40:0169');


        dateTime = new DateTime(1868, 11, 22, 11, 31, 2, 824, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -1912);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2330-10-14 11:31:02:0824');


        dateTime = new DateTime(3936, 10, 27, 2, 28, 50, 710, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -5001);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4141-04-15 02:28:50:0710');


        dateTime = new DateTime(3842, 3, 26, 11, 47, 32, 497, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -2655);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4242-03-17 11:47:32:0497');


        dateTime = new DateTime(3047, 6, 16, 4, 37, 21, 902, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 9037);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4421-10-07 04:37:21:0902');


        dateTime = new DateTime(3269, 3, 28, 8, 27, 32, 665, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -9381);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3108-09-19 08:27:32:0665');


        dateTime = new DateTime(4125, 11, 22, 8, 3, 11, 259, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -2186);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4564-12-12 08:03:11:0259');


        dateTime = new DateTime(2623, 1, 19, 2, 55, 18, 701, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -1713);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3101-07-10 02:55:18:0701');


        dateTime = new DateTime(1552, 5, 21, 12, 40, 37, 532, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -7090);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1582-10-13 12:40:37:0532');


        dateTime = new DateTime(2749, 9, 18, 14, 56, 3, 429, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 2524);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3581-04-07 14:56:03:0429');


        dateTime = new DateTime(4276, 8, 14, 4, 50, 39, 900, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 992);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4980-07-04 04:50:39:0900');


        dateTime = new DateTime(4298, 10, 11, 19, 53, 36, 754, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -138);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4908-07-01 19:53:36:0754');


        dateTime = new DateTime(4064, 5, 28, 3, 33, 48, 392, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 9198);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5452-02-17 03:33:48:0392');


        dateTime = new DateTime(1820, 2, 8, 4, 3, 55, 874, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 9216);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3209-04-27 04:03:55:0874');


        dateTime = new DateTime(4467, 5, 22, 4, 2, 1, 925, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 8669);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5811-01-12 04:02:01:0925');


        dateTime = new DateTime(3148, 6, 26, 3, 42, 36, 893, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -4982);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3354-07-17 03:42:36:0893');


        dateTime = new DateTime(1711, 10, 16, 11, 10, 9, 953, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 8568);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3047-01-06 11:10:09:0953');


        dateTime = new DateTime(4901, 5, 6, 7, 38, 28, 857, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 2668);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5744-11-26 07:38:28:0857');


        dateTime = new DateTime(1624, 3, 1, 18, 13, 33, 570, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -9527);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1451-06-22 18:13:33:0570');


        dateTime = new DateTime(2368, 7, 14, 22, 28, 40, 27, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 75);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2996-01-04 22:28:40:0027');


        dateTime = new DateTime(1562, 4, 14, 18, 0, 9, 662, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 3639);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2486-10-05 18:00:09:0662');


        dateTime = new DateTime(1114, 9, 19, 4, 51, 19, 886, persianCalendar);
        dateTime = calendar.addMonths(dateTime, 836);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1805-08-10 04:51:19:0886');


        dateTime = new DateTime(4631, 4, 13, 22, 4, 30, 275, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -516);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5209-07-03 22:04:30:0275');


        dateTime = new DateTime(3204, 11, 25, 9, 36, 23, 154, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -124);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3815-10-17 09:36:23:0154');


        dateTime = new DateTime(2286, 4, 22, 19, 35, 39, 189, persianCalendar);
        dateTime = calendar.addMonths(dateTime, -9786);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2092-01-12 19:35:39:0189');


    });

    it('should add years correctly', () => {
        let calendar = new PersianCalendar();
        let persianCalendar = new PersianCalendar();

        let dateTime = new DateTime(3040, 7, 4, 19, 51, 39, 786, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4330);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7991-09-25 19:51:39:0786');

        dateTime = new DateTime(746, 2, 26, 2, 51, 13, 435, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5779);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7146-05-15 02:51:13:0435');

        dateTime = new DateTime(3400, 9, 18, 17, 49, 13, 536, persianCalendar);
        dateTime = calendar.addYears(dateTime, -987);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3034-12-09 17:49:13:0536');

        dateTime = new DateTime(4477, 4, 3, 13, 48, 40, 618, persianCalendar);
        dateTime = calendar.addYears(dateTime, -4387);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0711-06-25 13:48:40:0618');

        dateTime = new DateTime(1417, 4, 2, 16, 20, 39, 497, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5354);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7392-06-21 16:20:39:0497');

        dateTime = new DateTime(3136, 4, 5, 5, 32, 46, 594, persianCalendar);
        dateTime = calendar.addYears(dateTime, 1968);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5725-06-25 05:32:46:0594');

        dateTime = new DateTime(1046, 10, 7, 18, 49, 2, 234, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5220);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6887-12-26 18:49:02:0234');

        dateTime = new DateTime(4760, 3, 6, 16, 18, 35, 590, persianCalendar);
        dateTime = calendar.addYears(dateTime, -3438);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1943-05-28 16:18:35:0590');

        dateTime = new DateTime(1389, 2, 27, 22, 10, 43, 556, persianCalendar);
        dateTime = calendar.addYears(dateTime, 6843);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8853-05-14 22:10:43:0556');

        dateTime = new DateTime(3596, 10, 19, 6, 2, 14, 386, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4187);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8405-01-06 06:02:14:0386');

        dateTime = new DateTime(2055, 8, 14, 15, 49, 31, 443, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3517);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6193-11-03 15:49:31:0443');

        dateTime = new DateTime(2938, 2, 24, 8, 19, 35, 859, persianCalendar);
        dateTime = calendar.addYears(dateTime, 62);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3621-05-13 08:19:35:0859');

        dateTime = new DateTime(4700, 3, 21, 21, 54, 53, 821, persianCalendar);
        dateTime = calendar.addYears(dateTime, -1903);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3418-06-11 21:54:53:0821');

        dateTime = new DateTime(3647, 2, 21, 12, 19, 7, 422, persianCalendar);
        dateTime = calendar.addYears(dateTime, -2092);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2176-05-10 12:19:07:0422');

        dateTime = new DateTime(1996, 8, 20, 8, 21, 18, 544, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3133);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5750-11-10 08:21:18:0544');

        dateTime = new DateTime(3029, 10, 4, 11, 26, 1, 439, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4453);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8103-12-24 11:26:01:0439');

        dateTime = new DateTime(4481, 5, 27, 10, 21, 15, 254, persianCalendar);
        dateTime = calendar.addYears(dateTime, 2497);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7599-08-17 10:21:15:0254');

        dateTime = new DateTime(1158, 7, 22, 18, 14, 50, 746, persianCalendar);
        dateTime = calendar.addYears(dateTime, 1200);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2979-10-14 18:14:50:0746');

        dateTime = new DateTime(4931, 9, 6, 16, 7, 49, 478, persianCalendar);
        dateTime = calendar.addYears(dateTime, -4702);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0850-11-27 16:07:49:0478');

        dateTime = new DateTime(1392, 11, 13, 18, 28, 40, 581, persianCalendar);
        dateTime = calendar.addYears(dateTime, 2148);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4162-02-01 18:28:40:0581');

        dateTime = new DateTime(1450, 10, 27, 10, 56, 56, 17, persianCalendar);
        dateTime = calendar.addYears(dateTime, 7292);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9364-01-14 10:56:56:0017');

        dateTime = new DateTime(2349, 10, 27, 2, 45, 1, 39, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4712);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7683-01-15 02:45:01:0039');

        dateTime = new DateTime(1146, 10, 11, 14, 26, 51, 942, persianCalendar);
        dateTime = calendar.addYears(dateTime, -302);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1466-01-01 14:26:51:0942');

        dateTime = new DateTime(2824, 3, 23, 10, 9, 1, 451, persianCalendar);
        dateTime = calendar.addYears(dateTime, -2299);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1146-06-13 10:09:01:0451');

        dateTime = new DateTime(4071, 2, 11, 8, 32, 3, 34, persianCalendar);
        dateTime = calendar.addYears(dateTime, -1156);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3536-05-01 08:32:03:0034');

        dateTime = new DateTime(3692, 3, 3, 13, 23, 32, 906, persianCalendar);
        dateTime = calendar.addYears(dateTime, -383);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3930-05-24 13:23:32:0906');

        dateTime = new DateTime(4444, 4, 3, 9, 29, 8, 746, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3993);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9058-06-21 09:29:08:0746');

        dateTime = new DateTime(1329, 7, 8, 11, 8, 34, 32, persianCalendar);
        dateTime = calendar.addYears(dateTime, 7092);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9042-09-28 11:08:34:0032');

        dateTime = new DateTime(4773, 1, 11, 14, 48, 39, 123, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4112);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9506-03-29 14:48:39:0123');

        dateTime = new DateTime(2179, 8, 22, 2, 16, 53, 944, persianCalendar);
        dateTime = calendar.addYears(dateTime, 1609);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4409-11-12 02:16:53:0944');

        dateTime = new DateTime(640, 2, 11, 11, 37, 32, 791, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5043);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6304-04-30 11:37:32:0791');

        dateTime = new DateTime(1449, 4, 16, 17, 41, 51, 347, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3760);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5830-07-07 17:41:51:0347');

        dateTime = new DateTime(4417, 7, 18, 14, 17, 29, 791, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3015);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8053-10-08 14:17:29:0791');

        dateTime = new DateTime(747, 4, 2, 6, 4, 10, 786, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5327);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6695-06-22 06:04:10:0786');

        dateTime = new DateTime(4231, 4, 11, 21, 10, 27, 912, persianCalendar);
        dateTime = calendar.addYears(dateTime, 1613);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6465-06-30 21:10:27:0912');

        dateTime = new DateTime(977, 4, 6, 10, 21, 0, 33, persianCalendar);
        dateTime = calendar.addYears(dateTime, 749);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2347-06-28 10:21:00:0033');

        dateTime = new DateTime(2636, 3, 20, 8, 30, 14, 477, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5076);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8333-06-08 08:30:14:0477');

        dateTime = new DateTime(4369, 10, 6, 13, 2, 50, 681, persianCalendar);
        dateTime = calendar.addYears(dateTime, 1042);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6032-12-25 13:02:50:0681');

        dateTime = new DateTime(887, 5, 23, 7, 48, 34, 414, persianCalendar);
        dateTime = calendar.addYears(dateTime, 232);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1740-08-13 07:48:34:0414');

        dateTime = new DateTime(2011, 2, 25, 22, 55, 1, 239, persianCalendar);
        dateTime = calendar.addYears(dateTime, 1997);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4629-05-15 22:55:01:0239');

        dateTime = new DateTime(1432, 11, 11, 3, 18, 13, 140, persianCalendar);
        dateTime = calendar.addYears(dateTime, 6008);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8062-01-29 03:18:13:0140');

        dateTime = new DateTime(4683, 1, 17, 10, 49, 55, 380, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3222);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8526-04-04 10:49:55:0380');

        dateTime = new DateTime(3849, 8, 13, 15, 39, 12, 917, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4187);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8657-11-02 15:39:12:0917');

        dateTime = new DateTime(3906, 9, 2, 6, 28, 56, 317, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5213);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9740-11-19 06:28:56:0317');

        dateTime = new DateTime(896, 2, 1, 2, 40, 50, 246, persianCalendar);
        dateTime = calendar.addYears(dateTime, -37);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1480-04-20 02:40:50:0246');

        dateTime = new DateTime(1112, 8, 10, 8, 6, 21, 503, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4121);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5854-10-31 08:06:21:0503');

        dateTime = new DateTime(1075, 9, 27, 3, 20, 54, 143, persianCalendar);
        dateTime = calendar.addYears(dateTime, 6742);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8438-12-16 03:20:54:0143');

        dateTime = new DateTime(4708, 8, 7, 15, 19, 40, 826, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4403);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9732-10-25 15:19:40:0826');

        dateTime = new DateTime(2341, 4, 28, 3, 36, 14, 752, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5867);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8829-07-16 03:36:14:0752');

        dateTime = new DateTime(3453, 10, 17, 19, 0, 43, 173, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5539);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9614-01-04 19:00:43:0173');

        dateTime = new DateTime(948, 10, 4, 9, 3, 24, 316, persianCalendar);
        dateTime = calendar.addYears(dateTime, 7676);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9245-12-22 09:03:24:0316');

        dateTime = new DateTime(1397, 6, 1, 22, 43, 6, 851, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5714);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7732-08-21 22:43:06:0851');

        dateTime = new DateTime(1390, 10, 22, 19, 51, 1, 695, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4049);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6061-01-10 19:51:01:0695');

        dateTime = new DateTime(3012, 9, 11, 15, 41, 51, 908, persianCalendar);
        dateTime = calendar.addYears(dateTime, -868);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2765-12-02 15:41:51:0908');

        dateTime = new DateTime(1433, 4, 6, 2, 55, 40, 979, persianCalendar);
        dateTime = calendar.addYears(dateTime, -1176);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0878-06-27 02:55:40:0979');

        dateTime = new DateTime(4042, 6, 10, 12, 36, 12, 751, persianCalendar);
        dateTime = calendar.addYears(dateTime, -330);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4333-09-01 12:36:12:0751');

        dateTime = new DateTime(4547, 2, 6, 20, 39, 40, 964, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3708);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8876-04-22 20:39:40:0964');

        dateTime = new DateTime(3815, 10, 24, 11, 1, 39, 588, persianCalendar);
        dateTime = calendar.addYears(dateTime, -1432);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3005-01-14 11:01:39:0588');

        dateTime = new DateTime(1727, 2, 22, 20, 1, 17, 247, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4986);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7334-05-11 20:01:17:0247');

        dateTime = new DateTime(2464, 7, 12, 16, 50, 17, 870, persianCalendar);
        dateTime = calendar.addYears(dateTime, -491);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2594-10-03 16:50:17:0870');

        dateTime = new DateTime(2214, 3, 3, 4, 27, 48, 881, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4238);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7073-05-22 04:27:48:0881');

        dateTime = new DateTime(4340, 11, 27, 5, 55, 5, 257, persianCalendar);
        dateTime = calendar.addYears(dateTime, -1861);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3101-02-16 05:55:05:0257');

        dateTime = new DateTime(2621, 5, 12, 5, 2, 18, 969, persianCalendar);
        dateTime = calendar.addYears(dateTime, 6463);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9705-07-31 05:02:18:0969');

        dateTime = new DateTime(2554, 8, 26, 10, 45, 31, 48, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3062);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6237-11-16 10:45:31:0048');

        dateTime = new DateTime(4449, 1, 12, 9, 31, 38, 890, persianCalendar);
        dateTime = calendar.addYears(dateTime, 861);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5931-04-01 09:31:38:0890');

        dateTime = new DateTime(4176, 10, 27, 20, 29, 13, 88, persianCalendar);
        dateTime = calendar.addYears(dateTime, -4015);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('0783-01-17 20:29:13:0088');

        dateTime = new DateTime(2721, 1, 2, 22, 1, 24, 758, persianCalendar);
        dateTime = calendar.addYears(dateTime, -719);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2623-03-22 22:01:24:0758');

        dateTime = new DateTime(2186, 10, 19, 12, 33, 9, 323, persianCalendar);
        dateTime = calendar.addYears(dateTime, 7143);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9951-01-06 12:33:09:0323');

        dateTime = new DateTime(3908, 6, 21, 20, 12, 47, 58, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3769);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8298-09-10 20:12:47:0058');

        dateTime = new DateTime(2905, 1, 28, 5, 13, 19, 679, persianCalendar);
        dateTime = calendar.addYears(dateTime, 2714);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6240-04-16 05:13:19:0679');

        dateTime = new DateTime(3181, 5, 25, 3, 3, 57, 104, persianCalendar);
        dateTime = calendar.addYears(dateTime, -1080);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2722-08-16 03:03:57:0104');

        dateTime = new DateTime(890, 9, 13, 16, 6, 27, 859, persianCalendar);
        dateTime = calendar.addYears(dateTime, 2899);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4410-12-04 16:06:27:0859');

        dateTime = new DateTime(4359, 1, 2, 1, 24, 6, 644, persianCalendar);
        dateTime = calendar.addYears(dateTime, -1529);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3451-03-22 01:24:06:0644');

        dateTime = new DateTime(3391, 3, 22, 2, 40, 15, 944, persianCalendar);
        dateTime = calendar.addYears(dateTime, -956);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3056-06-11 02:40:15:0944');

        dateTime = new DateTime(1378, 8, 8, 8, 35, 44, 935, persianCalendar);
        dateTime = calendar.addYears(dateTime, 695);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2694-10-30 08:35:44:0935');

        dateTime = new DateTime(3014, 2, 9, 3, 0, 29, 896, persianCalendar);
        dateTime = calendar.addYears(dateTime, -594);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3041-04-29 03:00:29:0896');

        dateTime = new DateTime(4304, 2, 11, 12, 4, 53, 112, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4768);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9693-04-27 12:04:53:0112');

        dateTime = new DateTime(3686, 3, 5, 19, 49, 8, 569, persianCalendar);
        dateTime = calendar.addYears(dateTime, 933);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5240-05-25 19:49:08:0569');

        dateTime = new DateTime(1884, 10, 4, 10, 39, 8, 695, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5526);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8031-12-23 10:39:08:0695');

        dateTime = new DateTime(4697, 4, 5, 11, 27, 22, 36, persianCalendar);
        dateTime = calendar.addYears(dateTime, 1059);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6377-06-25 11:27:22:0036');

        dateTime = new DateTime(4011, 10, 4, 11, 39, 25, 802, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4803);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9435-12-23 11:39:25:0802');

        dateTime = new DateTime(4711, 6, 4, 15, 19, 21, 874, persianCalendar);
        dateTime = calendar.addYears(dateTime, 767);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6099-08-25 15:19:21:0874');

        dateTime = new DateTime(2979, 4, 28, 22, 27, 53, 702, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5998);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9598-07-16 22:27:53:0702');

        dateTime = new DateTime(3681, 2, 22, 1, 15, 29, 377, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3120);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('7422-05-11 01:15:29:0377');

        dateTime = new DateTime(3230, 2, 10, 2, 14, 57, 612, persianCalendar);
        dateTime = calendar.addYears(dateTime, 2840);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6691-04-29 02:14:57:0612');

        dateTime = new DateTime(1046, 7, 11, 17, 36, 4, 764, persianCalendar);
        dateTime = calendar.addYears(dateTime, 5263);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6930-10-02 17:36:04:0764');

        dateTime = new DateTime(4902, 5, 18, 15, 29, 4, 385, persianCalendar);
        dateTime = calendar.addYears(dateTime, 176);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5699-08-08 15:29:04:0385');

        dateTime = new DateTime(4356, 11, 6, 3, 47, 16, 716, persianCalendar);
        dateTime = calendar.addYears(dateTime, -2256);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2722-01-26 03:47:16:0716');

        dateTime = new DateTime(1573, 4, 13, 6, 2, 32, 673, persianCalendar);
        dateTime = calendar.addYears(dateTime, 1530);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3724-07-03 06:02:32:0673');

        dateTime = new DateTime(1754, 4, 1, 11, 25, 5, 202, persianCalendar);
        dateTime = calendar.addYears(dateTime, 4272);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6647-06-21 11:25:05:0202');

        dateTime = new DateTime(3264, 4, 2, 11, 26, 28, 327, persianCalendar);
        dateTime = calendar.addYears(dateTime, 2507);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6392-06-22 11:26:28:0327');

        dateTime = new DateTime(3999, 4, 14, 20, 21, 13, 134, persianCalendar);
        dateTime = calendar.addYears(dateTime, 1196);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5816-07-04 20:21:13:0134');

        dateTime = new DateTime(2873, 3, 16, 5, 19, 13, 909, persianCalendar);
        dateTime = calendar.addYears(dateTime, -1085);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2409-06-06 05:19:13:0909');

        dateTime = new DateTime(4066, 9, 27, 21, 49, 41, 653, persianCalendar);
        dateTime = calendar.addYears(dateTime, 2259);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('6946-12-17 21:49:41:0653');

        dateTime = new DateTime(1810, 3, 4, 21, 42, 58, 396, persianCalendar);
        dateTime = calendar.addYears(dateTime, 7059);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9490-05-22 21:42:58:0396');

        dateTime = new DateTime(3183, 10, 7, 4, 16, 36, 924, persianCalendar);
        dateTime = calendar.addYears(dateTime, 6011);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('9815-12-25 04:16:36:0924');

        dateTime = new DateTime(1111, 8, 23, 13, 35, 24, 279, persianCalendar);
        dateTime = calendar.addYears(dateTime, 7120);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('8852-11-11 13:35:24:0279');

        dateTime = new DateTime(4678, 6, 28, 1, 15, 47, 152, persianCalendar);
        dateTime = calendar.addYears(dateTime, 331);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5630-09-18 01:15:47:0152');

        dateTime = new DateTime(3615, 8, 9, 21, 40, 56, 3, persianCalendar);
        dateTime = calendar.addYears(dateTime, -417);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3819-10-31 21:40:56:0003');

        dateTime = new DateTime(830, 10, 26, 19, 31, 57, 30, persianCalendar);
        dateTime = calendar.addYears(dateTime, 3964);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5416-01-16 19:31:57:0030');

    });

    it('should add days correctly', () => {
        let calendar = new PersianCalendar();
        let persianCalendar = new PersianCalendar();


        let dateTime = new DateTime(3695, 10, 3, 11, 16, 29, 572, persianCalendar);
        dateTime = calendar.addDays(dateTime, 2985);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4325-02-25 11:16:29:0572');

        dateTime = new DateTime(1600, 6, 24, 16, 46, 45, 169, persianCalendar);
        dateTime = calendar.addDays(dateTime, -3535);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2212-01-11 16:46:45:0169');

        dateTime = new DateTime(825, 1, 20, 8, 50, 40, 905, persianCalendar);
        dateTime = calendar.addDays(dateTime, 8880);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1470-08-01 08:50:40:0905');

        dateTime = new DateTime(2929, 1, 5, 1, 26, 55, 447, persianCalendar);
        dateTime = calendar.addDays(dateTime, 6180);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3567-02-24 01:26:55:0447');

        dateTime = new DateTime(4857, 5, 16, 20, 40, 17, 499, persianCalendar);
        dateTime = calendar.addDays(dateTime, 9994);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5505-12-17 20:40:17:0499');

        dateTime = new DateTime(3689, 9, 4, 5, 51, 15, 96, persianCalendar);
        dateTime = calendar.addDays(dateTime, 8887);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4335-03-26 05:51:15:0096');

        dateTime = new DateTime(1272, 4, 1, 10, 21, 23, 579, persianCalendar);
        dateTime = calendar.addDays(dateTime, -7734);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1872-04-19 10:21:23:0579');

        dateTime = new DateTime(4546, 7, 5, 5, 37, 40, 518, persianCalendar);
        dateTime = calendar.addDays(dateTime, 4714);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5180-08-23 05:37:40:0518');

        dateTime = new DateTime(4352, 8, 1, 18, 33, 43, 676, persianCalendar);
        dateTime = calendar.addDays(dateTime, -4531);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4961-05-27 18:33:43:0676');

        dateTime = new DateTime(3710, 5, 17, 3, 28, 50, 597, persianCalendar);
        dateTime = calendar.addDays(dateTime, 8334);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4354-06-02 03:28:50:0597');

        dateTime = new DateTime(1883, 8, 25, 19, 26, 39, 1, persianCalendar);
        dateTime = calendar.addDays(dateTime, 7678);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2525-11-24 19:26:39:0001');

        dateTime = new DateTime(2292, 10, 16, 10, 24, 26, 132, persianCalendar);
        dateTime = calendar.addDays(dateTime, -451);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2912-10-12 10:24:26:0132');

        dateTime = new DateTime(3775, 11, 26, 10, 38, 24, 972, persianCalendar);
        dateTime = calendar.addDays(dateTime, 9823);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4424-01-07 10:38:24:0972');

        dateTime = new DateTime(3944, 4, 25, 5, 56, 23, 807, persianCalendar);
        dateTime = calendar.addDays(dateTime, 5765);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4581-04-27 05:56:23:0807');

        dateTime = new DateTime(3578, 7, 19, 19, 31, 9, 354, persianCalendar);
        dateTime = calendar.addDays(dateTime, 4735);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4212-09-27 19:31:09:0354');

        dateTime = new DateTime(2295, 6, 19, 18, 48, 42, 914, persianCalendar);
        dateTime = calendar.addDays(dateTime, -4645);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2903-12-22 18:48:42:0914');

        dateTime = new DateTime(3709, 4, 28, 19, 30, 40, 685, persianCalendar);
        dateTime = calendar.addDays(dateTime, 5165);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4344-09-08 19:30:40:0685');

        dateTime = new DateTime(2942, 11, 3, 9, 17, 14, 920, persianCalendar);
        dateTime = calendar.addDays(dateTime, -1928);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3558-10-13 09:17:14:0920');

        dateTime = new DateTime(1021, 3, 19, 13, 30, 53, 492, persianCalendar);
        dateTime = calendar.addDays(dateTime, -865);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1640-01-26 13:30:53:0492');

        dateTime = new DateTime(3458, 2, 22, 12, 40, 17, 24, persianCalendar);
        dateTime = calendar.addDays(dateTime, -7743);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4058-02-27 12:40:17:0024');

        dateTime = new DateTime(944, 1, 10, 8, 45, 45, 31, persianCalendar);
        dateTime = calendar.addDays(dateTime, 1541);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1569-06-18 08:45:45:0031');

        dateTime = new DateTime(4655, 11, 21, 9, 24, 8, 667, persianCalendar);
        dateTime = calendar.addDays(dateTime, 2590);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5284-03-13 09:24:08:0667');

        dateTime = new DateTime(3598, 10, 11, 15, 16, 18, 744, persianCalendar);
        dateTime = calendar.addDays(dateTime, -6280);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4202-10-22 15:16:18:0744');

        dateTime = new DateTime(1532, 6, 23, 8, 20, 15, 771, persianCalendar);
        dateTime = calendar.addDays(dateTime, -3734);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2143-06-25 08:20:15:0771');

        dateTime = new DateTime(3339, 8, 22, 11, 45, 27, 965, persianCalendar);
        dateTime = calendar.addDays(dateTime, 1097);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3963-11-14 11:45:27:0965');

        dateTime = new DateTime(2244, 8, 19, 15, 55, 34, 826, persianCalendar);
        dateTime = calendar.addDays(dateTime, -6755);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2847-05-13 15:55:34:0826');

        dateTime = new DateTime(1579, 4, 7, 12, 34, 51, 59, persianCalendar);
        dateTime = calendar.addDays(dateTime, -5334);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2185-11-19 12:34:51:0059');

        dateTime = new DateTime(2011, 11, 2, 19, 44, 13, 687, persianCalendar);
        dateTime = calendar.addDays(dateTime, -1865);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2627-12-15 19:44:13:0687');

        dateTime = new DateTime(4306, 1, 22, 12, 38, 58, 325, persianCalendar);
        dateTime = calendar.addDays(dateTime, 112);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4927-08-01 12:38:58:0325');

        dateTime = new DateTime(3648, 9, 6, 14, 45, 9, 14, persianCalendar);
        dateTime = calendar.addDays(dateTime, 7280);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4289-11-01 14:45:09:0014');

        dateTime = new DateTime(815, 5, 26, 14, 24, 27, 213, persianCalendar);
        dateTime = calendar.addDays(dateTime, 1874);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1441-10-04 14:24:27:0213');

        dateTime = new DateTime(1514, 9, 2, 4, 28, 33, 624, persianCalendar);
        dateTime = calendar.addDays(dateTime, 4338);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2147-10-09 04:28:33:0624');

        dateTime = new DateTime(1496, 2, 24, 11, 22, 53, 851, persianCalendar);
        dateTime = calendar.addDays(dateTime, 4346);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2129-04-07 11:22:53:0851');

        dateTime = new DateTime(2579, 11, 3, 14, 43, 44, 502, persianCalendar);
        dateTime = calendar.addDays(dateTime, 2341);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3207-06-21 14:43:44:0502');

        dateTime = new DateTime(4460, 1, 13, 4, 31, 3, 898, persianCalendar);
        dateTime = calendar.addDays(dateTime, 7217);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5101-01-04 04:31:03:0898');

        dateTime = new DateTime(954, 8, 9, 7, 27, 31, 407, persianCalendar);
        dateTime = calendar.addDays(dateTime, 4715);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1588-09-27 07:27:31:0407');

        dateTime = new DateTime(2324, 11, 4, 20, 38, 42, 824, persianCalendar);
        dateTime = calendar.addDays(dateTime, -6299);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2928-10-25 20:38:42:0824');

        dateTime = new DateTime(4198, 1, 25, 12, 46, 4, 366, persianCalendar);
        dateTime = calendar.addDays(dateTime, 8917);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4843-09-12 12:46:04:0366');

        dateTime = new DateTime(4507, 10, 14, 16, 3, 0, 319, persianCalendar);
        dateTime = calendar.addDays(dateTime, -1730);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5124-04-10 16:03:00:0319');

        dateTime = new DateTime(4417, 2, 20, 16, 56, 10, 162, persianCalendar);
        dateTime = calendar.addDays(dateTime, -5053);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5024-07-09 16:56:10:0162');

        dateTime = new DateTime(1333, 7, 11, 6, 33, 19, 168, persianCalendar);
        dateTime = calendar.addDays(dateTime, -414);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1953-08-15 06:33:19:0168');

        dateTime = new DateTime(3307, 1, 27, 22, 47, 38, 748, persianCalendar);
        dateTime = calendar.addDays(dateTime, -2264);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3922-02-03 22:47:38:0748');

        dateTime = new DateTime(2346, 7, 12, 22, 47, 16, 725, persianCalendar);
        dateTime = calendar.addDays(dateTime, -1295);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2964-03-18 22:47:16:0725');

        dateTime = new DateTime(638, 1, 7, 6, 27, 38, 302, persianCalendar);
        dateTime = calendar.addDays(dateTime, -4660);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1246-06-23 06:27:38:0302');

        dateTime = new DateTime(2230, 3, 16, 7, 30, 10, 864, persianCalendar);
        dateTime = calendar.addDays(dateTime, 7164);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2871-01-16 07:30:10:0864');

        dateTime = new DateTime(1740, 2, 28, 17, 55, 35, 366, persianCalendar);
        dateTime = calendar.addDays(dateTime, 5758);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2377-02-21 17:55:35:0366');

        dateTime = new DateTime(943, 6, 20, 4, 0, 10, 223, persianCalendar);
        dateTime = calendar.addDays(dateTime, -2571);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1557-08-28 04:00:10:0223');

        dateTime = new DateTime(1284, 8, 21, 10, 54, 49, 241, persianCalendar);
        dateTime = calendar.addDays(dateTime, 2750);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1913-05-24 10:54:49:0241');

        dateTime = new DateTime(2009, 11, 22, 1, 1, 34, 711, persianCalendar);
        dateTime = calendar.addDays(dateTime, -6297);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2613-11-15 01:01:34:0711');

        dateTime = new DateTime(1521, 7, 10, 15, 43, 56, 925, persianCalendar);
        dateTime = calendar.addDays(dateTime, -5219);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2128-06-18 15:43:56:0925');

        dateTime = new DateTime(4428, 4, 17, 10, 15, 30, 575, persianCalendar);
        dateTime = calendar.addDays(dateTime, 1665);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5054-01-27 10:15:30:0575');

        dateTime = new DateTime(2751, 10, 26, 4, 41, 38, 611, persianCalendar);
        dateTime = calendar.addDays(dateTime, -3379);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3363-10-16 04:41:38:0611');

        dateTime = new DateTime(4641, 2, 28, 9, 45, 49, 470, persianCalendar);
        dateTime = calendar.addDays(dateTime, -1839);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5257-05-04 09:45:49:0470');

        dateTime = new DateTime(2622, 4, 19, 7, 57, 37, 496, persianCalendar);
        dateTime = calendar.addDays(dateTime, 2156);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3249-06-04 07:57:37:0496');

        dateTime = new DateTime(4310, 10, 22, 1, 2, 2, 511, persianCalendar);
        dateTime = calendar.addDays(dateTime, 3573);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4941-10-24 01:02:02:0511');

        dateTime = new DateTime(2594, 7, 19, 14, 51, 42, 317, persianCalendar);
        dateTime = calendar.addDays(dateTime, 654);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3217-07-26 14:51:42:0317');

        dateTime = new DateTime(954, 2, 2, 14, 8, 35, 222, persianCalendar);
        dateTime = calendar.addDays(dateTime, -8467);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1552-02-15 14:08:35:0222');

        dateTime = new DateTime(4433, 10, 27, 18, 14, 38, 855, persianCalendar);
        dateTime = calendar.addDays(dateTime, -1388);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5051-03-31 18:14:38:0855');

        dateTime = new DateTime(919, 5, 18, 20, 2, 57, 897, persianCalendar);
        dateTime = calendar.addDays(dateTime, 1979);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1546-01-09 20:02:57:0897');

        dateTime = new DateTime(3955, 10, 21, 16, 34, 46, 988, persianCalendar);
        dateTime = calendar.addDays(dateTime, 8909);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4601-06-03 16:34:46:0988');

        dateTime = new DateTime(2804, 8, 17, 5, 37, 24, 425, persianCalendar);
        dateTime = calendar.addDays(dateTime, -9726);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3399-03-23 05:37:24:0425');

        dateTime = new DateTime(2013, 9, 9, 20, 49, 8, 202, persianCalendar);
        dateTime = calendar.addDays(dateTime, 2444);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2641-08-09 20:49:08:0202');

        dateTime = new DateTime(3293, 4, 8, 18, 52, 6, 177, persianCalendar);
        dateTime = calendar.addDays(dateTime, -5414);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3899-09-01 18:52:06:0177');

        dateTime = new DateTime(2662, 6, 10, 21, 25, 56, 875, persianCalendar);
        dateTime = calendar.addDays(dateTime, -5819);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3267-09-25 21:25:56:0875');

        dateTime = new DateTime(2594, 8, 9, 5, 38, 11, 60, persianCalendar);
        dateTime = calendar.addDays(dateTime, 217);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3216-06-04 05:38:11:0060');

        dateTime = new DateTime(4397, 3, 10, 8, 30, 28, 783, persianCalendar);
        dateTime = calendar.addDays(dateTime, 8823);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5042-07-27 08:30:28:0783');

        dateTime = new DateTime(1306, 10, 17, 12, 13, 50, 109, persianCalendar);
        dateTime = calendar.addDays(dateTime, -2519);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1921-02-14 12:13:50:0109');

        dateTime = new DateTime(3878, 4, 23, 10, 51, 18, 180, persianCalendar);
        dateTime = calendar.addDays(dateTime, 6292);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4516-10-04 10:51:18:0180');

        dateTime = new DateTime(2084, 6, 6, 3, 56, 30, 244, persianCalendar);
        dateTime = calendar.addDays(dateTime, -1529);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2701-06-21 03:56:30:0244');

        dateTime = new DateTime(4751, 11, 6, 9, 54, 58, 827, persianCalendar);
        dateTime = calendar.addDays(dateTime, 8365);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5395-12-21 09:54:58:0827');

        dateTime = new DateTime(3327, 5, 18, 14, 7, 2, 796, persianCalendar);
        dateTime = calendar.addDays(dateTime, -9804);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3921-10-06 14:07:02:0796');

        dateTime = new DateTime(1664, 7, 24, 16, 56, 4, 817, persianCalendar);
        dateTime = calendar.addDays(dateTime, 5512);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2300-11-19 16:56:04:0817');

        dateTime = new DateTime(4628, 8, 23, 20, 43, 49, 167, persianCalendar);
        dateTime = calendar.addDays(dateTime, -8286);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5227-03-08 20:43:49:0167');

        dateTime = new DateTime(1741, 1, 13, 11, 34, 48, 575, persianCalendar);
        dateTime = calendar.addDays(dateTime, 4388);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2374-04-07 11:34:48:0575');

        dateTime = new DateTime(3346, 6, 5, 10, 39, 8, 759, persianCalendar);
        dateTime = calendar.addDays(dateTime, -5617);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3952-04-10 10:39:08:0759');

        dateTime = new DateTime(1167, 2, 15, 21, 28, 13, 350, persianCalendar);
        dateTime = calendar.addDays(dateTime, 2785);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1795-12-19 21:28:13:0350');

        dateTime = new DateTime(1670, 6, 17, 12, 58, 54, 776, persianCalendar);
        dateTime = calendar.addDays(dateTime, -661);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2289-11-16 12:58:54:0776');

        dateTime = new DateTime(3569, 10, 19, 11, 14, 29, 944, persianCalendar);
        dateTime = calendar.addDays(dateTime, 7875);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4212-08-01 11:14:29:0944');

        dateTime = new DateTime(2337, 7, 5, 11, 2, 28, 20, persianCalendar);
        dateTime = calendar.addDays(dateTime, -8171);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2936-05-14 11:02:28:0020');

        dateTime = new DateTime(908, 3, 5, 1, 25, 50, 672, persianCalendar);
        dateTime = calendar.addDays(dateTime, 9188);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1554-07-22 01:25:50:0672');

        dateTime = new DateTime(2838, 1, 23, 13, 53, 20, 687, persianCalendar);
        dateTime = calendar.addDays(dateTime, -8145);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3436-12-23 13:53:20:0687');

        dateTime = new DateTime(4636, 7, 19, 10, 34, 15, 345, persianCalendar);
        dateTime = calendar.addDays(dateTime, 7159);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5277-05-17 10:34:15:0345');

        dateTime = new DateTime(4190, 2, 4, 11, 19, 17, 901, persianCalendar);
        dateTime = calendar.addDays(dateTime, -8091);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4789-02-27 11:19:17:0901');

        dateTime = new DateTime(2469, 8, 16, 22, 34, 49, 511, persianCalendar);
        dateTime = calendar.addDays(dateTime, 4833);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3104-02-01 22:34:49:0511');

        dateTime = new DateTime(4484, 5, 9, 13, 51, 0, 844, persianCalendar);
        dateTime = calendar.addDays(dateTime, 6749);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5124-01-22 13:51:00:0844');

        dateTime = new DateTime(4060, 11, 25, 11, 54, 15, 477, persianCalendar);
        dateTime = calendar.addDays(dateTime, 8086);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4704-04-05 11:54:15:0477');

        dateTime = new DateTime(3614, 5, 13, 16, 56, 46, 90, persianCalendar);
        dateTime = calendar.addDays(dateTime, 334);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4236-07-03 16:56:46:0090');

        dateTime = new DateTime(1388, 5, 3, 5, 23, 41, 210, persianCalendar);
        dateTime = calendar.addDays(dateTime, -6107);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1992-11-04 05:23:41:0210');

        dateTime = new DateTime(1468, 11, 17, 7, 34, 40, 366, persianCalendar);
        dateTime = calendar.addDays(dateTime, 4581);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2102-08-23 07:34:40:0366');

        dateTime = new DateTime(2422, 4, 17, 22, 49, 51, 454, persianCalendar);
        dateTime = calendar.addDays(dateTime, -4363);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3031-07-28 22:49:51:0454');

        dateTime = new DateTime(4892, 5, 8, 10, 58, 33, 385, persianCalendar);
        dateTime = calendar.addDays(dateTime, 5832);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5529-07-18 10:58:33:0385');

        dateTime = new DateTime(1915, 2, 12, 2, 10, 16, 149, persianCalendar);
        dateTime = calendar.addDays(dateTime, -3851);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2525-10-15 02:10:16:0149');

        dateTime = new DateTime(982, 5, 18, 2, 18, 18, 335, persianCalendar);
        dateTime = calendar.addDays(dateTime, -1843);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1598-07-23 02:18:18:0335');

        dateTime = new DateTime(4198, 1, 17, 14, 32, 10, 238, persianCalendar);
        dateTime = calendar.addDays(dateTime, -1290);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4815-09-24 14:32:10:0238');

        dateTime = new DateTime(1860, 4, 24, 8, 0, 7, 405, persianCalendar);
        dateTime = calendar.addDays(dateTime, -4477);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2469-04-11 08:00:07:0405');

        dateTime = new DateTime(1649, 9, 20, 3, 11, 1, 323, persianCalendar);
        dateTime = calendar.addDays(dateTime, 5785);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2286-10-13 03:11:01:0323');

        dateTime = new DateTime(923, 7, 10, 20, 15, 11, 416, persianCalendar);
        dateTime = calendar.addDays(dateTime, -9871);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1517-09-23 20:15:11:0416');

        dateTime = new DateTime(4004, 2, 2, 3, 45, 57, 292, persianCalendar);
        dateTime = calendar.addDays(dateTime, -1914);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4620-01-25 03:45:57:0292');

        dateTime = new DateTime(1074, 9, 14, 4, 48, 6, 312, persianCalendar);
        dateTime = calendar.addDays(dateTime, 9385);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1721-08-16 04:48:06:0312');

        dateTime = new DateTime(2324, 9, 10, 3, 12, 4, 822, persianCalendar);
        dateTime = calendar.addDays(dateTime, -46);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2945-10-15 03:12:04:0822');

    });

    it('should add minutes correctly', () => {
        let calendar = new PersianCalendar();
        let persianCalendar = new PersianCalendar();


        let dateTime = new DateTime(1795, 1, 11, 22, 22, 52, 166, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -5033);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2416-03-27 10:29:52:0166');

        dateTime = new DateTime(969, 8, 20, 9, 40, 58, 457, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -2248);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1590-11-09 20:12:58:0457');

        dateTime = new DateTime(2436, 8, 17, 15, 7, 1, 361, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -3713);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3057-11-06 01:14:01:0361');

        dateTime = new DateTime(1513, 2, 13, 4, 17, 46, 503, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 5187);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2134-05-06 18:44:46:0503');

        dateTime = new DateTime(4659, 1, 6, 9, 25, 12, 796, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 6628);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5280-03-28 23:53:12:0796');

        dateTime = new DateTime(625, 1, 25, 17, 25, 24, 823, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -9278);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1246-04-08 06:47:24:0823');

        dateTime = new DateTime(4323, 8, 7, 9, 5, 55, 281, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 9039);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4944-11-03 15:44:55:0281');

        dateTime = new DateTime(2086, 9, 5, 19, 11, 50, 490, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 9980);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2707-12-04 17:31:50:0490');

        dateTime = new DateTime(4521, 8, 11, 22, 58, 41, 51, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 7519);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5142-11-08 04:17:41:0051');

        dateTime = new DateTime(3207, 9, 18, 19, 31, 5, 273, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 5244);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3828-12-13 10:55:05:0273');

        dateTime = new DateTime(3611, 2, 12, 6, 22, 1, 128, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -3733);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4232-04-28 16:09:01:0128');

        dateTime = new DateTime(2978, 2, 12, 1, 44, 11, 831, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -9358);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3599-04-25 13:46:11:0831');

        dateTime = new DateTime(704, 3, 5, 15, 27, 8, 809, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -6544);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1325-05-22 02:23:08:0809');

        dateTime = new DateTime(2061, 2, 26, 13, 53, 8, 579, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -6634);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2682-05-11 23:19:08:0579');

        dateTime = new DateTime(1602, 4, 13, 5, 26, 29, 162, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 3776);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2223-07-06 20:22:29:0162');

        dateTime = new DateTime(3798, 2, 7, 1, 33, 42, 157, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -3569);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4419-04-24 14:04:42:0157');

        dateTime = new DateTime(3962, 7, 2, 15, 42, 56, 896, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -5395);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4583-09-19 21:47:56:0896');

        dateTime = new DateTime(727, 3, 25, 14, 35, 3, 115, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 7405);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1348-06-19 18:00:03:0115');

        dateTime = new DateTime(1186, 3, 12, 6, 53, 18, 140, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -2115);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1807-06-01 19:38:18:0140');

        dateTime = new DateTime(1399, 8, 8, 11, 33, 23, 480, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -6446);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2020-10-25 00:07:23:0480');

        dateTime = new DateTime(3680, 1, 21, 22, 12, 0, 193, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -8380);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4301-04-05 02:32:00:0193');

        dateTime = new DateTime(2952, 4, 26, 18, 11, 4, 12, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -8725);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3573-07-11 16:46:04:0012');

        dateTime = new DateTime(2897, 6, 10, 20, 43, 40, 786, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -776);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3518-09-01 07:47:40:0786');

        dateTime = new DateTime(3474, 9, 15, 19, 30, 7, 445, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 4467);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4095-12-08 21:57:07:0445');

        dateTime = new DateTime(1493, 4, 8, 7, 40, 3, 393, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 2926);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2114-07-01 08:26:03:0393');

        dateTime = new DateTime(1440, 8, 25, 18, 6, 8, 782, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 3914);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2061-11-18 11:20:08:0782');

        dateTime = new DateTime(1013, 6, 20, 7, 55, 20, 437, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -5763);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1634-09-07 07:52:20:0437');

        dateTime = new DateTime(4637, 8, 14, 16, 29, 5, 156, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 1429);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5258-11-05 16:18:05:0156');

        dateTime = new DateTime(3255, 2, 5, 8, 13, 23, 29, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -963);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3876-04-23 16:10:23:0029');

        dateTime = new DateTime(4351, 3, 25, 16, 13, 51, 921, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 6120);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4972-06-18 22:13:51:0921');

        dateTime = new DateTime(3175, 7, 16, 10, 5, 14, 748, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 7763);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3796-10-12 19:28:14:0748');

        dateTime = new DateTime(740, 4, 6, 6, 0, 49, 219, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -6582);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1361-06-22 16:18:49:0219');

        dateTime = new DateTime(1653, 8, 28, 13, 26, 50, 733, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 8131);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2274-11-25 04:57:50:0733');

        dateTime = new DateTime(3969, 10, 18, 21, 33, 10, 734, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -3942);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4591-01-05 03:51:10:0734');

        dateTime = new DateTime(4056, 3, 11, 19, 13, 1, 210, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -2186);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4677-05-30 06:47:01:0210');

        dateTime = new DateTime(4978, 3, 10, 16, 40, 22, 112, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -1525);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5599-05-30 15:15:22:0112');

        dateTime = new DateTime(4420, 11, 22, 20, 23, 2, 997, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 5381);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5042-02-14 14:04:02:0997');

        dateTime = new DateTime(1961, 11, 9, 21, 34, 53, 123, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 9484);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2583-02-05 11:38:53:0123');

        dateTime = new DateTime(1698, 6, 24, 22, 56, 57, 725, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 9299);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2319-09-23 09:55:57:0725');

        dateTime = new DateTime(4455, 7, 18, 15, 22, 26, 555, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 2736);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5076-10-11 12:58:26:0555');

        dateTime = new DateTime(2410, 7, 27, 11, 9, 54, 43, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -6383);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3031-10-15 00:46:54:0043');

        dateTime = new DateTime(2498, 10, 1, 12, 48, 22, 453, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 838);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3119-12-24 02:46:22:0453');

        dateTime = new DateTime(4913, 10, 7, 16, 43, 58, 40, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 6115);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5535-01-01 22:38:58:0040');

        dateTime = new DateTime(1935, 6, 27, 16, 17, 27, 65, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 6538);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2556-09-22 05:15:27:0065');

        dateTime = new DateTime(2247, 10, 15, 4, 51, 1, 884, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 373);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2869-01-04 11:04:01:0884');

        dateTime = new DateTime(4098, 7, 9, 16, 47, 36, 574, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 4505);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4719-10-04 19:52:36:0574');

        dateTime = new DateTime(3952, 9, 10, 12, 56, 10, 309, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -8208);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4573-11-24 20:08:10:0309');

        dateTime = new DateTime(2428, 9, 23, 6, 48, 19, 867, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 6951);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3049-12-19 02:39:19:0867');

        dateTime = new DateTime(2872, 11, 22, 15, 44, 1, 386, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 2830);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3494-02-12 14:54:01:0386');

        dateTime = new DateTime(3116, 3, 3, 21, 22, 16, 911, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 5359);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3737-05-27 14:41:16:0911');

        dateTime = new DateTime(1133, 2, 19, 7, 38, 3, 670, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 1509);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1754-05-10 08:47:03:0670');

        dateTime = new DateTime(4010, 1, 28, 4, 46, 18, 564, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -877);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4631-04-16 14:09:18:0564');

        dateTime = new DateTime(4981, 3, 9, 11, 11, 35, 952, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 9108);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5602-06-04 18:59:35:0952');

        dateTime = new DateTime(2502, 7, 9, 3, 3, 9, 357, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 5165);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3123-10-05 17:08:09:0357');

        dateTime = new DateTime(3510, 10, 21, 11, 0, 25, 199, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 4255);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4132-01-14 09:55:25:0199');

        dateTime = new DateTime(1313, 6, 19, 13, 53, 16, 700, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 3781);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1934-09-13 04:54:16:0700');

        dateTime = new DateTime(3025, 1, 15, 17, 35, 11, 412, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -2780);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3646-04-01 19:15:11:0412');

        dateTime = new DateTime(1206, 6, 7, 19, 14, 53, 803, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -4975);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1827-08-27 08:19:53:0803');

        dateTime = new DateTime(4358, 4, 22, 9, 25, 1, 4, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -4071);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4979-07-09 13:34:01:0004');

        dateTime = new DateTime(769, 1, 3, 11, 46, 33, 557, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 435);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1390-03-23 19:01:33:0557');

        dateTime = new DateTime(4292, 6, 12, 10, 29, 56, 48, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 4467);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4913-09-05 12:56:56:0048');

        dateTime = new DateTime(4353, 5, 15, 16, 36, 30, 807, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -7148);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4974-07-31 17:28:30:0807');

        dateTime = new DateTime(1858, 9, 2, 21, 58, 16, 791, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -4962);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2479-11-20 11:16:16:0791');

        dateTime = new DateTime(3765, 1, 27, 6, 22, 14, 660, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 9953);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4386-04-23 04:15:14:0660');

        dateTime = new DateTime(4216, 11, 7, 9, 44, 48, 248, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 3974);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4838-01-29 03:58:48:0248');

        dateTime = new DateTime(1937, 8, 7, 16, 18, 22, 315, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -9537);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2558-10-23 01:21:22:0315');

        dateTime = new DateTime(3228, 2, 14, 3, 10, 45, 338, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 8390);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3849-05-09 23:00:45:0338');

        dateTime = new DateTime(2819, 8, 2, 1, 29, 2, 810, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 856);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3440-10-23 15:45:02:0810');

        dateTime = new DateTime(1503, 11, 27, 18, 1, 27, 262, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 6345);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2125-02-20 03:46:27:0262');

        dateTime = new DateTime(1388, 3, 20, 7, 56, 26, 376, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -8546);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2009-06-04 09:30:26:0376');

        dateTime = new DateTime(4141, 10, 1, 4, 49, 1, 815, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -8243);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4762-12-16 11:26:01:0815');

        dateTime = new DateTime(1603, 6, 17, 9, 37, 26, 697, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 192);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2224-09-08 12:49:26:0697');

        dateTime = new DateTime(3222, 7, 23, 9, 4, 22, 237, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -2130);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3843-10-13 21:34:22:0237');

        dateTime = new DateTime(3055, 10, 20, 14, 3, 45, 104, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 6759);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3677-01-14 06:42:45:0104');

        dateTime = new DateTime(3528, 6, 12, 14, 53, 47, 363, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 3102);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4149-09-04 18:35:47:0363');

        dateTime = new DateTime(2054, 1, 5, 18, 4, 5, 776, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -4375);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2675-03-22 17:09:05:0776');

        dateTime = new DateTime(874, 6, 13, 15, 40, 10, 734, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -9550);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1495-08-29 00:30:10:0734');

        dateTime = new DateTime(3746, 11, 4, 20, 30, 14, 58, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 4704);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4368-01-28 02:54:14:0058');

        dateTime = new DateTime(1043, 5, 10, 13, 52, 16, 983, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 5192);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1664-08-04 04:24:16:0983');

        dateTime = new DateTime(2463, 1, 8, 7, 28, 1, 691, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 8530);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3084-04-02 05:38:01:0691');

        dateTime = new DateTime(4234, 3, 8, 11, 48, 2, 317, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 8260);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4855-06-03 05:28:02:0317');

        dateTime = new DateTime(4861, 2, 21, 3, 5, 14, 630, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -8888);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5482-05-03 22:57:14:0630');

        dateTime = new DateTime(3100, 2, 25, 2, 36, 5, 905, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 6486);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3721-05-19 14:42:05:0905');

        dateTime = new DateTime(1446, 1, 15, 10, 57, 37, 729, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 8141);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2067-04-10 02:38:37:0729');

        dateTime = new DateTime(657, 6, 2, 15, 16, 21, 692, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 2862);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1278-08-25 14:58:21:0692');

        dateTime = new DateTime(4779, 6, 1, 8, 52, 56, 102, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -9211);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5400-08-15 23:21:56:0102');

        dateTime = new DateTime(1884, 10, 2, 4, 45, 0, 57, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 3319);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2505-12-25 12:04:00:0057');

        dateTime = new DateTime(2725, 4, 18, 6, 37, 17, 595, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 8080);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3346-07-14 21:17:17:0595');

        dateTime = new DateTime(2212, 5, 22, 21, 5, 35, 120, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -2902);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2833-08-10 20:43:35:0120');

        dateTime = new DateTime(3725, 5, 13, 19, 44, 51, 430, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -965);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4346-08-04 03:39:51:0430');

        dateTime = new DateTime(1547, 1, 21, 1, 21, 39, 209, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -5018);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2168-04-05 13:43:39:0209');

        dateTime = new DateTime(4755, 3, 2, 17, 0, 51, 739, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 7303);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5376-05-27 18:43:51:0739');

        dateTime = new DateTime(704, 7, 25, 10, 53, 45, 835, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 1842);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1325-10-18 17:35:45:0835');

        dateTime = new DateTime(1470, 2, 15, 9, 21, 33, 412, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 5611);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2091-05-09 06:52:33:0412');

        dateTime = new DateTime(4876, 10, 19, 8, 42, 19, 805, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -388);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5498-01-08 02:14:19:0805');

        dateTime = new DateTime(4565, 6, 17, 13, 24, 2, 21, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 9039);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5186-09-14 20:03:02:0021');

        dateTime = new DateTime(3623, 9, 9, 19, 49, 17, 156, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -2082);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4244-11-28 09:07:17:0156');

        dateTime = new DateTime(4725, 6, 23, 10, 24, 39, 976, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, 1505);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5346-09-14 11:29:39:0976');

        dateTime = new DateTime(742, 11, 26, 7, 57, 27, 973, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -2562);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1364-02-13 13:15:27:0973');

        dateTime = new DateTime(1632, 11, 26, 12, 54, 25, 413, persianCalendar);
        dateTime = calendar.addMinutes(dateTime, -95);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2254-02-15 11:19:25:0413');

    });

    it('should add seconds correcly', () => {
        let calendar = new PersianCalendar();
        let persianCalendar = new PersianCalendar();


        let dateTime = new DateTime(3370, 7, 3, 13, 36, 15, 773, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -9205);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3991-09-25 11:02:50:0773');

        dateTime = new DateTime(4367, 7, 28, 15, 43, 49, 229, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -2503);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4988-10-19 15:02:06:0229');

        dateTime = new DateTime(795, 1, 10, 14, 46, 54, 716, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 1827);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1416-03-30 15:17:21:0716');

        dateTime = new DateTime(3728, 8, 26, 4, 29, 20, 366, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -1958);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4349-11-17 03:56:42:0366');

        dateTime = new DateTime(1311, 8, 7, 18, 48, 57, 258, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -3847);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1932-10-29 17:44:50:0258');

        dateTime = new DateTime(1795, 11, 16, 6, 4, 25, 765, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 2252);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2417-02-04 06:41:57:0765');

        dateTime = new DateTime(2640, 5, 4, 9, 8, 7, 868, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 3434);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3261-07-25 10:05:21:0868');

        dateTime = new DateTime(4027, 7, 28, 8, 53, 39, 844, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 7350);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4648-10-19 10:56:09:0844');

        dateTime = new DateTime(2659, 1, 28, 10, 51, 46, 636, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -9747);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3280-04-16 08:09:19:0636');

        dateTime = new DateTime(4389, 4, 16, 22, 45, 53, 278, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 4742);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5010-07-08 00:04:55:0278');

        dateTime = new DateTime(3634, 7, 17, 15, 37, 46, 843, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 4884);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4255-10-09 16:59:10:0843');

        dateTime = new DateTime(3441, 8, 8, 3, 48, 24, 444, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 314);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4062-10-29 03:53:38:0444');

        dateTime = new DateTime(3237, 3, 24, 7, 35, 38, 546, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 7414);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3858-06-14 09:39:12:0546');

        dateTime = new DateTime(698, 3, 28, 14, 30, 5, 727, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 1422);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1319-06-18 14:53:47:0727');

        dateTime = new DateTime(3082, 7, 6, 14, 18, 43, 677, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 7586);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3703-09-28 16:25:09:0677');

        dateTime = new DateTime(842, 11, 13, 21, 12, 0, 505, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 222);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1464-02-02 21:15:42:0505');

        dateTime = new DateTime(1864, 10, 23, 1, 25, 48, 285, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -4975);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2486-01-12 00:02:53:0285');

        dateTime = new DateTime(1590, 2, 16, 11, 47, 30, 28, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -9686);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2211-05-07 09:06:04:0028');

        dateTime = new DateTime(837, 6, 26, 11, 12, 6, 168, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 3361);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1458-09-17 12:08:07:0168');

        dateTime = new DateTime(1385, 10, 16, 3, 42, 4, 621, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -5550);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2007-01-06 02:09:34:0621');

        dateTime = new DateTime(2676, 11, 15, 8, 27, 13, 572, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 3244);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3298-02-03 09:21:17:0572');

        dateTime = new DateTime(3798, 11, 10, 22, 43, 55, 684, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 645);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4420-01-30 22:54:40:0684');

        dateTime = new DateTime(2038, 11, 21, 17, 30, 39, 287, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 1812);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2660-02-10 18:00:51:0287');

        dateTime = new DateTime(4764, 10, 14, 3, 23, 1, 879, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -15);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5386-01-03 03:22:46:0879');

        dateTime = new DateTime(4027, 9, 23, 22, 58, 23, 71, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -7184);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4648-12-13 20:58:39:0071');

        dateTime = new DateTime(2089, 2, 10, 10, 29, 43, 385, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 4376);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2710-05-01 11:42:39:0385');

        dateTime = new DateTime(4700, 5, 4, 5, 33, 34, 720, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 6819);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5321-07-25 07:27:13:0720');

        dateTime = new DateTime(4650, 11, 9, 18, 22, 46, 350, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 9552);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5272-01-28 21:01:58:0350');

        dateTime = new DateTime(3623, 5, 7, 7, 18, 56, 340, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -562);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4244-07-28 07:09:34:0340');

        dateTime = new DateTime(3230, 5, 15, 5, 40, 3, 219, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -806);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3851-08-06 05:26:37:0219');

        dateTime = new DateTime(1264, 11, 3, 18, 10, 7, 136, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -9266);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1886-01-23 15:35:41:0136');

        dateTime = new DateTime(4741, 4, 19, 10, 51, 39, 669, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -1440);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5362-07-09 10:27:39:0669');

        dateTime = new DateTime(4388, 3, 27, 8, 51, 1, 333, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 4866);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5009-06-17 10:12:07:0333');

        dateTime = new DateTime(2029, 6, 18, 10, 9, 32, 408, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -6345);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2650-09-09 08:23:47:0408');

        dateTime = new DateTime(3883, 4, 7, 4, 5, 35, 17, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 5624);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4504-06-27 05:39:19:0017');

        dateTime = new DateTime(3160, 3, 21, 11, 1, 25, 730, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 3234);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3781-06-10 11:55:19:0730');

        dateTime = new DateTime(2467, 8, 6, 22, 4, 20, 641, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 6203);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3088-10-27 23:47:43:0641');

        dateTime = new DateTime(2478, 8, 9, 18, 53, 41, 696, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 1479);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3099-10-31 19:18:20:0696');

        dateTime = new DateTime(2896, 7, 7, 21, 2, 27, 189, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 5093);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3517-09-29 22:27:20:0189');

        dateTime = new DateTime(4980, 6, 10, 2, 42, 52, 686, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 687);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5601-08-31 02:54:19:0686');

        dateTime = new DateTime(4580, 2, 22, 22, 10, 14, 194, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -7334);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5201-05-11 20:08:00:0194');

        dateTime = new DateTime(3366, 5, 1, 19, 17, 12, 535, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -3600);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3987-07-23 18:17:12:0535');

        dateTime = new DateTime(3384, 8, 22, 20, 43, 11, 602, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 2102);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4005-11-12 21:18:13:0602');

        dateTime = new DateTime(4422, 6, 28, 22, 20, 38, 509, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 6327);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5043-09-20 00:06:05:0509');

        dateTime = new DateTime(746, 10, 22, 2, 2, 10, 364, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 7862);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1368-01-12 04:13:12:0364');

        dateTime = new DateTime(1992, 2, 2, 8, 35, 54, 608, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 4854);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2613-04-22 09:56:48:0608');

        dateTime = new DateTime(2154, 1, 15, 22, 55, 45, 217, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -7542);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2775-04-04 20:50:03:0217');

        dateTime = new DateTime(4295, 9, 5, 3, 35, 23, 933, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -1007);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4916-11-25 03:18:36:0933');

        dateTime = new DateTime(4142, 8, 2, 2, 1, 6, 348, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 9611);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4763-10-24 04:41:17:0348');

        dateTime = new DateTime(3236, 8, 16, 15, 52, 7, 181, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -6225);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3857-11-07 14:08:22:0181');

        dateTime = new DateTime(2077, 6, 16, 9, 18, 15, 803, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 8046);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2698-09-07 11:32:21:0803');

        dateTime = new DateTime(2435, 5, 16, 9, 40, 30, 475, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -1733);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3056-08-06 09:11:37:0475');

        dateTime = new DateTime(2222, 4, 28, 15, 38, 9, 714, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -1694);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2843-07-19 15:09:55:0714');

        dateTime = new DateTime(2091, 10, 7, 12, 46, 21, 389, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -4970);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2712-12-28 11:23:31:0389');

        dateTime = new DateTime(858, 3, 20, 17, 51, 43, 476, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 4238);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1479-06-10 19:02:21:0476');

        dateTime = new DateTime(4568, 1, 13, 21, 46, 50, 41, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -3643);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5189-04-01 20:46:07:0041');

        dateTime = new DateTime(4693, 10, 13, 15, 49, 19, 840, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 113);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5315-01-03 15:51:12:0840');

        dateTime = new DateTime(875, 6, 4, 16, 47, 21, 191, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -6811);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1496-08-25 14:53:50:0191');

        dateTime = new DateTime(4413, 2, 4, 10, 33, 50, 720, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 3972);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5034-04-24 11:40:02:0720');

        dateTime = new DateTime(3340, 11, 17, 12, 29, 51, 685, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 4302);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3962-02-06 13:41:33:0685');

        dateTime = new DateTime(4950, 10, 14, 6, 27, 23, 474, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -8734);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5572-01-04 04:01:49:0474');

        dateTime = new DateTime(3669, 5, 10, 18, 43, 43, 591, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 8292);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4290-07-31 21:01:55:0591');

        dateTime = new DateTime(4711, 8, 24, 8, 53, 4, 336, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 3642);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5332-11-14 09:53:46:0336');

        dateTime = new DateTime(1646, 11, 11, 11, 49, 42, 218, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -8361);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2268-01-31 09:30:21:0218');

        dateTime = new DateTime(1586, 3, 5, 10, 38, 22, 127, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -847);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2207-05-27 10:24:15:0127');

        dateTime = new DateTime(2923, 1, 3, 9, 34, 13, 371, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -3330);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3544-03-23 08:38:43:0371');

        dateTime = new DateTime(2094, 10, 25, 16, 31, 15, 966, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -7149);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2716-01-16 14:32:06:0966');

        dateTime = new DateTime(2032, 8, 20, 21, 8, 38, 265, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 1843);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2653-11-11 21:39:21:0265');

        dateTime = new DateTime(4588, 8, 10, 14, 50, 23, 374, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 1530);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5209-10-31 15:15:53:0374');

        dateTime = new DateTime(2039, 5, 6, 16, 9, 45, 801, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -2501);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2660-07-27 15:28:04:0801');

        dateTime = new DateTime(2389, 10, 6, 3, 13, 34, 922, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -988);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3010-12-27 02:57:06:0922');

        dateTime = new DateTime(4556, 9, 6, 16, 45, 26, 625, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 9961);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5177-11-26 19:31:27:0625');

        dateTime = new DateTime(3122, 5, 25, 4, 58, 24, 180, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -8239);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3743-08-16 02:41:05:0180');

        dateTime = new DateTime(1616, 3, 9, 22, 36, 8, 299, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -4170);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2237-05-30 21:26:38:0299');

        dateTime = new DateTime(4974, 5, 21, 4, 38, 50, 267, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 9043);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5595-08-12 07:09:33:0267');

        dateTime = new DateTime(1337, 4, 21, 6, 5, 10, 99, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -6749);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1958-07-12 04:12:41:0099');

        dateTime = new DateTime(3112, 3, 8, 19, 41, 41, 323, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 2771);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3733-05-28 20:27:52:0323');

        dateTime = new DateTime(1829, 1, 26, 17, 35, 57, 507, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 698);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2450-04-15 17:47:35:0507');

        dateTime = new DateTime(2274, 6, 2, 2, 28, 21, 554, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 999);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2895-08-23 02:45:00:0554');

        dateTime = new DateTime(2710, 10, 25, 22, 18, 34, 582, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 6020);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3332-01-15 23:58:54:0582');

        dateTime = new DateTime(2752, 10, 27, 7, 2, 9, 527, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -3036);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3374-01-16 06:11:33:0527');

        dateTime = new DateTime(1590, 11, 26, 5, 55, 19, 995, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -4076);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2212-02-16 04:47:23:0995');

        dateTime = new DateTime(3277, 8, 21, 15, 11, 12, 403, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 1220);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3898-11-11 15:31:32:0403');

        dateTime = new DateTime(3487, 2, 1, 17, 49, 34, 225, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 6217);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4108-04-20 19:33:11:0225');

        dateTime = new DateTime(2066, 4, 6, 2, 25, 13, 80, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 4481);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2687-06-27 03:39:54:0080');

        dateTime = new DateTime(1467, 9, 18, 11, 22, 4, 717, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 4882);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2088-12-08 12:43:26:0717');

        dateTime = new DateTime(2819, 2, 1, 4, 52, 49, 308, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 9642);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3440-04-20 07:33:31:0308');

        dateTime = new DateTime(1312, 5, 19, 11, 18, 25, 302, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -1633);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1933-08-10 10:51:12:0302');

        dateTime = new DateTime(2241, 9, 1, 14, 35, 25, 37, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -6886);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2862-11-21 12:40:39:0037');

        dateTime = new DateTime(4576, 4, 6, 21, 50, 32, 189, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 3855);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5197-06-26 22:54:47:0189');

        dateTime = new DateTime(2722, 10, 3, 18, 30, 28, 881, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -1695);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3343-12-24 18:02:13:0881');

        dateTime = new DateTime(4727, 1, 16, 9, 58, 8, 132, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 1323);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('5348-04-04 10:20:11:0132');

        dateTime = new DateTime(2470, 8, 1, 22, 6, 16, 852, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 3330);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3091-10-23 23:01:46:0852');

        dateTime = new DateTime(2678, 11, 15, 9, 54, 36, 479, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -2279);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('3300-02-03 09:16:37:0479');

        dateTime = new DateTime(2233, 2, 26, 21, 19, 43, 337, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -3107);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2854-05-15 20:27:56:0337');

        dateTime = new DateTime(2280, 6, 17, 3, 29, 48, 289, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -6673);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2901-09-08 01:38:35:0289');

        dateTime = new DateTime(1194, 7, 20, 9, 5, 27, 673, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -361);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1815-10-13 08:59:26:0673');

        dateTime = new DateTime(754, 6, 19, 14, 13, 27, 796, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 9994);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('1375-09-10 17:00:01:0796');

        dateTime = new DateTime(1856, 10, 13, 18, 51, 50, 658, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, 7722);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('2478-01-02 21:00:32:0658');

        dateTime = new DateTime(3787, 8, 3, 15, 32, 36, 59, persianCalendar);
        dateTime = calendar.addSeconds(dateTime, -7550);
        expect(dateTime.toString('yyyy-MM-dd HH:mm:ss:ffff')).toBe('4408-10-24 13:26:46:0059');

    });

    it('should calculate dayOfMonth correctly', () => {
        let calendar = new PersianCalendar();
        let persianCalendar = new PersianCalendar();

        let dateTime = new DateTime(2857, 11, 9, 4, 35, 54, 632, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(9);

        dateTime = new DateTime(3235, 3, 2, 4, 15, 32, 683, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(4292, 5, 25, 4, 49, 45, 568, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(25);

        dateTime = new DateTime(3233, 6, 12, 12, 9, 10, 559, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(1664, 9, 28, 10, 55, 48, 10, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(3398, 8, 7, 4, 47, 45, 906, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(7);

        dateTime = new DateTime(1772, 10, 16, 10, 13, 56, 359, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(4433, 9, 4, 12, 43, 33, 968, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(4);

        dateTime = new DateTime(4987, 9, 14, 1, 9, 27, 872, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(14);

        dateTime = new DateTime(2715, 6, 4, 16, 11, 34, 680, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(4);

        dateTime = new DateTime(4860, 9, 22, 7, 57, 11, 309, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(22);

        dateTime = new DateTime(4872, 3, 16, 20, 50, 46, 126, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(1256, 5, 10, 9, 48, 39, 886, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4259, 4, 16, 17, 8, 45, 104, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(4069, 9, 5, 12, 38, 0, 454, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3576, 11, 23, 2, 21, 54, 419, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(23);

        dateTime = new DateTime(1514, 8, 23, 17, 52, 9, 681, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(23);

        dateTime = new DateTime(1162, 4, 9, 22, 55, 0, 110, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(9);

        dateTime = new DateTime(3997, 7, 20, 19, 3, 26, 842, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(20);

        dateTime = new DateTime(2157, 10, 19, 16, 7, 24, 943, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(19);

        dateTime = new DateTime(4146, 5, 17, 17, 3, 43, 549, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(17);

        dateTime = new DateTime(4435, 4, 6, 17, 42, 49, 316, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(6);

        dateTime = new DateTime(3824, 1, 8, 9, 8, 25, 464, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(8);

        dateTime = new DateTime(2751, 7, 27, 10, 3, 55, 147, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(27);

        dateTime = new DateTime(1188, 1, 5, 11, 43, 47, 879, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(5);

        dateTime = new DateTime(2641, 8, 16, 13, 35, 36, 889, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(1048, 3, 9, 15, 11, 37, 102, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(9);

        dateTime = new DateTime(4389, 9, 1, 2, 31, 5, 983, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(1);

        dateTime = new DateTime(3736, 11, 16, 9, 39, 14, 729, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(1113, 1, 6, 10, 18, 9, 864, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(6);

        dateTime = new DateTime(1425, 6, 20, 5, 9, 43, 841, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(20);

        dateTime = new DateTime(4223, 5, 9, 12, 39, 34, 566, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(9);

        dateTime = new DateTime(4875, 7, 22, 18, 17, 3, 827, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(22);

        dateTime = new DateTime(3075, 6, 8, 8, 4, 0, 165, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(8);

        dateTime = new DateTime(2723, 4, 6, 6, 46, 6, 727, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(6);

        dateTime = new DateTime(3390, 9, 1, 15, 34, 3, 652, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4480, 7, 20, 8, 49, 4, 634, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(20);

        dateTime = new DateTime(2748, 8, 28, 22, 18, 34, 435, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(1652, 5, 15, 5, 2, 28, 995, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(15);

        dateTime = new DateTime(2170, 10, 10, 21, 27, 45, 134, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(10);

        dateTime = new DateTime(3561, 3, 28, 16, 7, 54, 222, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(2048, 5, 8, 9, 48, 48, 707, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(8);

        dateTime = new DateTime(1792, 9, 2, 4, 9, 19, 580, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(2572, 9, 20, 20, 1, 44, 576, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(20);

        dateTime = new DateTime(789, 7, 15, 9, 10, 12, 356, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(15);

        dateTime = new DateTime(3394, 4, 17, 10, 47, 41, 905, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(17);

        dateTime = new DateTime(3492, 10, 22, 8, 10, 46, 198, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(22);

        dateTime = new DateTime(2196, 5, 4, 15, 58, 21, 257, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(4);

        dateTime = new DateTime(739, 11, 2, 21, 15, 7, 818, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(2458, 6, 3, 7, 3, 47, 383, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(3);

        dateTime = new DateTime(3101, 8, 11, 13, 52, 34, 355, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2550, 1, 6, 13, 35, 57, 910, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(6);

        dateTime = new DateTime(2670, 4, 8, 7, 3, 52, 637, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(8);

        dateTime = new DateTime(4676, 11, 26, 11, 3, 45, 448, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(26);

        dateTime = new DateTime(3067, 7, 11, 21, 31, 51, 283, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2591, 1, 19, 10, 5, 4, 132, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(19);

        dateTime = new DateTime(2863, 6, 15, 3, 21, 48, 257, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(15);

        dateTime = new DateTime(636, 3, 8, 11, 16, 5, 711, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(8);

        dateTime = new DateTime(2511, 5, 22, 7, 55, 41, 198, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(22);

        dateTime = new DateTime(4891, 3, 10, 9, 18, 40, 401, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4413, 5, 25, 18, 19, 25, 440, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(25);

        dateTime = new DateTime(4226, 3, 11, 11, 42, 39, 389, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2675, 6, 17, 5, 54, 53, 604, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(17);

        dateTime = new DateTime(4213, 3, 12, 21, 40, 38, 363, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(4650, 7, 5, 17, 11, 2, 487, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3358, 6, 25, 21, 43, 20, 800, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(25);

        dateTime = new DateTime(4165, 11, 24, 6, 42, 56, 357, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(24);

        dateTime = new DateTime(1220, 4, 24, 13, 44, 17, 338, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(24);

        dateTime = new DateTime(1586, 6, 24, 1, 17, 3, 874, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(24);

        dateTime = new DateTime(1268, 7, 19, 9, 34, 44, 601, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(19);

        dateTime = new DateTime(3224, 2, 5, 5, 50, 44, 229, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(5);

        dateTime = new DateTime(2263, 8, 2, 1, 27, 43, 904, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(4080, 5, 22, 11, 41, 41, 158, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(22);

        dateTime = new DateTime(1670, 10, 2, 7, 39, 42, 547, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(3084, 11, 22, 20, 10, 47, 782, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(22);

        dateTime = new DateTime(2624, 6, 18, 6, 0, 23, 671, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(18);

        dateTime = new DateTime(2577, 3, 12, 13, 31, 18, 828, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(4699, 8, 21, 10, 41, 33, 872, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(21);

        dateTime = new DateTime(1984, 11, 26, 22, 23, 28, 29, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(26);

        dateTime = new DateTime(4043, 1, 25, 11, 47, 39, 422, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(25);

        dateTime = new DateTime(4513, 1, 12, 6, 2, 56, 8, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(4180, 8, 9, 18, 46, 54, 736, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(9);

        dateTime = new DateTime(2419, 5, 25, 5, 7, 48, 756, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(25);

        dateTime = new DateTime(2609, 8, 2, 18, 6, 0, 327, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(2);

        dateTime = new DateTime(2569, 4, 9, 15, 57, 26, 580, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(9);

        dateTime = new DateTime(2784, 1, 17, 5, 58, 0, 332, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(17);

        dateTime = new DateTime(2616, 9, 15, 1, 30, 38, 542, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(15);

        dateTime = new DateTime(2383, 9, 3, 19, 58, 35, 112, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(3);

        dateTime = new DateTime(2215, 5, 19, 18, 12, 28, 528, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(19);

        dateTime = new DateTime(3837, 7, 11, 2, 6, 13, 513, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(11);

        dateTime = new DateTime(911, 8, 17, 12, 35, 20, 72, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(17);

        dateTime = new DateTime(3155, 8, 12, 12, 2, 43, 733, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(12);

        dateTime = new DateTime(1692, 8, 4, 10, 0, 9, 588, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1413, 1, 28, 2, 5, 39, 134, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(2530, 4, 28, 4, 26, 36, 860, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(3158, 4, 28, 16, 51, 9, 331, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(28);

        dateTime = new DateTime(2337, 4, 18, 10, 43, 40, 333, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(18);

        dateTime = new DateTime(3424, 8, 9, 13, 30, 7, 610, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(9);

        dateTime = new DateTime(761, 1, 16, 20, 26, 11, 101, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(16);

        dateTime = new DateTime(3654, 3, 10, 15, 53, 8, 986, persianCalendar);
        expect(calendar.getDayOfMonth(dateTime)).toBe(10);

    });

    it('should calculate dayOfYear correctly', () => {
        let calendar = new PersianCalendar();
        let persianCalendar = new PersianCalendar();


        let dateTime = new DateTime(1915, 8, 24, 11, 37, 39, 436, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(240);

        dateTime = new DateTime(1013, 2, 1, 11, 13, 1, 99, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(32);

        dateTime = new DateTime(3070, 9, 4, 1, 1, 27, 58, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(250);

        dateTime = new DateTime(4803, 9, 17, 2, 11, 17, 265, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(263);

        dateTime = new DateTime(4028, 11, 15, 5, 22, 1, 91, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(321);

        dateTime = new DateTime(1182, 4, 21, 6, 17, 54, 166, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(114);

        dateTime = new DateTime(3883, 11, 20, 2, 54, 12, 449, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(326);

        dateTime = new DateTime(2938, 5, 20, 2, 22, 8, 512, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(144);

        dateTime = new DateTime(2983, 6, 26, 19, 58, 14, 986, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(181);

        dateTime = new DateTime(2990, 10, 25, 6, 7, 48, 58, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(301);

        dateTime = new DateTime(4605, 2, 25, 18, 36, 55, 913, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(56);

        dateTime = new DateTime(732, 5, 15, 13, 54, 38, 153, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(139);

        dateTime = new DateTime(3984, 4, 26, 12, 7, 29, 710, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(119);

        dateTime = new DateTime(1614, 3, 18, 3, 47, 36, 991, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(80);

        dateTime = new DateTime(2813, 3, 9, 11, 32, 38, 43, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(71);

        dateTime = new DateTime(3256, 11, 18, 10, 16, 21, 976, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(324);

        dateTime = new DateTime(1967, 2, 8, 15, 33, 57, 477, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(39);

        dateTime = new DateTime(3964, 8, 21, 20, 47, 50, 905, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(237);

        dateTime = new DateTime(1720, 8, 6, 11, 0, 34, 777, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(222);

        dateTime = new DateTime(2960, 10, 6, 19, 56, 19, 506, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(282);

        dateTime = new DateTime(2477, 2, 10, 19, 44, 33, 747, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(41);

        dateTime = new DateTime(3057, 9, 23, 18, 48, 55, 892, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(269);

        dateTime = new DateTime(4162, 9, 3, 10, 38, 45, 542, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(249);

        dateTime = new DateTime(4898, 8, 1, 11, 28, 42, 11, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(217);

        dateTime = new DateTime(2504, 3, 1, 22, 19, 38, 818, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(63);

        dateTime = new DateTime(2392, 1, 6, 11, 27, 20, 874, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(6);

        dateTime = new DateTime(4062, 7, 21, 4, 48, 20, 969, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(207);

        dateTime = new DateTime(897, 9, 10, 1, 33, 58, 577, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(256);

        dateTime = new DateTime(896, 9, 17, 7, 46, 28, 228, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(263);

        dateTime = new DateTime(3271, 1, 25, 14, 11, 3, 189, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(25);

        dateTime = new DateTime(943, 4, 5, 21, 50, 5, 817, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(98);

        dateTime = new DateTime(3869, 2, 11, 1, 21, 37, 746, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(42);

        dateTime = new DateTime(2064, 9, 12, 22, 58, 58, 322, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(258);

        dateTime = new DateTime(1787, 6, 7, 13, 24, 30, 888, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(162);

        dateTime = new DateTime(2200, 5, 17, 11, 51, 38, 445, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(141);

        dateTime = new DateTime(974, 1, 6, 2, 52, 37, 657, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(6);

        dateTime = new DateTime(2642, 10, 11, 5, 43, 24, 785, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(287);

        dateTime = new DateTime(1804, 9, 21, 22, 58, 11, 726, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(267);

        dateTime = new DateTime(3826, 6, 2, 15, 23, 56, 678, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(157);

        dateTime = new DateTime(4806, 4, 13, 4, 0, 33, 351, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(106);

        dateTime = new DateTime(3785, 11, 4, 6, 16, 0, 441, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(310);

        dateTime = new DateTime(1816, 10, 13, 8, 15, 2, 987, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(289);

        dateTime = new DateTime(3387, 8, 27, 4, 28, 47, 236, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(243);

        dateTime = new DateTime(4773, 8, 17, 3, 42, 29, 781, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(233);

        dateTime = new DateTime(2396, 5, 22, 11, 41, 48, 204, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(146);

        dateTime = new DateTime(630, 3, 20, 11, 30, 9, 914, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(82);

        dateTime = new DateTime(2594, 5, 7, 8, 42, 16, 493, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(131);

        dateTime = new DateTime(2606, 5, 10, 17, 3, 17, 428, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(134);

        dateTime = new DateTime(2292, 11, 12, 9, 13, 36, 46, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(318);

        dateTime = new DateTime(3823, 11, 20, 5, 24, 16, 44, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(326);

        dateTime = new DateTime(3133, 10, 8, 19, 22, 12, 557, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(284);

        dateTime = new DateTime(751, 8, 23, 20, 44, 5, 809, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(239);

        dateTime = new DateTime(1930, 5, 10, 16, 25, 52, 943, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(134);

        dateTime = new DateTime(1196, 8, 25, 5, 2, 35, 302, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(241);

        dateTime = new DateTime(2158, 4, 25, 4, 23, 46, 857, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(118);

        dateTime = new DateTime(3369, 11, 21, 10, 14, 24, 889, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(327);

        dateTime = new DateTime(3277, 2, 25, 16, 22, 3, 841, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(56);

        dateTime = new DateTime(3104, 9, 13, 15, 54, 39, 343, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(259);

        dateTime = new DateTime(4256, 1, 5, 4, 3, 37, 186, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(5);

        dateTime = new DateTime(2188, 4, 25, 18, 25, 24, 782, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(118);

        dateTime = new DateTime(4596, 2, 21, 5, 9, 21, 888, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(52);

        dateTime = new DateTime(4284, 5, 24, 22, 49, 24, 832, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(148);

        dateTime = new DateTime(2800, 9, 20, 12, 53, 15, 952, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(266);

        dateTime = new DateTime(2511, 10, 4, 8, 9, 15, 988, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(280);

        dateTime = new DateTime(1489, 6, 1, 7, 10, 21, 12, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(156);

        dateTime = new DateTime(4569, 1, 13, 6, 39, 14, 258, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(13);

        dateTime = new DateTime(4962, 9, 12, 2, 2, 23, 423, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(258);

        dateTime = new DateTime(3123, 7, 28, 19, 4, 7, 723, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(214);

        dateTime = new DateTime(3333, 9, 26, 2, 48, 56, 8, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(272);

        dateTime = new DateTime(1781, 5, 19, 22, 8, 28, 616, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(143);

        dateTime = new DateTime(1064, 11, 16, 10, 42, 47, 748, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(322);

        dateTime = new DateTime(3698, 6, 12, 4, 24, 53, 712, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(167);

        dateTime = new DateTime(2341, 2, 28, 8, 26, 27, 215, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(59);

        dateTime = new DateTime(3652, 1, 28, 8, 24, 22, 235, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(28);

        dateTime = new DateTime(1188, 5, 25, 8, 40, 54, 453, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(149);

        dateTime = new DateTime(1723, 6, 25, 12, 24, 32, 1, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(180);

        dateTime = new DateTime(3486, 3, 2, 3, 29, 33, 789, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(64);

        dateTime = new DateTime(3341, 10, 21, 10, 4, 17, 393, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(297);

        dateTime = new DateTime(3798, 2, 24, 11, 57, 41, 407, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(55);

        dateTime = new DateTime(1178, 4, 26, 13, 11, 27, 397, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(119);

        dateTime = new DateTime(4860, 7, 1, 15, 37, 48, 942, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(187);

        dateTime = new DateTime(2135, 1, 25, 18, 50, 49, 794, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(25);

        dateTime = new DateTime(3460, 7, 1, 12, 55, 31, 292, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(187);

        dateTime = new DateTime(4506, 7, 19, 2, 54, 43, 488, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(205);

        dateTime = new DateTime(806, 9, 11, 6, 17, 32, 585, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(257);

        dateTime = new DateTime(3401, 4, 10, 17, 5, 52, 31, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(103);

        dateTime = new DateTime(3054, 2, 28, 7, 1, 50, 46, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(59);

        dateTime = new DateTime(682, 2, 4, 19, 36, 24, 834, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(35);

        dateTime = new DateTime(1930, 6, 8, 3, 28, 38, 700, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(163);

        dateTime = new DateTime(958, 6, 11, 9, 43, 2, 922, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(166);

        dateTime = new DateTime(1707, 10, 20, 15, 32, 18, 804, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(296);

        dateTime = new DateTime(4174, 3, 7, 16, 31, 18, 151, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(69);

        dateTime = new DateTime(1843, 6, 16, 22, 3, 35, 438, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(171);

        dateTime = new DateTime(3884, 3, 12, 13, 21, 26, 271, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(74);

        dateTime = new DateTime(2507, 9, 17, 2, 12, 15, 747, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(263);

        dateTime = new DateTime(3275, 9, 2, 14, 14, 7, 628, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(248);

        dateTime = new DateTime(4567, 7, 7, 14, 19, 39, 219, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(193);

        dateTime = new DateTime(1229, 2, 3, 17, 35, 18, 192, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(34);

        dateTime = new DateTime(1993, 11, 6, 16, 6, 10, 464, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(312);

        dateTime = new DateTime(2479, 1, 27, 14, 53, 13, 584, persianCalendar);
        expect(calendar.getDayOfYear(dateTime)).toBe(27);

    });

    it('should calculate getMonth correctly', () => {
        let calendar = new PersianCalendar();
        let persianCalendar = new PersianCalendar();


        let dateTime = new DateTime(3463, 8, 24, 21, 55, 56, 148, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(4049, 8, 4, 7, 1, 31, 753, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(2964, 11, 22, 8, 35, 41, 556, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(3032, 2, 25, 20, 26, 13, 273, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(4003, 6, 11, 15, 46, 40, 421, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(2057, 4, 14, 14, 42, 8, 927, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1631, 8, 2, 11, 40, 3, 615, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(3981, 10, 13, 5, 57, 43, 621, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(2077, 10, 1, 16, 37, 29, 685, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(3592, 6, 13, 1, 49, 7, 688, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(4452, 6, 4, 12, 14, 0, 404, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(4998, 9, 6, 2, 43, 7, 760, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(950, 3, 9, 11, 34, 19, 440, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(3636, 1, 1, 12, 55, 34, 975, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(3580, 1, 23, 18, 1, 46, 602, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(892, 5, 20, 22, 14, 27, 3, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3129, 6, 23, 15, 20, 20, 150, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(2083, 6, 21, 9, 56, 57, 467, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(3502, 7, 6, 14, 47, 0, 877, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(2172, 3, 18, 11, 4, 35, 405, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(1794, 6, 24, 19, 10, 37, 314, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(3903, 11, 25, 12, 10, 21, 170, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(4438, 11, 19, 4, 8, 38, 666, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(936, 6, 26, 17, 55, 30, 37, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(3891, 10, 4, 3, 4, 19, 366, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(715, 1, 9, 10, 11, 25, 984, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(1056, 7, 19, 10, 20, 49, 913, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(835, 9, 19, 2, 50, 1, 475, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(2434, 4, 25, 12, 43, 33, 584, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(797, 4, 18, 7, 45, 9, 807, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(870, 11, 25, 19, 36, 51, 285, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2669, 6, 11, 20, 23, 55, 903, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(4479, 10, 17, 11, 5, 10, 182, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(3134, 8, 23, 22, 44, 56, 985, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(3291, 9, 22, 1, 15, 16, 884, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(3670, 10, 23, 1, 5, 45, 914, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(2606, 5, 18, 1, 19, 2, 808, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3640, 3, 8, 19, 5, 18, 148, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(2887, 11, 26, 11, 58, 18, 215, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(4372, 10, 9, 4, 13, 30, 329, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(2539, 4, 2, 9, 1, 0, 187, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(3658, 5, 19, 16, 29, 35, 821, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3755, 11, 18, 15, 16, 15, 96, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(4101, 6, 25, 12, 4, 3, 808, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(3587, 5, 1, 3, 29, 26, 582, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(4402, 8, 27, 8, 4, 55, 930, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(4257, 8, 12, 9, 13, 33, 987, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(4840, 8, 22, 5, 13, 6, 979, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(2682, 4, 16, 10, 57, 53, 132, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(4035, 4, 2, 10, 25, 52, 967, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(1378, 2, 15, 9, 58, 32, 540, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(2930, 2, 16, 16, 46, 20, 765, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(2010, 8, 23, 4, 7, 30, 603, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(1331, 1, 24, 9, 38, 32, 388, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(1180, 8, 9, 8, 42, 32, 748, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(749, 5, 14, 7, 34, 11, 641, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(4453, 2, 19, 9, 38, 20, 392, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(3126, 11, 11, 4, 58, 46, 541, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(3765, 6, 2, 20, 17, 15, 659, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(3757, 8, 9, 2, 57, 13, 623, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(2668, 9, 25, 9, 47, 46, 263, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(2267, 10, 3, 3, 14, 49, 564, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4413, 7, 15, 6, 53, 5, 118, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(4353, 10, 21, 18, 21, 34, 292, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(4387, 10, 10, 14, 39, 32, 142, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(2670, 2, 6, 9, 56, 21, 46, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(3936, 9, 28, 5, 54, 3, 905, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(3548, 1, 28, 15, 23, 45, 164, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(2621, 1, 5, 4, 58, 41, 198, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4460, 11, 18, 7, 21, 21, 710, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(858, 1, 2, 8, 33, 36, 441, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4168, 3, 24, 6, 34, 16, 746, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(2921, 4, 23, 12, 35, 38, 829, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(2086, 5, 2, 2, 29, 12, 976, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3143, 1, 27, 5, 18, 7, 394, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4512, 11, 26, 5, 20, 36, 152, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2260, 10, 2, 14, 36, 18, 242, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(1332, 3, 17, 21, 2, 47, 416, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(2136, 3, 11, 2, 40, 10, 509, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(3742, 9, 1, 14, 0, 24, 988, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(9);

        dateTime = new DateTime(1830, 4, 13, 5, 19, 12, 624, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(3709, 1, 24, 12, 27, 55, 794, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4041, 6, 23, 1, 45, 14, 247, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(6);

        dateTime = new DateTime(1703, 11, 26, 15, 42, 16, 302, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(11);

        dateTime = new DateTime(2577, 3, 6, 11, 36, 40, 143, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(3342, 4, 11, 6, 51, 21, 639, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(2797, 4, 8, 4, 41, 30, 156, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(4);

        dateTime = new DateTime(2688, 10, 21, 2, 26, 32, 136, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(1513, 8, 7, 20, 48, 23, 407, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(4321, 8, 15, 5, 56, 38, 139, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(672, 2, 23, 17, 13, 51, 522, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(905, 7, 6, 15, 17, 53, 808, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(7);

        dateTime = new DateTime(2838, 8, 4, 16, 15, 35, 450, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(8);

        dateTime = new DateTime(2356, 3, 13, 17, 50, 22, 811, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(3);

        dateTime = new DateTime(3306, 2, 27, 2, 57, 16, 589, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(2);

        dateTime = new DateTime(1474, 10, 23, 8, 21, 9, 733, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(2218, 1, 9, 5, 34, 55, 241, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(1);

        dateTime = new DateTime(4464, 5, 20, 22, 19, 28, 658, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);

        dateTime = new DateTime(3519, 10, 20, 3, 20, 2, 110, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(10);

        dateTime = new DateTime(3070, 5, 23, 6, 35, 57, 839, persianCalendar);
        expect(calendar.getMonth(dateTime)).toBe(5);


    });

    it('should calculate isLeapYear correctly', () => {
        let calendar = new PersianCalendar();
        
        expect(calendar.isLeapYear(1403)).toBe(true);

        expect(calendar.isLeapYear(1408)).toBe(true);

        
        expect(calendar.isLeapYear(3329)).toBe(false);

        expect(calendar.isLeapYear(2576)).toBe(false);

        expect(calendar.isLeapYear(3950)).toBe(false);

        expect(calendar.isLeapYear(3785)).toBe(false);

        expect(calendar.isLeapYear(982)).toBe(false);

        expect(calendar.isLeapYear(3519)).toBe(false);

        expect(calendar.isLeapYear(996)).toBe(false);

        expect(calendar.isLeapYear(3465)).toBe(false);

        expect(calendar.isLeapYear(1568)).toBe(true);

        expect(calendar.isLeapYear(4999)).toBe(false);

        expect(calendar.isLeapYear(639)).toBe(false);

        expect(calendar.isLeapYear(1508)).toBe(false);

        expect(calendar.isLeapYear(4007)).toBe(true);

        expect(calendar.isLeapYear(2830)).toBe(false);

        expect(calendar.isLeapYear(1675)).toBe(false);

        expect(calendar.isLeapYear(1705)).toBe(true);

        expect(calendar.isLeapYear(4451)).toBe(false);

        expect(calendar.isLeapYear(2900)).toBe(false);

        expect(calendar.isLeapYear(4980)).toBe(false);

        expect(calendar.isLeapYear(2345)).toBe(false);

        expect(calendar.isLeapYear(2755)).toBe(false);

        expect(calendar.isLeapYear(4500)).toBe(false);

        expect(calendar.isLeapYear(861)).toBe(false);

        expect(calendar.isLeapYear(3522)).toBe(false);

        expect(calendar.isLeapYear(3086)).toBe(false);

        expect(calendar.isLeapYear(3376)).toBe(true);

        expect(calendar.isLeapYear(3873)).toBe(false);

        expect(calendar.isLeapYear(1207)).toBe(false);

        expect(calendar.isLeapYear(4221)).toBe(false);

        expect(calendar.isLeapYear(3983)).toBe(false);

        expect(calendar.isLeapYear(4865)).toBe(false);

        expect(calendar.isLeapYear(2965)).toBe(false);

        expect(calendar.isLeapYear(4620)).toBe(false);

        expect(calendar.isLeapYear(2090)).toBe(false);

        expect(calendar.isLeapYear(3313)).toBe(false);

        expect(calendar.isLeapYear(4109)).toBe(false);

        expect(calendar.isLeapYear(1771)).toBe(true);

        expect(calendar.isLeapYear(1739)).toBe(false);

        expect(calendar.isLeapYear(2066)).toBe(false);

        expect(calendar.isLeapYear(951)).toBe(false);

        expect(calendar.isLeapYear(4389)).toBe(false);

        expect(calendar.isLeapYear(3361)).toBe(false);

        expect(calendar.isLeapYear(4592)).toBe(false);

        expect(calendar.isLeapYear(1891)).toBe(false);

        expect(calendar.isLeapYear(1615)).toBe(false);

        expect(calendar.isLeapYear(1919)).toBe(true);

        expect(calendar.isLeapYear(1906)).toBe(false);

        expect(calendar.isLeapYear(1007)).toBe(true);

        expect(calendar.isLeapYear(3590)).toBe(true);

        expect(calendar.isLeapYear(2128)).toBe(false);

        expect(calendar.isLeapYear(2928)).toBe(false);

        expect(calendar.isLeapYear(4461)).toBe(true);

        expect(calendar.isLeapYear(3600)).toBe(false);

        expect(calendar.isLeapYear(3939)).toBe(false);

        expect(calendar.isLeapYear(4497)).toBe(false);

        expect(calendar.isLeapYear(1386)).toBe(false);

        expect(calendar.isLeapYear(1801)).toBe(false);

        expect(calendar.isLeapYear(2850)).toBe(false);

        expect(calendar.isLeapYear(685)).toBe(false);

        expect(calendar.isLeapYear(3413)).toBe(true);

        expect(calendar.isLeapYear(3520)).toBe(true);

        expect(calendar.isLeapYear(892)).toBe(true);

        expect(calendar.isLeapYear(4150)).toBe(false);

        expect(calendar.isLeapYear(2448)).toBe(false);

        expect(calendar.isLeapYear(2028)).toBe(false);

        expect(calendar.isLeapYear(3286)).toBe(false);

        expect(calendar.isLeapYear(1864)).toBe(false);

        expect(calendar.isLeapYear(1114)).toBe(false);

        expect(calendar.isLeapYear(1515)).toBe(true);

        expect(calendar.isLeapYear(1277)).toBe(false);

        expect(calendar.isLeapYear(1705)).toBe(true);

        expect(calendar.isLeapYear(1794)).toBe(false);

        expect(calendar.isLeapYear(1854)).toBe(false);

        expect(calendar.isLeapYear(1091)).toBe(false);

        expect(calendar.isLeapYear(4325)).toBe(true);

        expect(calendar.isLeapYear(2824)).toBe(false);

        expect(calendar.isLeapYear(3284)).toBe(false);

        expect(calendar.isLeapYear(1020)).toBe(true);

        expect(calendar.isLeapYear(4210)).toBe(false);

        expect(calendar.isLeapYear(3338)).toBe(false);

        expect(calendar.isLeapYear(1569)).toBe(false);

        expect(calendar.isLeapYear(1138)).toBe(false);

        expect(calendar.isLeapYear(2503)).toBe(false);

        expect(calendar.isLeapYear(1500)).toBe(false);

        expect(calendar.isLeapYear(4676)).toBe(true);

        expect(calendar.isLeapYear(1156)).toBe(true);

        expect(calendar.isLeapYear(3446)).toBe(true);

        expect(calendar.isLeapYear(4015)).toBe(true);

        expect(calendar.isLeapYear(896)).toBe(true);

        expect(calendar.isLeapYear(1468)).toBe(false);

        expect(calendar.isLeapYear(1829)).toBe(false);

        expect(calendar.isLeapYear(2615)).toBe(false);

        expect(calendar.isLeapYear(1103)).toBe(false);

        expect(calendar.isLeapYear(2187)).toBe(true);

        expect(calendar.isLeapYear(995)).toBe(true);

        expect(calendar.isLeapYear(3053)).toBe(false);

        expect(calendar.isLeapYear(2200)).toBe(true);

        expect(calendar.isLeapYear(3397)).toBe(false);

        expect(calendar.isLeapYear(4885)).toBe(false);

        expect(calendar.isLeapYear(639)).toBe(false);

    });

});