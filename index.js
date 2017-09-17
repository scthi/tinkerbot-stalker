// TODO: init tinkerbot
let { TinkerbotStalker } = require("./src/tinkerbots/stalker");
let { InfraredSensor } = require("./src/tinkerbots/modules/sensors/infrared_sensor");
let { LaserScan } = require("./src/utils/laser_scan");
let tinkerbot = new TinkerbotStalker(0);
console.log(`Created a tinkerbot with id ${tinkerbot.id}`);
let ir_sensor = new InfraredSensor(0, tinkerbot);
ir_sensor.subscribe((payload) => {
  console.log(`InfraredSensor payload: ${payload}`);
});
tinkerbot.start();

// let laserScan = new LaserScan(tinkerbot);
// laserScan.scan(1400, 450);
// console.log(`subscribed to laserscan`);

// TODO: init RFID scanner
// TODO: connect RFID with tinkerbot?
