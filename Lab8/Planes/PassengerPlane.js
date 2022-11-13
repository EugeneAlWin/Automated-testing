const { Plane } = require('./plane.js');

class PassengerPlane extends Plane {
  constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
    super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
    this._passengersCapacity = passengersCapacity;
  }

  get passengersCapacity() {
    return this._passengersCapacity;
  }

  set passengersCapacity(passengerCapacity) {
    this._passengersCapacity = passengerCapacity;
  }
}

module.exports = { PassengerPlane };
