let { BaseSensor } = require('./base');

class InfraredSensor extends BaseSensor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
    this.payloads = [];
    this.averagePayloads = [];
  }

  determineDistance(payload) {
    this.currentPayload = payload;
    this.handleFIFO(this.payloads, payload, 5);
    let averagePayload = this.calculateAverageOfArray(this.payloads);
    this.handleFIFO(this.averagePayloads, averagePayload, 3); // DISCUSS: maybe use for tendency?
    return this.averagePayloads;
  }

  handleFIFO(array, value, maxValues) {
    if(array.length >= maxValues) {
      this.payloads.shift();
      this.payloads.push(value);
    }
  }

  calculateAverageOfArray(array) {
    let sum = array.reduce(function(sum, value) {
      return sum + value;
    }, 0);
    let average =  sum / array.length;
    return average;
  }
}

Object.defineProperty(InfraredSensor, 'TYPE', {
    value: 'ir_sensor',
    writable : false,
    enumerable : true,
    configurable : false
});

module.exports = { InfraredSensor };
