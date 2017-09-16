let expect = require('chai').expect;
let { Tinkerbot } = require('../../../../src/tinkerbots/base'),
    { BaseModule } = require('../../../../src/tinkerbots/modules/base');

describe('BaseModule', () => {
  describe('constructor', () => {
    it('instantiates a module and adds it to its tinkerbot', () => {
      let tinkerbot = new Tinkerbot(0);
      let base_module = new BaseModule(0, tinkerbot);
      expect(base_module).to.have.own.property('id', 0);
      expect(base_module).to.have.own.property('tinkerbot', tinkerbot);
      expect(tinkerbot).to.have.own.property('modules');
      expect(tinkerbot.hasModule(base_module)).to.be.true;
    });
  });
});
