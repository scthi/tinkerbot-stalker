let broker = require('../../connections/base');

exports.BaseModule = class {
  constructor(id, tinkerbot) {
    this.id = id;
    this.broker = broker;
    this.tinkerbot = tinkerbot;
    tinkerbot.addModule(this);
  }

  init() {
    broker.subscribe(this.getTopic());
  }

  getTopic() {
    return `${this.tinkerbot.getTopic()}/${this.TYPE}/${this.id}`;
  }
}
