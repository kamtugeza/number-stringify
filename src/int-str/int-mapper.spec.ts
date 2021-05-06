import { IntMapper } from './int-mapper';

describe('mapTenth()', () => {
  it('should return empty string when passed value is negative integer', () => {
    expect(new IntMapper().mapTenth(-1, 0)).toBe('');
  });

  it('should return `zero` when passed value is `0`', () => {
    expect(new IntMapper().mapTenth(0, 0)).toBe('zero');
  });

  it('should return empty string when passed value is `0` and mapping thousandth', () => {
    expect(new IntMapper().mapTenth(0, 1)).toBe('');
  });

  it('should return `eleven` when passed value is `11`', () => {
    expect(new IntMapper().mapTenth(11, 0)).toBe('eleven');
  });

  it('should return `fourty-one` when passed value is `41`', () => {
    expect(new IntMapper().mapTenth(41, 0)).toBe('fourty-one');
  });

  it('should return `ninety` when passed value is `90`', () => {
    expect(new IntMapper().mapTenth(90, 0)).toBe('ninety');
  });

  it('should return `ninety` when passed value is `190`', () => {
    expect(new IntMapper().mapTenth(190, 0)).toBe('ninety');
  });
});

describe('mapHundredth()', () => {
  it('should return empty string when passed value is negative integer', () => {
    expect(new IntMapper().mapHundredth(-1, 0)).toBe('');
  });

  it('should return `zero` when passed value is `0`', () => {
    expect(new IntMapper().mapHundredth(0, 0)).toBe('zero');
  });

  it('should return empty string when passed value is `0` and mapping thousandth', () => {
    expect(new IntMapper().mapHundredth(0, 1)).toBe('');
  });

  it('should return `eleven` when passed value is `11`', () => {
    expect(new IntMapper().mapHundredth(11, 0)).toBe('eleven');
  });

  it('should return `one hundred` when passed value is `100`', () => {
    expect(new IntMapper().mapHundredth(100, 0)).toBe('one hundred');
  });

  it.skip('should return `nine hundred and twelve` when passed value is `912`', () => {
    expect(new IntMapper().mapHundredth(912, 0)).toBe('nine hundred and twelve');
  });

  it.skip('should return `nineteen hundred ` when passed value is `1900`', () => {
    expect(new IntMapper().mapHundredth(1900, 0)).toBe('nineteen hundred');
  });

  it.skip('should return `zero` when passed value is `190000`', () => {
    expect(new IntMapper().mapHundredth(190000, 0)).toBe('zero');
  });
});

describe('mapThousandth()', () => {
  it('should return empty string when passed value is negative integer', () => {
    expect(new IntMapper().mapThousandth(-1, 0)).toBe('');
  });

  it('should return `zero` when passed value is `0`', () => {
    expect(new IntMapper().mapThousandth(0, 0)).toBe('zero');
  });

  it('should return empty string when passed value is `0` and mapping thousandth', () => {
    expect(new IntMapper().mapThousandth(0, 1)).toBe('');
  });

  it('should return `eleven` when passed value is `11`', () => {
    expect(new IntMapper().mapThousandth(11, 0)).toBe('eleven');
  });

  it('should return `one hundred` when passed value is `100`', () => {
    expect(new IntMapper().mapThousandth(100, 0)).toBe('one hundred');
  });

  it('should return `zero` when passed value is `1000`', () => {
    expect(new IntMapper().mapThousandth(1000, 0)).toBe('zero');
  });

  it('should return `one thousand` when passed value is `1` and mapping thousandth', () => {
    expect(new IntMapper().mapThousandth(1, 1)).toBe('one thousand');
  });

  it('should return `twelve million` when passed value is `12` and mapping million', () => {
    expect(new IntMapper().mapThousandth(12, 2)).toBe('twelve million');
  });
});
