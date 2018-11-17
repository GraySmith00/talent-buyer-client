import { capitalize } from '../capitalize';

describe('capitalize', () => {
  it('should capitalize the input', () => {
    expect(capitalize('hello world')).toEqual('Hello World');
  });
});
