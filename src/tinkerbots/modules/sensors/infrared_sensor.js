let { BaseSensor } = require('./base');

class InfraredSensor extends BaseSensor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }

  convertPayloadToMillimeters(payload) {
    // TODO find and implement accurate formula
  }
}

Object.defineProperty(InfraredSensor, 'TYPE', {
    value: 'ir_sensor',
    writable : false,
    enumerable : true,
    configurable : false
});

module.exports = { InfraredSensor };
