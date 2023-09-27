import classNames from './classNames';

describe('classNames', () => {
  it('joins class names together', () => {
    expect(classNames('foo')).toBe('foo');
    expect(classNames('foo', { bar: true })).toBe('foo bar');
    expect(classNames('foo', { bar: true, biz: false }, ['baz', 'buz'])).toBe('foo baz buz bar');
  });

  it('filters falsy mods', () => {
    expect(classNames('foo', { bar: false })).toBe('foo');
  });

  it('handles additional class names', () => {
    expect(classNames('foo', {}, ['baz'])).toBe('foo baz');
  });
});
