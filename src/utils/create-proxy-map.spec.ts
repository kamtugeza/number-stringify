import { createProxyMap } from './create-proxy-map';
import { Map } from './map';

it('get(): should return existing value, instead passed key name', () => {
  const mockMap: Map = {
    1: 'one',
    10: 'ten',
  }
  const proxyMap = createProxyMap(mockMap);
  expect(proxyMap[1]).toBe('one');
  expect(proxyMap[10]).toBe('ten');
  expect(proxyMap[101]).toBe('101');
  expect(proxyMap['some']).toBe('some');
})
