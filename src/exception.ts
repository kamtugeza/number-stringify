import { Stringifier } from './stringifier';

export abstract class Exception<T = number> implements Stringifier<T> {

  constructor(private stringifier: Stringifier) { }

  abstract stringify(value: T): string;
}
