import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLower'
})
export class ToLowerPipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase();
  }

}
