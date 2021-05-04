export interface Stringifier<T = number> {
  stringify(value: T): string;
}
