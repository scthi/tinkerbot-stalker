let { BaseActor } = require('./base');

exports.Twister = class extends BaseActor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
    this.TYPE = "twister";
  }
}
