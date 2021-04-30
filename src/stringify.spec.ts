import { stringify } from './stringify';

it('should return `5` (string) when passed `5` (number)', () => {
    expect(stringify(5)).toBe('5');
})