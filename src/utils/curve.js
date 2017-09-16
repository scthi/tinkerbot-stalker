

class Curve {

  calculateSteeringLock(wheelDistance, targetAngle, targetDistance) {
    return Math.asin((2 * wheelDistance * Math.sin(targetAngle)) / targetDistance);
  }

}

module.exports = Curve;
