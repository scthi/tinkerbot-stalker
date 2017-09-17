let client = require('../connections/base')
let { Curve } = require('./curve');

const TOLERANCE = 100;
const COVERAGE = 190;
const ABSOLUTE_SCANNER_DEGREE_RATIO = 1.6 / 90;
/*
  Big pile of mud. Sorry :)
*/
exports.LaserScan = class LaserScan {

  constructor(stalkerbot) {
    this.stalkerbot = stalkerbot;
    this.lastAngles = [];
    this.hitCount = 0;
  }

  scan(targetDistance, targetWidth) {
    console.log(ABSOLUTE_SCANNER_DEGREE_RATIO);
    this.targetDistance = targetDistance;
    this.targetWidth = targetWidth;
    //client.subscribe('io/cybus/energie-campus/sick/7/laserscanner/eg/halle/scan');
    client.subscribe('io/cybus/energie-campus/sick/3/laserscanner/og/flur/scan');
    client.on('message', (topic, message) => {
      //if (topic == 'io/cybus/energie-campus/sick/7/laserscanner/eg/halle/scan') {
      if (topic == 'io/cybus/energie-campus/sick/3/laserscanner/og/flur/scan') {
        let payload = JSON.parse(message.toString());
        console.log('minAngle=', Math.min.apply(null, payload.angles), '; maxAngle=', Math.max.apply(null, payload.angles));
        this.indicesPerDegree = payload.distances.length / COVERAGE;
        console.log('indicesPerDegree=', this.indicesPerDegree);

        let minValue = Math.min.apply(null, payload.distances);
        let indexOfMinValue = this.getIndexOfValue(minValue, payload.distances);

        if (Math.abs(minValue - targetDistance) > TOLERANCE) {
          console.log('useless minvalue ', minValue);
        } else {
          let targetAngleIndex = this.findTargetAngleIndex(indexOfMinValue, payload.distances);
          if (targetAngleIndex >= 0) {
            let targetAngle = Math.abs(payload.angles[targetAngleIndex] / ABSOLUTE_SCANNER_DEGREE_RATIO);
            let averageAngle = this.calcAverageAngle(targetAngle);

            if (averageAngle > -1) {
              this.stalkerbot.move(180 - averageAngle, targetDistance);
            } else {
              // we do nothing and wait for more hits. Maybe the target moved.
            }
          } else {
            return -1;
          }
        }
      }
    });
  }

  calcAverageAngle(currentAngle) {
    console.log('calcAverageAngle with currentAngle=', currentAngle, '; hitcount=', this.hitCount);
    if (this.hitCount >= 10) {
      let sum = 0.0;
      for( var i = 0; i < this.lastAngles.length; i++ ){
          sum = sum + parseFloat(this.lastAngles[i]); //don't forget to add the base
      }
      let avg = sum / this.lastAngles.length;
      this.hitCount = 0;
      if (Math.abs(currentAngle - avg) > 20) {
        // target moved away
      } else {
        return avg;
      }

    } else {
      this.hitCount++;
      if (this.lastAngles.length > 80) {
        this.lastAngles.shift();
      }
      this.lastAngles.push(currentAngle);
    }

    return -1;
  }

  findTargetAngleIndex(indexOfMinValue, distances) {

    let upperBound = this.targetDistance + TOLERANCE;
    let lowerBound = this.targetDistance - TOLERANCE;

    let foundIndices = 0;
    let leftIndex;
    let rightIndex;

    // first search left
    for (var i=indexOfMinValue; i >= 0; i--) {
      let value = distances[i];

      console.log('left searching for lowerBound ', lowerBound, '; upperBound ', upperBound, '; value=', value);
      if (value >= lowerBound && value <= upperBound && !this.hasFoundEnoughHits(foundIndices)) {
        console.log('left search hit');
        foundIndices++;
      } else {
        console.log('stopping left-search with ', foundIndices, ' found indices');
        leftIndex = i;
        break;
      }
    }

    // now search right
    for (var i=indexOfMinValue; i < distances.length; i++) {
      let value = distances[i];

      console.log('right searching for lowerBound ', lowerBound, '; upperBound ', upperBound, '; value=', value);
      if (value >= lowerBound && value <= upperBound && !this.hasFoundEnoughHits(foundIndices)) {
        console.log('right search hit');
        foundIndices++;
      } else {
        console.log('stopping right-search with ', foundIndices, ' found indices');
        rightIndex = i;
        break;
      }
    }

    let hasHit = this.hasFoundEnoughHits(foundIndices);
    if (hasHit) {
      let midAngleIndex = leftIndex + (rightIndex - leftIndex);
      console.log('found hit');
      return midAngleIndex;
    } else {
      return -1;
    }
  }

  hasFoundEnoughHits(foundIndices) {
    let requiredIndices = this.getRequiredIndicesForHit();
    return Math.abs(foundIndices - requiredIndices) < 80;
  }

  getRequiredIndicesForHit() {
    let a = this.targetWidth / 2;
    let b = this.targetDistance;
    // do me pythagoras
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    let angleX = Math.asin(a / c) * (180/Math.PI) * 2;

    return angleX * this.indicesPerDegree;
  }

  getIndexOfValue(element, array) {
    for (var i=0; i < array.length; i++) {
      if(array[i] == element) {
        return i;
      }
    }
    return -1;
  }
}
