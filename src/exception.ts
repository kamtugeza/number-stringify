import { Stringifier } from './stringifier';

export abstract class Exception<T = number> implements Stringifier<T> {

  constructor(protected stringifier: Stringifier) { }

  abstract stringify(value: T): string;
}
