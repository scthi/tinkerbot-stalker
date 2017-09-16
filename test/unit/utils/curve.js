let expect = require("chai").expect;
let assert = require("chai").assert;
let Curve = require("../../../src/utils/curve");

describe("Curve", () => {
  describe('calculation', () => {
    let curve = new Curve();
    assert.equal(curve.calculateSteeringLock(1,2,3), 0.6512716857674453);
  });
});
