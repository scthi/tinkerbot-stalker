let expect = require('chai').expect;
let { TinkerbotStalker } = require('../../../src/tinkerbots/stalker.js');

describe('TinkerbotStalker', () => {
  let tinkerbot = new TinkerbotStalker(0);

  describe('constructor', () => {
    it('instantiates a tinkerbot with id 0 and a broker', () => {
      expect(tinkerbot).to.have.a.property('id', 0);
      expect(tinkerbot).to.have.own.property('broker');
    });
  });

  describe('getTopic', () => {
    it('returns part of the tinkerbot\'s topic', () => {
      expect(tinkerbot.getTopic()).to.equal('tinkerbots/0');
    });
  });
});
