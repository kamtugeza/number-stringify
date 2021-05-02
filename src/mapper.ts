export interface Map {
  [key: number]: string,
}

export interface Mapper {
  get(key: keyof Map): Map[keyof Map],
}
