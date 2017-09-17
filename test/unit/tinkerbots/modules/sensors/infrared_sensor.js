let expect = require('chai').expect;
let { Tinkerbot } = require('../../../../../src/tinkerbots/base'),
    { InfraredSensor } = require('../../../../../src/tinkerbots/modules/sensors/infrared_sensor');

describe('InfraredSensor', () => {
  let tinkerbot = new Tinkerbot(0);
  let modul = new InfraredSensor(0, tinkerbot);

  describe('constructor', () => {
    it('instantiates a module, adds it to its tinkerbot and inits', () => {
      expect(modul).to.have.own.property('id', 0);
      expect(modul).to.have.own.property('tinkerbot', tinkerbot);
      expect(modul.constructor.TYPE).to.equal('ir_sensor');
      expect(tinkerbot).to.have.own.property('modules');
      expect(tinkerbot.hasModule(modul)).to.be.true;
    });
  });

  describe('getTopic', () => {
    it('returns its topic', () => {
      expect(modul.getTopic()).to.equal('tinkerbots/0/status/ir_sensor/0/');
    });
  });

  describe('convertPayloadToMillimeters', () => {
    xit('converts payload correctly to mm', () => {
      expect(modul.convertPayloadToMillimeters(180)).to.equal(50);
    });
  });
});
