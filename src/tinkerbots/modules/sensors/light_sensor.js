let { BaseSensor } = require('./base');

class LightSensor extends BaseSensor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }
}

Object.defineProperty(LightSensor, 'TYPE', {
    value: 'light_sensor',
    writable : false,
    enumerable : true,
    configurable : false
});

module.exports = { LightSensor };
