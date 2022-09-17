import { Injectable } from '@angular/core';
import { Frame, IFrame } from '../classes/frame';
import { TOTAL_FRAMES, TOTAL_PINS } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  frames: IFrame[];
  frameScores: number[] = [];
  currentFrameIndex: number = 0;

  constructor() {
    this.frames = Array.from({ length: 9 }, () => new Frame());
    this.frames.push(new Frame(true));
  }

  get currentFrame(): IFrame {
    return this.frames[this.currentFrameIndex];
  }

  totalScore(): number {
    let score = 0;
    let frameIndex = 0;
    this.frameScores = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (this.isStrike(frameIndex) && this.strikeBonus(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        this.frameScores.push(score);
        frameIndex++;
        continue;
      }

      if (this.isSpare(frameIndex) && this.spareBonus(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex);
        this.frameScores.push(score);
      }

      if (this.sumOfPins(frameIndex) < 10) {
        score += this.sumOfPins(frameIndex);
        this.frameScores.push(score);
      }

      frameIndex += 2;
    }

    return score;
  }

  roll(pins: number) {
    this.currentFrame.roll(pins);

    if (this.currentFrame.isComplete) {
      this.currentFrameIndex++;
      return true;
    }
    return false;
  }

  isFinished(): boolean {
    return this.frames.every((frame) => frame.isComplete);
  }

  private isStrike(frameIndex: number) {
    return this.flatRolls[frameIndex] === TOTAL_PINS;
  }

  private isSpare(frameIndex: number) {
    return this.sumOfPins(frameIndex) === TOTAL_PINS;
  }

  private strikeBonus(frameIndex: number) {
    return this.sumOfPins(frameIndex + 1);
  }

  private spareBonus(frameIndex: number) {
    return this.flatRolls[frameIndex + 2];
  }

  private sumOfPins(frameIndex: number) {
    return this.flatRolls[frameIndex] + this.flatRolls[frameIndex + 1];
  }

  private get flatRolls() {
    return this.frames.reduce(
      (acc: number[], frame) => [...acc, ...frame.rolls],
      []
    );
  }
}
