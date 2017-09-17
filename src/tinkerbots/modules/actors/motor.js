let { BaseActor } = require('./base');

class Motor extends BaseActor {
  constructor(id, tinkerbot) {
    super(id, tinkerbot);

    // TODO I needed this as a quick hack, as the getModules method always find this.TYPE to be undefined
    // (with this instanceof Motor (or Pivot))
    // Not sure why this fixes / what the actual problem is
    this.TYPE = 'motor';
  }

}

Object.defineProperty(Motor, 'TYPE', {
    value: 'motor',
    writable : false,
    enumerable : true,
    configurable : false
});


module.exports = { Motor };
