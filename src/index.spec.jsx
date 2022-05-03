const sum = (a, b) => a + b;

test('should sum two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('should not sum two string', () => {
  expect(sum('1', '2')).toBe('12');
});
