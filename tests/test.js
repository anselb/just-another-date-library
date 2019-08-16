import D from '../src/index';

test('Sanity check', () => {
  expect(2 + 2).toBe(4);
});

const pastDate = new D(1998, 5, 19, 14, 14, 27);
const currentDate = new D();
const futureDate = new D('2468-10-12T14:16:18');

test('D creats a new Date object', () => {
  const unixTimestamp = 1565069098313;
  const d = new D(unixTimestamp);
  expect(d.date.getTime()).toBe(unixTimestamp);
});

test('D returns the full year', () => {
  expect(pastDate.year()).toBe(1998);
  expect(currentDate.year()).toBe((new Date()).getFullYear());
  expect(futureDate.year()).toBe(2468);
});

test('D returns the month name', () => {
  expect(pastDate.month()).toBe('June');
  const currentMonthSlice = (currentDate.month()).slice(0, 3);
  expect(currentMonthSlice).toBe((new Date()).toString().split(' ')[1]);
  expect(futureDate.month()).toBe('October');
});

test('D returns the day of the month', () => {
  expect(pastDate.day()).toBe(19);
  expect(currentDate.day()).toBe((new Date()).getDate());
  expect(futureDate.day()).toBe(12);
});

test('D returns the hour of the day, starting at 0', () => {
  expect(pastDate.hour()).toBe(14);
  expect(currentDate.hour()).toBe((new Date()).getHours());
  expect(futureDate.hour()).toBe(14);
});

test('D returns the minutes of the hour, starting at 0', () => {
  expect(pastDate.min()).toBe(14);
  expect(currentDate.min()).toBe((new Date()).getMinutes());
  expect(futureDate.min()).toBe(16);
});

test('D returns the secounds of the minute, starting at 0', () => {
  expect(pastDate.sec()).toBe(27);
  expect(currentDate.sec()).toBe((new Date()).getSeconds());
  expect(futureDate.sec()).toBe(18);
});

test('format changes characters to date values in a string', () => {
  expect(pastDate.format()).toBe('June 19, 1998');

  expect(pastDate.format('Y:M:D:H:I:S')).toBe('1998:June:19:14:14:27');
  expect(pastDate.format('y:m:d:h:i:s')).toBe('98:Jun:19:14:14:27');

  expect(futureDate.format('Y:M:D:H:I:S')).toBe('2468:October:12:14:16:18');
  expect(futureDate.format('y:m:d:h:i:s')).toBe('68:Oct:12:14:16:18');

  const singleDigitDate = new D(2001, 2, 3, 4, 5, 6);
  expect(singleDigitDate.format('Y:M:D:H:I:S')).toBe('2001:March:03:04:05:06');
  expect(singleDigitDate.format('y:m:d:h:i:s')).toBe('01:Mar:3:4:5:6');
});

test('when returns the years, months, or days from a given day until D', () => {
  const compareDate = new D(2019, 7, 17, 20);

  expect(pastDate.when(compareDate)).toBe('21 years ago');
  expect(futureDate.when(compareDate)).toBe('449 years from now');

  const oneYearBefore = new D(2018, 7, 17, 20);
  const oneYearAfter = new D(2020, 7, 17, 20);
  expect(oneYearBefore.when(compareDate)).toBe('1 year ago');
  expect(oneYearAfter.when(compareDate)).toBe('1 year from now');

  const monthsBefore = new D(2019, 5, 17, 20);
  const monthsAfter = new D(2019, 11, 17, 20);
  expect(monthsBefore.when(compareDate)).toBe('2 months ago');
  expect(monthsAfter.when(compareDate)).toBe('4 months from now');

  const oneMonthBefore = new D(2019, 6, 17, 20);
  const oneMonthAfter = new D(2019, 8, 17, 20);
  expect(oneMonthBefore.when(compareDate)).toBe('1 month ago');
  expect(oneMonthAfter.when(compareDate)).toBe('1 month from now');

  const daysBefore = new D(2019, 7, 11, 20);
  const daysAfter = new D(2019, 7, 29, 20);
  expect(daysBefore.when(compareDate)).toBe('6 days ago');
  expect(daysAfter.when(compareDate)).toBe('12 days from now');

  const oneDayBefore = new D(2019, 7, 16, 20);
  const oneDayAfter = new D(2019, 7, 18, 20);
  expect(oneDayBefore.when(compareDate)).toBe('1 day ago');
  expect(oneDayAfter.when(compareDate)).toBe('1 day from now');

  expect(compareDate.when(compareDate)).toBe('Today');
});
