import { assert } from 'chai';

import demo from '../src/demo';

describe('demo', () => {
  it('should return 123', () => {
    assert.equal(demo.demo, 123);
  });
});
