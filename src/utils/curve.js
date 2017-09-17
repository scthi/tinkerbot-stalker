exports.Curve = class {

  calculateSteeringLock(wheelDistance, targetAngle, targetDistance) {
    if (targetDistance === 0) {
      throw new Error('Target length needs to be > 0');
    }
    let radians = Math.asin((2 * wheelDistance * Math.sin(targetAngle)) / targetDistance);
    return radians * (180/Math.PI);
    //return Math.asin(radians);
  }

}
