import { IntThousandExp } from './int-thousand-exp';
import { Stringifier } from '../stringifier';

class MockStr implements Stringifier {
  
  stringify(value: number) {
    return `${value}`;
  }
}

describe('stringify()', () => {

  it('should return `-1` when passed value is `-1`', () => {
    expect(new IntThousandExp(new MockStr()).stringify(-1)).toBe('-1');
  });

  it('should return `0.45` when passed value is `0.45`', () => {
    expect(new IntThousandExp(new MockStr()).stringify(0.45)).toBe('0.45');
  });

  it('should return `7023` when passed value is `7023`', () => {
    expect(new IntThousandExp(new MockStr()).stringify(7023)).toBe('7023');
  });

  it('should return `123456` when passed value is `123456`', () => {
    expect(new IntThousandExp(new MockStr()).stringify(123456)).toBe('123456');
  });

  it('should return `sixty-eight hundred and one` when passed value is `6801.99`', () => {
    expect(new IntThousandExp(new MockStr()).stringify(6801)).toBe('sixty-eight hundred and one');
  });
});
