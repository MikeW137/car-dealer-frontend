import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newUsed'
})
export class NewUsedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value ? 'New' : 'Used';
  }

}
