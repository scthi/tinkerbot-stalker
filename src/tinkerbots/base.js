let broker = require('../connections/base.js');

exports.Tinkerbot = class {
  /**
   * Instantiate a tinkerbot with given id and options.
   * @param  {Integer} id id, also used for mqtt
   * @param  {Array of strings} modules sensors and actors - e.g. {pivot: [0 , 1]}
   * @return {Tinkerbot} a tinkerbot instance
   */
  constructor(id) {
    this.id = id;
    this.broker = broker;
    this.modules = [];
  }

  getTopic() {
    return `tinkerbots/${this.id}`;
  }

  addModule(module) {
    if (!this.modules.includes(module)) {
      this.modules.push(module);
    }
  }

  hasModule(module) {
    return this.modules.includes(module);
  }

  removeModule(module) {
    this.modules.remove(module);
  }
};
