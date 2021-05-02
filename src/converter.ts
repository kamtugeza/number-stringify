import { Map } from './mapper';

export interface Converter {
  convert(value: any): Map[keyof Map];
}
