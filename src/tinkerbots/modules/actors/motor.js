let { BaseActor } = require('./base');

exports.Motor = class extends BaseActor {
  constructor(id, tinkerbot) {
    super(id, tinkerbot);
    this.TYPE = "motor";
    this.init();
  }
}
