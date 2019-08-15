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
