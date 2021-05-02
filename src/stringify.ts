import { Converter } from './converter';

export class Stringify {

  constructor(private converter: Converter) { }

  convert(value: any) {
    return this.converter.convert(value);
  }
}
