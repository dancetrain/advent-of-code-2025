import { sum, greet } from '../main';

describe('sum', () => {
  test('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe('greet', () => {
  test('greets by name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('greets default', () => {
    expect(greet()).toBe('Hello, World!');
  });
});
