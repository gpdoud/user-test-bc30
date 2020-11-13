import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'masked'
})
export class MaskedPipe implements PipeTransform {

  transform(password: string): string {
    let len = password.length;
    let mask = "";
    for(let idx = 0; idx < len; idx++) {
      mask += "#";
    }
    return mask;
  }

}
