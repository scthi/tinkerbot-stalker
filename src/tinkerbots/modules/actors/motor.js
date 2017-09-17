let { BaseActor } = require('./base');

class Motor extends BaseActor {
  constructor(id, tinkerbot) {
    super(id, tinkerbot);
    this.stop();
  }

  speedUpBy(value) {
    let speed = this.currentSpeed - value;
    this.__adjustSpeed(speed);
  }

  slowDownBy(value) {
    let speed = this.currentSpeed + value;
    this.__adjustSpeed(speed);
  }

  stop() {
    this.__adjustSpeed(90);
  }

  __adjustSpeed(value) {
    this.publish('speed', value);
    this.currentSpeed = speed;
  }
}

Object.defineProperty(Motor, 'TYPE', {
    value: 'motor',
    writable : false,
    enumerable : true,
    configurable : false
});


module.exports = { Motor };
