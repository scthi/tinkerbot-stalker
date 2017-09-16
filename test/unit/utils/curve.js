let expect = require("chai").expect;
let assert = require("chai").assert;
let Curve = require("../../../src/utils/curve");

describe("Curve", () => {
  describe('calculation', () => {
    let curve = new Curve();
    assert.equal(curve.calculateSteeringLock(125,90,500), 26.551262509077013);
  });
  describe('guardAgainstDivisionByZero', () => {
    let curve = new Curve();
    expect(() => curve.calculateSteeringLock(1,2,0)).to.throw(Error, 'Target length needs to be > 0');
  });
});
