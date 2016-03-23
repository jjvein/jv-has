var assert = require('assert')
var has = require('../index.js')

describe('test', function() {
  describe('has', function() {
        it('Obejct test', function() {
            assert.equal(false, has({}, 'hasOwnProperty'));
            assert.equal(true, has(Object.prototype, 'hasOwnProperty'));
        });
        it('other test', function() {
            assert.equal(false, has([1,2,3], 4));
            assert.equal(false, has({name: 'Jjvein'}, 'age'));
        });
  });
});
