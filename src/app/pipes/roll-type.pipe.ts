import { Pipe, PipeTransform } from '@angular/core';
import { Frame } from '../enums/frame';

@Pipe({
  name: 'rollType',
})
export class RollTypePipe implements PipeTransform {
  transform(
    currentKnokedDownPins: number,
    previousKnokedDownPins?: number
  ): string | number {
    if (currentKnokedDownPins === 10) {
      return Frame.Strike;
    }

    if (
      previousKnokedDownPins &&
      currentKnokedDownPins > 0 &&
      currentKnokedDownPins + previousKnokedDownPins === 10
    ) {
      return Frame.Spare;
    }

    return currentKnokedDownPins;
  }
}
