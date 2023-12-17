import { fibonacciSequence } from '.';

describe('generators', () => {
  it('should get Fibonacci sequence starting from zero', () => {
    const fibonacciSequenceGenerator = fibonacciSequence(0);

    expect(fibonacciSequenceGenerator.next().value).toBe(0);
    expect(fibonacciSequenceGenerator.next().value).toBe(1);
    expect(fibonacciSequenceGenerator.next().value).toBe(1);
    expect(fibonacciSequenceGenerator.next().value).toBe(2);
    expect(fibonacciSequenceGenerator.next().value).toBe(3);
    expect(fibonacciSequenceGenerator.next().value).toBe(5);
    expect(fibonacciSequenceGenerator.next().value).toBe(8);
    expect(fibonacciSequenceGenerator.next().value).toBe(13);
  });

  it('should get Fibonacci sequence starting from one', () => {
    const fibonacciSequenceGenerator = fibonacciSequence();

    expect(fibonacciSequenceGenerator.next().value).toBe(1);
    expect(fibonacciSequenceGenerator.next().value).toBe(1);
    expect(fibonacciSequenceGenerator.next().value).toBe(2);
    expect(fibonacciSequenceGenerator.next().value).toBe(3);
    expect(fibonacciSequenceGenerator.next().value).toBe(5);
    expect(fibonacciSequenceGenerator.next().value).toBe(8);
    expect(fibonacciSequenceGenerator.next().value).toBe(13);
  });
});