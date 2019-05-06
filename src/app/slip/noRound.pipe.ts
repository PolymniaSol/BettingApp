import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'DecimalPipe'})
export class NumNotRoundPipe implements PipeTransform {
  transform(value: number): number {
    var num = Math.floor(value * 100) / 100;
    return num;
  }
}