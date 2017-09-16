let { BaseSensor } = require('./base');

exports.InfraredSensor = class extends BaseSensor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
    this.TYPE = "ir_sensor";
    
  }
}
