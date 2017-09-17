let { Tinkerbot } = require('./base');
let { InfraredSensor } = require('./modules/sensors/infrared_sensor');
let { Motor } = require('./modules/actors/motor');
let { Pivot } = require('./modules/actors/pivot');
let { Curve } = require('./utils/curve');

class TinkerbotStalker extends Tinkerbot {
  constructor(id) {
    super(id);
    this.isFrontClear = true;
    this.isStalking = false;
    this.init();
  }

  init() {
    let infrared_sensor = new InfraredSensor(0, this);
<<<<<<< HEAD
    infrared_sensor.subscribe((payload) =>
      // TODO this logic is incomplete / inverted. Probably also related with the conversion function?
      if (infrared_sensor.convertPayloadToMillimeters(payload) <= TinkerbotStalker.SECURITY_OFFSET) {
=======
    infrared_sensor.subscribe((payload) => {
      if (payload >= 100) {
>>>>>>> 907aeb84690531ebf28521a73f86c7d0465586b7
        this.isFrontClear = false;
        this.stop();
      }
    });
    let pivot = new Pivot(0, this);
    let motor1 = new Motor(0, this);
    let motor2 = new Motor(1, this);
  }

  move(angle, targetDistance) {
    if (angle < 55 || angle > 120) {
      console.log(`not driving a hard angle (' ,anlge, ')`);
      return;
    }

    // process.exit();
    if (this.isFrontClear && !this.isStalking) {
      this.isStalking = true;
      let normalizedPivotAngle = 90 - angle;
      let pivotSteer = new Curve().calculateSteeringLock(TinkerbotStalker.WHEEL_DISTANCE, angle, targetDistance);

      this.steer(pivotSteer);
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
    let motors = this.getModules(Motor.TYPE);
    motors.forEach(motor => {
      motor.publish('speed', 70);
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
