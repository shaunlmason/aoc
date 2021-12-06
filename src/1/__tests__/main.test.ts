import { assertEquals } from '@deno/testing/asserts';

import { countIncreases, countIncreasesWithSlidingWindow } from '../main.ts';

const EXAMPLE_INPUT: number[] = [
  199,
  200,
  208,
  210,
  200,
  207,
  240,
  269,
  260,
  263,
];

Deno.test('should correctly identify the number of times increases', () => {
  const increases = countIncreases(EXAMPLE_INPUT);
  assertEquals(increases, 7);
});

Deno.test('should correctly identify the number of times increases with a sliding window', () => {
  const increases = countIncreasesWithSlidingWindow(EXAMPLE_INPUT, 3);
  assertEquals(increases, 5);
});
