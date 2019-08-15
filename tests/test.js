import D from '../src/index';

test('Sanity check', () => {
  expect(2 + 2).toBe(4);
});

const pastDate = new D(1998, 5, 19, 14, 14, 27);
const currentDate = new D();
const futureDate = new D('2468-10-12T14:16:18');

test('D creats a new Date object', () => {
  const unixTimestamp = 1565069098313
  const d = new D(unixTimestamp);
  expect(d.date.getTime()).toBe(unixTimestamp);
});

test('D returns the full year', () => {
  expect(pastDate.year()).toBe(1998);
  expect(currentDate.year()).toBe((new Date()).getFullYear());
  expect(futureDate.year()).toBe(2468);
});
