import { ReturnStatement } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TempraturePipe implements PipeTransform {
  transform(
    value: string | number | null,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ) {
    if (!value) {
      return value;
    }
    let val: number;

    if (typeof value == 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let outputTemprature: number;
    if (inputType === 'cel' && outputType === 'fah') {
      outputTemprature = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outputTemprature = (val - 32) * (5 / 9);
    } else {
      outputTemprature = val;
    }

    let symbol: '°C' | '°F';
    if (!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }

    return `${outputTemprature.toFixed(2)} ${symbol}`;
  }
}
