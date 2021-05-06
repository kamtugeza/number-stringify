import { IntStr } from './int-str';

describe('stringify()', () => {

  it('should return `zero` when passed value is `0`', () => {
    expect(new IntStr().stringify(0)).toBe('zero');
  });

  it('should return `one hundred and fourty-four` when passed value is `-144`', () => {
    expect(new IntStr().stringify(-144)).toBe('one hundred and fourty-four');
  });

  it('should return `one million twenty-nine` when passed value is `1000029`', () => {
    expect(new IntStr().stringify(1000029)).toBe('one million twenty-nine');
  });

  it('should return `nine hundred and ninety-nine million nine hundred and ninety-nine` when passed value is `999000999`', () => {
    expect(new IntStr().stringify(999000999)).toBe('nine hundred and ninety-nine million nine hundred and ninety-nine');
  });
});
