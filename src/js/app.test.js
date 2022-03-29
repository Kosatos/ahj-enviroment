import demo from './app';

test('demo should return value', () => {
  expect(demo('Marvel')).toEqual('Marvel');
});
