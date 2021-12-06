import { INSTRUCTIONS } from './input.ts';

type CurrentPosition = { aim: number; depth: number; horizontalPosition: number };
type Direction = 'up' | 'down' | 'forward';
type Instruction = { direction: Direction; value: number };

/**
 * Determines current position based on incoming instructions.
 *
 * @note Position is based on a (X,Y) plot where Y is depth, so all Y values
 * will be expressed as down being positive, up being negative.
 *
 * @param instructions incoming instructions
 * @returns current depth and horizontal position
 */
export function determineCurrentPosition(instructions: string[]): CurrentPosition {
  const currentPosition: CurrentPosition = { aim: 0, horizontalPosition: 0, depth: 0 };

  instructions.map((item: string) => toInstruction(item)).forEach((instruction: Instruction) => {
    switch (instruction.direction) {
      case 'up': {
        currentPosition.depth -= instruction.value;
        break;
      }
      case 'down': {
        currentPosition.depth += instruction.value;
        break;
      }
      case 'forward': {
        currentPosition.horizontalPosition += instruction.value;
        break;
      }
      default:
        throw new Error('Invalid instruction!');
    }
  });

  return currentPosition;
}

/**
 * Determines current position based on incoming instructions, utilizing a vector
 * describing heading called "aim".
 *
 * @note Position is based on a (X,Y) plot where Y is depth, so all Y values
 * will be expressed as down being positive, up being negative.
 *
 * @param instructions incoming instructions
 * @returns current depth and horizontal position
 */
export function determineCurrentPositionWithAim(instructions: string[]): CurrentPosition {
  const currentPosition: CurrentPosition = { aim: 0, horizontalPosition: 0, depth: 0 };

  instructions.map((item: string) => toInstruction(item)).forEach((instruction: Instruction) => {
    switch (instruction.direction) {
      case 'up': {
        /**
         * up X decreases your aim by X units.
         */
        currentPosition.aim -= instruction.value;
        break;
      }
      case 'down': {
        /**
         * down X increases your aim by X units.
         */
        currentPosition.aim += instruction.value;
        break;
      }
      case 'forward': {
        /**
         * forward X does two things:
         *  - it increases your horizontal position by X units.
         *  - it increases your depth by your aim multiplied by X.
         */
        currentPosition.horizontalPosition += instruction.value;
        currentPosition.depth += currentPosition.aim * instruction.value;

        break;
      }
      default:
        throw new Error('Invalid instruction!');
    }
  });

  return currentPosition;
}

/**
 * Converts string representation of instruction to a typed
 * representation.
 *
 * @param input incoming instruction
 * @returns parsed direction
 */
function toInstruction(input: string): Instruction {
  const instruction: Instruction = { direction: 'forward', value: 0 };

  const parsed = input.split(' ');
  instruction.direction = parsed[0] as Direction;
  instruction.value = Number.parseInt(parsed[1]);

  return instruction;
}

const partOneAnswer: CurrentPosition = determineCurrentPosition(INSTRUCTIONS);
console.log('ANSWER DAY 2 | PART ONE:', partOneAnswer.horizontalPosition * partOneAnswer.depth);

const partTwoAnswer: CurrentPosition = determineCurrentPositionWithAim(INSTRUCTIONS);
console.log('ANSWER DAY 2 | PART TWO:', partTwoAnswer.horizontalPosition * partTwoAnswer.depth);
