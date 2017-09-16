let Tinkerbot = require('./base.js');

class TinkerbotStalker extends Tinkerbot {
  constructor(id) {
    super(id);

    // all values in millimeters
    const WHEEL_DISTANCE = 125;
    const BODY_LENGTH = 200;
    const GRABBER_OFFSET = 80;

  }
}

module.exports = TinkerbotStalker;
