import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false, //disable cashing
})
export class SortPipe implements PipeTransform {
  transform(values: string[] | number[], order: 'asc' | 'desc' = 'asc') {
    const sortedValues = [...values];

    sortedValues.sort((a, b) => {
      if (order === 'asc') {
        return a < b ? -1 : 1;
      } else if (order === 'desc') {
        return a > b ? -1 : 1;
      } else {
        return 0;
      }
    });
    return sortedValues;
  }
}
