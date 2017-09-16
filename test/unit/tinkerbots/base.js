let expect = require('chai').expect;
let { Tinkerbot } = require('../../../src/tinkerbots/base');

describe('Tinkerbot', () => {
  describe('constructor', () => {
    let tinkerbot = new Tinkerbot(0);
    expect(tinkerbot).to.have.own.property('id', 0);
    expect(tinkerbot).to.have.own.property('broker');
  });
});
