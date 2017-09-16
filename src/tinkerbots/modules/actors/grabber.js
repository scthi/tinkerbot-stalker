let { BaseActor } = require('./base');

class Grabber extends BaseActor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }
}

Object.defineProperty(Grabber, 'TYPE', {
    value: 'grabber',
    writable : false,
    enumerable : true,
    configurable : false
});

module.exports = { Grabber };
