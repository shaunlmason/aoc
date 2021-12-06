import { assertEquals } from '@deno/testing/asserts';

import { EXAMPLE_INPUT } from '../input.ts';
import { determineLifeSupportRating, determinePowerConsumption } from '../main.ts';

Deno.test('D3P1 | should determine the correct power consumption', () => {
  const answer = determinePowerConsumption(EXAMPLE_INPUT);
  assertEquals(answer, 198);
});

Deno.test('D3P2 | should determine the correct life support rating', () => {
  const answer = determineLifeSupportRating(EXAMPLE_INPUT);
  assertEquals(answer, 230);
});
