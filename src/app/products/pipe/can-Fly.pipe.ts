import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: false
})

export class CanFly implements PipeTransform {

  transform(value: boolean): string {
    return ( value ? 'Vuela' :'No vuela');
  }


}
