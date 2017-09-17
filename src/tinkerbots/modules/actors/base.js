let { BaseModule } = require('../base');

exports.BaseActor = class extends BaseModule {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }

  getTopic() {
    return `${super.getTopic()}/control/${this.constructor.TYPE}/${this.id}`;
  }

  publish(param, payload) {
    payload = payload.toString();
    this.broker.publish(`${this.getTopic()}/${param}`, payload, {qos: 1}, function(){
        console.log("sent ", payload)
    });
  }
}
