let { BaseModule } = require('../base');

exports.BaseSensor = class extends BaseModule {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }

  getTopic() {
    return `${super.getTopic()}/status/${this.constructor.TYPE}/${this.id}/`;
  }

  subscribe(callback) {
    this.broker.subscribe(this.getTopic());
    this.broker.on('message', (topic, message, packet) => {
      if (this.getTopic() === packet.topic) {
        callback(JSON.parse(packet.payload.toString()));
      }
    });
  }
}
