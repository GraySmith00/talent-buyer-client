import isEmpty from '../isEmpty';

describe('isEmpty', () => {
  it('should return false is the value is valid', () => {
    expect(isEmpty({ name: 'Bob' })).toEqual(false);
  });
  it('should return true if the value is undefined', () => {
    expect(isEmpty(undefined)).toEqual(true);
  });
  it('should return true if the value is null', () => {
    expect(isEmpty(null)).toEqual(true);
  });
  it('should return true if the value is an empty object', () => {
    expect(isEmpty({})).toEqual(true);
  });
});
