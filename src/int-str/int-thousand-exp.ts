import { Exception } from '../exception';
import { Stringifier } from '../stringifier';
import { IntMapper, IntMapperBase } from './int-mapper';

export class IntThousandExp extends Exception {
  readonly maxExp = 10000;

  constructor(
    stringifier: Stringifier,
    private mapper: IntMapperBase = new IntMapper()
  ) {
    super(stringifier);
  }

  stringify(value: number) {
    const numb = Math.floor(Math.abs(value));
    const isExpNumb = numb < 10000; // the max int that might be an exception is 9999;
    const isHundredthExist = numb % 1000 >= 100;

    return isExpNumb && isHundredthExist
      ? this.mapper.mapHundredth(numb)
      : this.stringifier.stringify(value);
  }
}
