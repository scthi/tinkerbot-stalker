let { BaseActor } = require('./base');

class Pivot extends BaseActor {
  constructor(id, tinkerbot){
    super(id, tinkerbot);
  }
}

Object.defineProperty(Pivot, 'TYPE', {
    value: 'pivot',
    writable : false,
    enumerable : true,
    configurable : false
});

module.exports = { Pivot };
