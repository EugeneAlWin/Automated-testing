class Plane {
  constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity) {
    this._model = model;
    this._maxSpeed = maxSpeed;
    this._maxFlightDistance = maxFlightDistance;
    this._maxLoadCapacity = maxLoadCapacity;
  }

  get model() {
    return this._model;
  }

  get maxSpeed() {
    return this._maxSpeed;
  }

  get maxFlightDistance() {
    return this._maxFlightDistance;
  }

  get maxLoadCapacity() {
    return this._maxLoadCapacity;
  }

  set model(modelValue) {
    this._model = modelValue;
  }

  set maxSpeed(maxSpeedValue) {
    this._maxSpeed = maxSpeedValue;
  }

  set maxFlightDistance(MaxFlightDistanceValue) {
    this._maxFlightDistance = MaxFlightDistanceValue;
  }

  set maxLoadCapacity(maxLoadCapacityValue) {
    this._maxLoadCapacity = maxLoadCapacityValue;
  }
}

module.exports = { Plane };
