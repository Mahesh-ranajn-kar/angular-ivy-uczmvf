import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUpper',
})
export class MyUpperPipe implements PipeTransform {
  transform(value: string, args?: any): string {
    console.log(value);
    return value.toUpperCase();
  }
}
