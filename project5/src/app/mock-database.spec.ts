import { MockDatabase } from './mock-database';

describe('MockDatabase', () => {
  it('should create an instance', () => {
    expect(new MockDatabase()).toBeTruthy();
  });
});
