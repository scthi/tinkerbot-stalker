let { BaseModule } = require('../base');

exports.BaseSensor = class extends BaseModule {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }
}
