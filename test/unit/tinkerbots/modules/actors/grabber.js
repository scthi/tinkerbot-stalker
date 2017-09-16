let expect = require('chai').expect;
let { Tinkerbot } = require('../../../../../src/tinkerbots/base'),
    { Grabber } = require('../../../../../src/tinkerbots/modules/actors/grabber');

describe('Grabber', () => {
  let tinkerbot = new Tinkerbot(0);
  let modul = new Grabber(0, tinkerbot);

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
      expect(modul.getTopic()).to.equal('tinkerbots/0/control/grabber/0/');
    });
  });
});
