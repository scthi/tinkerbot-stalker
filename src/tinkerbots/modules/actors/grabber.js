let { BaseActor } = require('./base');

exports.Grabber = class extends BaseActor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
    this.TYPE = "grabber";
    this.init();
  }
}
