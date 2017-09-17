let { Tinkerbot } = require('./base');
let { InfraredSensor } = require('./modules/sensors/infrared_sensor');
let { Motor } = require('./modules/actors/motor');
let { Pivot } = require('./modules/actors/pivot');

class TinkerbotStalker extends Tinkerbot {
  constructor(id) {
    super(id);
    this.isFrontClear = true;
    this.isStalking = false;
    this.init();
  }

  init() {
    let infrared_sensor = new InfraredSensor(0, this);
    infrared_sensor.subscribe((payload) => {
      if (payload >= 160) {
        this.isFrontClear = false;
        this.stop();
      }
    });
    let pivot = new Pivot(0, this);
    let motor1 = new Motor(0, this);
    let motor2 = new Motor(1, this);
  }

  move(angle) {
    if (angle < 55 || angle > 120) {
      console.log(`not driving a hard angle (' ,anlge, ')`);
      return;
    }

    //process.exit();
    if (this.isFrontClear && !this.isStalking) {
      this.isStalking = true;
      this.steer(angle);
      let stalker = this;
      // make sure to wait to give the pivot time to steer
      setTimeout(function() {
        this.start();
      }, 5000);
    }
  }

  steer(angle) {
    let pivots = this.getModules(Pivot.TYPE);
    pivots.forEach(pivot => {
      pivot.publish('angle', angle);
    });
  }

  start() {
    let motors = stalker.getModules(Motor.TYPE);
    motors.forEach(motor => {
      motor.publish('speed', '50');
    });
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
