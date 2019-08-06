import D from '../src/index';

test('Sanity check', () => {
  expect(2 + 2).toBe(4);
});

test('D creats a new Date object', () => {
  const d = new D(1565069098313);
  expect(d.date.getTime()).toBe(1565069098313);
});
