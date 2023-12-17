import { FibonacciSequenceGenerator } from './index.types';

export function* fibonacciSequence(startFrom: number = 1): FibonacciSequenceGenerator {
  const validStartFrom = [0, 1].includes(startFrom)
    ? startFrom
    : 1;

  if (validStartFrom < 1) {
    yield validStartFrom;

    yield 1;
  } else {
    yield 1;
  }

  let currentNumber = 1;

  let previousNumber = 0;


  while (true) {
    const nextNumber = currentNumber + previousNumber;

    yield nextNumber;

    previousNumber = currentNumber;
    currentNumber = nextNumber;
  }
}