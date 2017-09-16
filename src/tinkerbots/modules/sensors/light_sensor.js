let { BaseSensor } = require('./base');

exports.LightSensor = class extends BaseSensor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
    this.TYPE = "light_sensor";
    
  }
}
