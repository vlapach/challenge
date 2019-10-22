import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSlice'
})
export class SliceStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value.replace(/(\<(\/?[^>]+)>)/g, ' ');
    return !!value && !!args  && typeof value === 'string' && value.length > args ?
      `${value.slice(0, args)}...` :
      value;
  }

}
