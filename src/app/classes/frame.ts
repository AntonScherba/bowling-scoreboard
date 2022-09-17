import { TOTAL_PINS } from "../constants/constants";

export interface IFrame {
  isStrike: boolean;
  isSpare: boolean;
  isComplete: boolean;
  isLastFrame: boolean;
  rolls: number[];
  roll: (pins: number) => void;
}

export class Frame {
  readonly rolls: number[] = [];

  constructor(readonly isLastFrame: boolean = false) {}

  private get numberOfRolls(): number {
    return this.rolls.length;
  }

  get isStrike(): boolean {
    return this.rolls && this.rolls[0] === TOTAL_PINS;
  }

  get isSpare(): boolean {
    if (this.numberOfRolls < 2) {
      return false;
    }
    return this.rolls[0] + this.rolls[1] === TOTAL_PINS;
  }

  get isComplete(): boolean {
    if (this.isLastFrame) {
      return this.isStrike || this.isSpare
        ? this.numberOfRolls === 3
        : this.numberOfRolls === 2;
    }

    return this.isStrike || this.numberOfRolls === 2;
  }

  roll(pins: number): void {
    if (this.isComplete) {
      throw new Error("Can't roll for complite frame");
    }

    //TODO validation

    this.rolls.push(pins);
  }
}
