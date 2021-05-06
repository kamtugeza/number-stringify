import { IntParser } from './int-parser';

describe('parse()', () => {
  it('should return an array contains `1` when passed `-1`', () => {
    const result = new IntParser().parse(-1);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(1);
  });
  
  it('should return an array contains `0` when passed `0`', () => {
    const result = new IntParser().parse(0);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(0);
  });
  
  it('should return an array contains `90` when passed `90`', () => {
    const result = new IntParser().parse(90);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(90);
  });
  
  it('should return an array contains `190` when passed `190`', () => {
    const result = new IntParser().parse(190);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(190);
  });
  
  it('should return an array contains `190` and `4` respectively when passed `4190`', () => {
    const result = new IntParser().parse(4190);
    expect(result).toHaveLength(2);
    expect(result[0]).toBe(190);
    expect(result[1]).toBe(4);
  });
  
  it('should return an array contains `000` and `54` respectively when passed `54000`', () => {
    const result = new IntParser().parse(54000);
    expect(result).toHaveLength(2);
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(54);
  });
  
  it('should return an array contains `000`, `054`, `9` respectively when passed `9054000`', () => {
    const result = new IntParser().parse(9054000);
    expect(result).toHaveLength(3);
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(54);
    expect(result[2]).toBe(9);
  });
  
  it('should return an array contains `2` respectively when passed `2.23`', () => {
    const result = new IntParser().parse(2.23);
    expect(result).toHaveLength(1);
    expect(result[0]).toBe(2);
  });
})
