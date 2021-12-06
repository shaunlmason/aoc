import { assertEquals } from '@deno/testing/asserts';

import { EXAMPLE_INPUT } from '../input.ts';
import { determinePowerConsumption, determinePowerConsumptionWithExtra } from '../main.ts';

Deno.test('D3P1 | should determine the correct power consumption', () => {
  const answer = determinePowerConsumption(EXAMPLE_INPUT);
  assertEquals(answer, 198);
});

Deno.test('D3P2 | ', () => {
  const answer = determinePowerConsumptionWithExtra(EXAMPLE_INPUT);
  assertEquals(answer, 198);
});
