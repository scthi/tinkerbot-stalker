let { BaseSensor } = require('./base');

class InfraredSensor extends BaseSensor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }

  convertPayloadToMillimeters(payload) {
    // TODO FIXME if I got it right, 180 is actually close to the value for nearest objects, ~6 means nothing in front
    return payload / 3.6; // 180 = 50mm
  }
}

Object.defineProperty(InfraredSensor, 'TYPE', {
    value: 'ir_sensor',
    writable : false,
    enumerable : true,
    configurable : false
});

module.exports = { InfraredSensor };
