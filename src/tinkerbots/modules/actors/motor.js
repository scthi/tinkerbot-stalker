let { BaseActor } = require('./base');

class Motor extends BaseActor {
  constructor(id, tinkerbot) {
    super(id, tinkerbot);
  }
}

Object.defineProperty(Motor, 'TYPE', {
    value: 'motor',
    writable : false,
    enumerable : true,
    configurable : false
});


module.exports = { Motor };
