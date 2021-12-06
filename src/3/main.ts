import { DIAGNOSTIC_REPORT } from './input.ts';

/**
 * Determines the subs power consumption.
 *
 * @note
 * Each binary number contains the `gamma rate` and the `epsilon rate`.
 * Power consumption is `gamma rate` * `epsilon rate`.
 *
 * @param diagnostics incoming diagnostic report, which is a series of binary numbers
 * @returns correct power consumption, in decimal
 */
export function determinePowerConsumption(diagnostics: string[]): number {
  const gamma = determineGammaRate(diagnostics);
  const epsilon = determineEpsilonRate(diagnostics);

  console.log(`g: => ${gamma} | e: => ${epsilon}`);

  return gamma * epsilon;
}

/**
 * Determines the subs power consumption.
 *
 * @param diagnostics incoming diagnostic report, which is a series of binary numbers
 * @returns correct power consumption, in decimal
 */
export function determinePowerConsumptionWithExtra(diagnostics: string[]): number {
  return determinePowerConsumption(diagnostics);
}

/**
 * Determines the epsilon rate.
 *
  @param diagnostics incoming diagnostic report, which is a series of binary numbers
 * @returns gamma rate, in decimal
 */
function determineEpsilonRate(diagnostics: string[]): number {
  if (diagnostics.length === 0) {
    return 0;
  }

  const inputLength = diagnostics[0].length;

  const epsilon = [];
  for (let i = 0; i < inputLength; i++) {
    const lcb = determineLeastCommonBit(diagnostics, i);
    epsilon.push(lcb);
  }

  const asString = epsilon.join('');
  const decimal = Number.parseInt(asString, 2);

  return decimal;
}

/**
 * Determines the gamma rate.
 *
  @param diagnostics incoming diagnostic report, which is a series of binary numbers
 * @returns gamma rate, in decimal
 */
function determineGammaRate(diagnostics: string[]): number {
  if (diagnostics.length === 0) {
    return 0;
  }

  const inputLength = diagnostics[0].length;

  const gamma = [];
  for (let i = 0; i < inputLength; i++) {
    const mcb = determineMostCommonBit(diagnostics, i);
    gamma.push(mcb);
  }

  const asString = gamma.join('');
  const decimal = Number.parseInt(asString, 2);

  return decimal;
}

/**
 * Determines the least common bit at a given position.
 *
 * @param array incoming array of binary numbers
 * @param position bit to check
 *
 * @returns value of least common bit
 */
function determineLeastCommonBit(array: string[], position: number): number {
  // get each bit at position
  const bits = array.map((value) => getBitAtPosition(value, position));

  const ones = bits.filter((bit: number) => bit === 1).length;
  const zeros = bits.filter((bit: number) => bit === 0).length;

  return (zeros >= ones) ? 1 : 0;
}

/**
 * Determines the most common bit at a given position.
 *
 * @param array incoming array of binary numbers
 * @param position bit to check
 *
 * @returns value of least common bit
 */
function determineMostCommonBit(array: string[], position: number): number {
  // get each bit at position
  const bits = array.map((value) => getBitAtPosition(value, position));

  const ones = bits.filter((bit: number) => bit === 1).length;
  const zeros = bits.filter((bit: number) => bit === 0).length;

  // console.log(`bits: ${bits} | ones: ${ones} | zeros: ${zeros}`);

  return (ones > zeros) ? 1 : 0;
}

/**
 * Given a binary number, get the bit at a specific position.
 *
 * @see https://stackoverflow.com/questions/4854207/get-a-specific-bit-from-byte
 * @param value incoming binary number, as string
 * @param position bit to check
 * @returns bit at position
 */
function getBitAtPosition(value: string, position: number): number {
  const bit = value.split('')[position];

  return Number.parseInt(bit);
}

const partOneAnswer = determinePowerConsumption(DIAGNOSTIC_REPORT);
console.log('ANSWER DAY 3 | PART 1:', partOneAnswer);

// const partTwoAnswer = determinePowerConsumptionWithExtra(DIAGNOSTIC_REPORT);
// console.log('ANSWER DAY 3 | PART 2:', partTwoAnswer);
