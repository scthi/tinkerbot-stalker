let broker = require('../connections/base.js');

class Tinkerbot {
  constructor(id) {
    this.id = id;
    this.broker = broker;
  }
};

module.exports = Tinkerbot;
