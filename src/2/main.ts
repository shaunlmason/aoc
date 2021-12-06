import { INSTRUCTIONS } from './input.ts';

type CurrentPosition = { horizontalPosition: number; depth: number };
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
  const currentPosition: CurrentPosition = { horizontalPosition: 0, depth: 0 };

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

function toInstruction(input: string): Instruction {
  const instruction: Instruction = { direction: 'forward', value: 0 };

  const parsed = input.split(' ');
  instruction.direction = parsed[0] as Direction;
  instruction.value = Number.parseInt(parsed[1]);

  return instruction;
}

const partOneAnswer: CurrentPosition = determineCurrentPosition(INSTRUCTIONS);
console.log('ANSWER DAY 2 | PART ONE:', partOneAnswer.horizontalPosition * partOneAnswer.depth);
