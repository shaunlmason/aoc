import { DEPTH_MEASUREMENTS } from './input.ts';
import { countIncreases, countIncreasesWithSlidingWindow } from './utils.ts';

const partOneAnswer: number = countIncreases(DEPTH_MEASUREMENTS);
console.log('ANSWER (PART ONE):', partOneAnswer);

const partTwoAnswer: number = countIncreasesWithSlidingWindow(DEPTH_MEASUREMENTS, 3);
console.log('ANSWER (PART TWO):', partTwoAnswer);
