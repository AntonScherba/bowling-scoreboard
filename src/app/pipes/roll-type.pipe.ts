import { Pipe, PipeTransform } from '@angular/core';
import { Frame } from '../enums/frame';


@Pipe({
  name: 'rollType',
})
export class RollTypePipe implements PipeTransform {
  transform(pins1: number, pins2?: number): string | number {
    if (pins1 === 10) {
      return Frame.Strike;
    }
    
    if (pins2 && pins1 > 0 && pins1 + pins2 === 10) {
      return Frame.Spare;
    }

    return pins1;
  }
}
