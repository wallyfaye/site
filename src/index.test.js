import test from './mocha-test'
import { assert } from 'chai';

export default function index() {
  describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal([1,2,3].indexOf(1), 0);
      });
    });
  });
}