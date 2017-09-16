let { BaseModule } = require('../base');

exports.BaseActor = class extends BaseModule {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }

  getTopic() {
    return `${super.getTopic()}/`;
  }
}
