let expect = require("chai").expect;
let Tinkerbot = require("../../../src/tinkerbots/base.js");

describe("Tinkerbot", () => {
  describe('init', () => {
    let tinkerbot = new Tinkerbot(0);
    expect(tinkerbot).to.have.a.property('id', 0);
  });
});
