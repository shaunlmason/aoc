import { assertEquals } from '@deno/testing/asserts';

import { countDepthIncreases } from '../utils.ts';

Deno.test('should correctly identify the number of times depth increases', () => {
  const measurements: number[] = [
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

  const increases = countDepthIncreases(measurements);
  assertEquals(increases, 7);
});
