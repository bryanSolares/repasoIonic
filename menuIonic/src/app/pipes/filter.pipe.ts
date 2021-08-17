import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], text: string, column: string = 'title'): any[] {


    if (!text) {
      return value;
    }

    return value.filter(element => element[column].includes(text));
  }

}
