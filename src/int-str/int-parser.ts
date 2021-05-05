export const SLICE_BY_1_DIGITS = 1;
export const SLICE_BY_2_DIGITS = 2;
export const SLICE_BY_3_DIGITS = 3;

export abstract class IntParserBase {
  readonly minStep = 10;
  protected _stepSize: number;
  
  constructor(protected _sliceBy: number = SLICE_BY_3_DIGITS) {
    this._stepSize = Math.pow(this.minStep, this._sliceBy);
  };

  abstract parse(valye: number): number[];
}

export class IntParser extends IntParserBase {

  parse(value: number) {
    const numbAbs = Math.floor(Math.abs(value));
    
    if (numbAbs < this._stepSize) return [ numbAbs ];
    
    const numbStr = numbAbs.toString(10);
    const calcBase = this._sliceBy * -1;
    const result: number[] = [];
    let step = 0;
    let stepVal = '';
    
    do {
      if (stepVal.length > 0) result.push(parseInt(stepVal, 10));
      const start = calcBase * (step + 1);
      const end = calcBase * step;
      stepVal = step > 0 ? numbStr.slice(start, end) : numbStr.slice(start);
      step++;
    } while (stepVal.length > 0);

    return result;
  }
}
