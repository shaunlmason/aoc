import { assertEquals } from '@deno/testing/asserts';

import { EXAMPLE_INPUT } from '../input.ts';
import { countIncreases, countIncreasesWithSlidingWindow } from '../main.ts';

Deno.test('D1P1 | should correctly identify the number of times increases', () => {
  const increases = countIncreases(EXAMPLE_INPUT);
  assertEquals(increases, 7);
});

Deno.test('D1P2 | should correctly identify the number of times increases with a sliding window', () => {
  const increases = countIncreasesWithSlidingWindow(EXAMPLE_INPUT, 3);
  assertEquals(increases, 5);
});
