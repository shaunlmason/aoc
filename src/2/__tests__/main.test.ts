import { assertEquals } from '@deno/testing/asserts';

import { EXAMPLE_INPUT } from '../input.ts';
import { determineCurrentPosition, determineCurrentPositionWithAim } from '../main.ts';

Deno.test('D2P1 | should correctly determine position based on the incoming instructions', () => {
  const currentPosition = determineCurrentPosition(EXAMPLE_INPUT);
  const product = currentPosition.horizontalPosition * currentPosition.depth;

  assertEquals(currentPosition.horizontalPosition, 15);
  assertEquals(currentPosition.depth, 10);
  assertEquals(product, 150);
});

Deno.test('D2P2 | should correctly determine position (with aim), based on the incoming instructions', () => {
  const currentPosition = determineCurrentPositionWithAim(EXAMPLE_INPUT);
  const product = currentPosition.horizontalPosition * currentPosition.depth;

  assertEquals(currentPosition.horizontalPosition, 15);
  assertEquals(currentPosition.depth, 60);
  assertEquals(product, 900);
});
