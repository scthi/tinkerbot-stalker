let client = require('../connections/base')

exports.LaserScan = class LaserScan {
  constructor(tinkerbot) {
    this.tinkerbot = tinkerbot;

    client.subscribe('io/cybus/energie-campus/sick/7/laserscanner/eg/halle/scan');
    client.on('message', (topic, message) => {
      if (topic == 'io/cybus/energie-campus/sick/7/laserscanner/eg/halle/scan') {
        let payload = JSON.parse(message.toString());
        //console.log('received ', payload.angles.length, 'angles');
        console.log('max(): ', Math.max.apply(null, payload.angles));
      }
    });
  }
}
