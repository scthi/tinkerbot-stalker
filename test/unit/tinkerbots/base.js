let expect = require('chai').expect;
let { Tinkerbot } = require('../../../src/tinkerbots/base');

describe('Tinkerbot', () => {
  let tinkerbot = new Tinkerbot(0);

  describe('constructor', () => {
    it('instantiates a tinkerbot with id 0 and a broker', () => {
      expect(tinkerbot).to.have.own.property('id', 0);
      expect(tinkerbot).to.have.own.property('broker');
    });
  });

  describe('getTopic', () => {
    it('returns part of the tinkerbot\'s topic', () => {
      expect(tinkerbot.getTopic()).to.equal('tinkerbots/0');
    });
  });
});
