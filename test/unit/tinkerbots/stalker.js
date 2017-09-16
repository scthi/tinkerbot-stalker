let expect = require('chai').expect;
let { TinkerbotStalker } = require('../../../src/tinkerbots/stalker.js');

describe('TinkerbotStalker', () => {
  describe('init', () => {
    let tinkerbot = new TinkerbotStalker(0);
    expect(tinkerbot).to.have.a.property('id', 0);
    expect(tinkerbot).to.have.own.property('broker');
  });
});
