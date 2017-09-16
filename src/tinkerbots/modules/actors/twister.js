let { BaseActor } = require('./base');

class Twister extends BaseActor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }
}

Object.defineProperty(Twister, 'TYPE', {
    value: 'twister',
    writable : false,
    enumerable : true,
    configurable : false
});

module.exports = { Twister };
