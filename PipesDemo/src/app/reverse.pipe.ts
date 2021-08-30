import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe  implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let newStr:String=""
    for(let i= value.length-1;i>=0;i-- ){
            newStr= newStr+value[i]
            return newStr;
    }
 
  }

}
