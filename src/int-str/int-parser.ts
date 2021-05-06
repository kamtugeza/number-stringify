export abstract class IntParserBase {
  
  abstract parse(valye: number): number[];
}

export class IntParser extends IntParserBase {
  readonly _sliceBy = 3;
  readonly _stepSize = 1000;

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
