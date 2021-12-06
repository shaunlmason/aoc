import { assertEquals } from '@deno/testing/asserts';

import { determineCurrentPosition, determineCurrentPositionWithAim } from '../main.ts';

export const EXAMPLE_INPUT: string[] = [
  `forward 5`,
  `down 5`,
  `forward 8`,
  `up 3`,
  `down 8`,
  `forward 2`,
];

Deno.test('should correctly determine position based on the incoming instructions', () => {
  const currentPosition = determineCurrentPosition(EXAMPLE_INPUT);
  const product = currentPosition.horizontalPosition * currentPosition.depth;

  assertEquals(currentPosition.horizontalPosition, 15);
  assertEquals(currentPosition.depth, 10);
  assertEquals(product, 150);
});

Deno.test('should correctly determine position (with aim), based on the incoming instructions', () => {
  const currentPosition = determineCurrentPositionWithAim(EXAMPLE_INPUT);
  const product = currentPosition.horizontalPosition * currentPosition.depth;

  assertEquals(currentPosition.horizontalPosition, 15);
  assertEquals(currentPosition.depth, 60);
  assertEquals(product, 900);
});
