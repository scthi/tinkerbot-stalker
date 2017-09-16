let expect = require('chai').expect;
let { Tinkerbot } = require('../../../../../src/tinkerbots/base'),
    { Pivot } = require('../../../../../src/tinkerbots/modules/actors/pivot');

describe('Pivot', () => {
  let tinkerbot = new Tinkerbot(0);
  let modul = new Pivot(0, tinkerbot);

  describe('constructor', () => {
    it('instantiates a module, adds it to its tinkerbot and inits', () => {
      expect(modul).to.have.own.property('id', 0);
      expect(modul).to.have.own.property('tinkerbot', tinkerbot);
      expect(tinkerbot).to.have.own.property('modules');
      expect(tinkerbot.hasModule(modul)).to.be.true;
    });
  });

  describe('getTopic', () => {
    it('returns its topic', () => {
      expect(modul.getTopic()).to.equal('tinkerbots/0/control/pivot/0');
    });
  });
});
