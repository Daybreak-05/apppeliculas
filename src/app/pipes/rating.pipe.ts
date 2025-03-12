import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true 
})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 8) {
      return `🌟 ${value.toFixed(1)} - Excelente`;
    } else if (value >= 5) {
      return `👍 ${value.toFixed(1)} - Buena`;
    } else {
      return `👎 ${value.toFixed(1)} - Regular`;
    }
  }
}
