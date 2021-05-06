import { Map, INT_MAP, INT_LABEL_MAP } from './int-map';

export abstract class IntMapperBase {

  constructor(
    protected _intMap: Map = INT_MAP,
    protected _labelMap: Map = INT_LABEL_MAP,
  ) { }

  abstract mapTenth(value: number, step?: number): string;

  abstract mapHundredth(value: number, step?: number): string;

  abstract mapThousandth(value: number, step?: number): string;
}

export class IntMapper extends IntMapperBase{
  readonly ten = 10;
  readonly hundred = 100;
  readonly thousand = 1000;

  mapTenth = (value: number, isEmptyStrAllowed = 0) => {
    const numb = value % this.hundred;

    if (numb === 0 && isEmptyStrAllowed) return '';
    if (numb < 20) return this._mapInt(numb);

    const ones = numb % this.ten;
    const tenth = numb - ones;

    return [tenth, ones]
      .filter(key => key > 0)
      .map(this._mapInt)
      .join('-');
  }

  mapHundredth = (value: number, isEmptyStrAllowed = 0) => {
    const numb = value % Math.pow(this.hundred, 2); // the max number that might be mapped is 9999
    const isTwoDigits = numb < this.hundred;
    const isZeroAllowed = isTwoDigits && !isEmptyStrAllowed ? 0 : 1;
    const tenth = this.mapTenth(value, isZeroAllowed);

    if (isTwoDigits) return tenth;

    const hundredthKey = Math.floor(value / this.hundred);
    const hundredth = this.mapTenth(hundredthKey);
    const hundredthLabled = hundredth ? `${hundredth} ${this._mapLabel(0)}` : '';

    return [hundredthLabled, tenth]
      .filter(digits => digits.length)
      .join(` and `);
  }

  mapThousandth = (value: number, step = 0) => {
    const numb = value % this.thousand;
    const hundredth = this.mapHundredth(numb, step);
    const isHundredth = step === 0;

    if (isHundredth) return hundredth;

    return hundredth ? `${hundredth} ${this._mapLabel(step)}` : '';
  }

  private _mapInt = (key: number) => this._intMap[key] ?? '';

  private _mapLabel = (key: number) => this._labelMap[key] ?? '';
}
