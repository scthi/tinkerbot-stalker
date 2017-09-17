let expect = require('chai').expect;
let { Tinkerbot } = require('../../../src/tinkerbots/base');
let { LaserScan } = require('../../../src/utils/laser_scan');

describe('LaserScan', () => {
  let tinkerbot = new Tinkerbot(0);
  let laserScan = new LaserScan(tinkerbot);
  laserScan.indicesPerDegree = 6;
  laserScan.targetWidth = 500;
  laserScan.targetDistance = 1400;
  describe('hasFoundEnoughHits', () => {
    it('returns true when enough hits found', () => {
      expect(laserScan.hasFoundEnoughHits(50)).to.equal(true);
    });
  });

});
