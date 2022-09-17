import { Component } from '@angular/core';
import { TOTAL_PINS } from 'src/app/constants/constants';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.scss'],
})
export class PinsComponent {
  pins: number[] = Array.from({ length: TOTAL_PINS }, (_, i) => i + 1);
  remaningPins: number = 10;

  constructor(private game: GameService) {}

  get isFinished() {
    return this.game.isFinished();
  }

  roll(pins: number) {
    if(this.game.roll(pins)) {
      // this.remaningPins = 10;
      return;
    };
    // this.remaningPins -= pins;
  }
}
