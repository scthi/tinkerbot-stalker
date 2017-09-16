let { Tinkerbot } = require('./base');
let { InfraredSensor } = require('./modules/sensors/infrared_sensor');
let { Motor } = require('./modules/actors/motor');

class TinkerbotStalker extends Tinkerbot {
  constructor(id) {
    super(id);
    this.isFrontClear = true;
    this.init();
  }

  init() {
    let infrared_sensor = new InfraredSensor(0, this);
    infrared_sensor.subscribe((payload) => {
      if (infrared_sensor.convertPayloadToMillimeters(payload) <= TinkerbotStalker.SECURITY_OFFSET) {
        this.isFrontClear = false;
        this.stop();
      }
    });
  }

  move(angle) {
    if (this.isFrontClear) {
      //TODO: move to target
    }
  }

  stop() {
    let motors = this.getModules(Motor.TYPE);
    motors.forEach(motor => {
      motor.publish('speed', 90);
    });
  }
}

Object.defineProperty(TinkerbotStalker, 'WHEEL_DISTANCE', {
    value: 125, // in mm
    writable : false,
    enumerable : true,
    configurable : false
});

Object.defineProperty(TinkerbotStalker, 'BODY_LENGTH', {
    value: 200, // in mm
    writable : false,
    enumerable : true,
    configurable : false
});

Object.defineProperty(TinkerbotStalker, 'SECURITY_OFFSET', {
    value: 50, // in mm
    writable : false,
    enumerable : true,
    configurable : false
});

module.exports = { TinkerbotStalker };
