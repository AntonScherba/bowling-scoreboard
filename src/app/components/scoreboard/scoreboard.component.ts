import { Component, OnInit } from '@angular/core';
import { IFrame } from 'src/app/classes/frame';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent {
  frames: IFrame[];

  constructor(private game: GameService) {
    this.frames = game.frames;
  }

  get currentFrameIndex() {
    return this.game.currentFrameIndex;
  }

  get frameScores(): number[] {
    return this.game.frameScores;
  }

  get totalScore(): number {
    return this.game.totalScore();
  }
}
