import { DEPTH_MEASUREMENTS } from './input.ts';
import { countDepthIncreases } from './utils.ts';

const partOneAnswer: number = countDepthIncreases(DEPTH_MEASUREMENTS);

console.log('ANSWER (PART ONE):', partOneAnswer);
