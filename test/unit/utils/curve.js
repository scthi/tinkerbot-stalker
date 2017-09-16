let expect = require('chai').expect;
let { Curve } = require('../../../src/utils/curve');

describe('Curve', () => {
  describe('calculateSteeringLock', () => {
    it('calculates correctly', () => {
      let curve = new Curve();
      expect(curve.calculateSteeringLock(125,90,1000)).to.equal(12.914639406356505);
    });
  });

  describe('guardAgainstDivisionByZero', () => {
    it('throws exception when trying to divide by zero', () => {
      let curve = new Curve();
      expect(() => curve.calculateSteeringLock(1,2,0)).to.throw(Error, 'Target length needs to be > 0');
    });
  });
});
