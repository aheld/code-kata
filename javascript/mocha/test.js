var should = require('chai').should();

var calc = require('./calculator.js');

describe('Calculator', function() {
  describe('#add', function() {
    it('should return 0 when the value is not present', function() {
      calc.add('').should.equal(0);
    });
  });
});
