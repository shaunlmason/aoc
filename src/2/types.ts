export type CurrentPosition = { aim: number; depth: number; horizontalPosition: number };
export type Direction = 'up' | 'down' | 'forward';
export type Instruction = { direction: Direction; value: number };
