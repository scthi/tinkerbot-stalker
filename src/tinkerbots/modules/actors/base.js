let { BaseModule } = require('../base');

exports.BaseActor = class extends BaseModule {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }

  getTopic() {
    return `${super.getTopic()}/control/${this.TYPE}/${this.id}`;
  }

  publish(param, message) {
    this.broker.publish(`${this,getTopic()}/${param}}`, message);
  }
}
