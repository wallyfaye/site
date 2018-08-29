import { assert } from 'chai';

import demo from '../src/demo';

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('demo', () => {
  it('should return 123', () => {
    assert.equal(demo.demo, 123);
  });
});
