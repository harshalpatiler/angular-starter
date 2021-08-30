import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitword'
})
export class LimitwordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
