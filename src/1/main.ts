import { DEPTH_MEASUREMENTS } from './input.ts';

/**
 * Convenience helper type
 */
type SlidingWindow = number[];

/**
 * Scans incoming array and counts the number of times the array value increases.
 *
 * @param array incoming values
 * @returns number of times array increases
 */
export function countIncreases(array: number[]): number {
  let increases = 0;

  let previous: number | undefined;
  for (let index = 0; index < array.length; index++) {
    const current = array[index];

    // guard initial value
    if (!previous) {
      previous = current;
      continue;
    }

    if (current > previous) {
      increases++;
    }

    previous = current;
  }

  return increases;
}

/**
 * Scans incoming array and counts the number of times the array value increases, grouped
 * by window size.
 *
 * @example
 * 199  A
 * 200  A B
 * 208  A B C
 * 210    B C D
 * 200  E   C D
 * 207  E F   D
 * 240  E F G
 * 269    F G H
 * 260      G H
 * 263        H
 *
 * @param array incoming values
 * @param windowSize subset size
 *
 * @returns number of times array increases over window interval
 */
export function countIncreasesWithSlidingWindow(array: number[], windowSize: number): number {
  // convert incoming array to windows of size n
  const windowTuples = toSlidingWindows(array, windowSize);

  // map reduce tuples into sum of window
  const sums = windowTuples.map((window) => window.reduce((sum, current) => sum + current, 0));

  // leverage existing method
  return countIncreases(sums);
}

/**
 * Converts incoming array into an array of `n` sized tuples. This method
 * discards incomplete windows at tail of input array.
 *
 * @example input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], size = 3
 *
 * [
 *  [1, 2, 3],
 *  [4, 5, 6],
 *  [7, 8, 9]
 * ]
 *
 * @param array incoming values
 * @param size subset size
 * @returns array of tuples
 */
function toSlidingWindows(array: number[], size = 1): SlidingWindow[] {
  const sets: SlidingWindow[] = [];

  // guard input
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return sets;
  }

  array.forEach((value, index) => {
    const window: [number | undefined] = [value];

    for (let i = 1; i < size; i++) {
      window.push(array[index + i]);
    }

    if (!window.includes(undefined)) {
      sets.push(window as number[]);
    }
  });

  return sets;
}

const partOneAnswer: number = countIncreases(DEPTH_MEASUREMENTS);
console.log('ANSWER DAY 1 | PART 1:', partOneAnswer);

const partTwoAnswer: number = countIncreasesWithSlidingWindow(DEPTH_MEASUREMENTS, 3);
console.log('ANSWER DAY 1 | PART 2:', partTwoAnswer);
