import { Map } from './map';

export const createProxyMap = (map: Map) => new Proxy(map, {
  get(target: Map, name: string) {
    return target[parseInt(name)] || name;
  }
});
