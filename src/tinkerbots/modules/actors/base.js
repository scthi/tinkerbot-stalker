let { BaseModule } = require('../base');

exports.BaseActor = class extends BaseModule {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }

  getTopic() {
    return `${super.getTopic()}/control/${this.constructor.TYPE}/${this.id}`;
  }

  publish(param, payload) {
    this.broker.publish(`${this,getTopic()}/${param}}`, payload);
  }
}
