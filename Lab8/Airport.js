const { PassengerPlane } = require('./planes/PassengerPlane');
const { MilitaryPlane } = require('./planes/MilitaryPlane');
const { ExperimentalPlane } = require('./planes/ExperimentalPlane');
const { MILITARY_TYPE } = require('./models/MilitaryType');

//laba6git
class Airport {
  constructor(planes) {
    this.planes = planes;
  }

  getPassengerPlanes() {
    return this.planes.filter((planes) => planes instanceof PassengerPlane);
  }

  getMilitaryPlanes() {
    return this.planes.filter((planes) => planes instanceof MilitaryPlane);
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    const passengerPlanes = this.getPassengerPlanes();
    return passengerPlanes.sort((a, b) => b.passengersCapacity - a.passengersCapacity)[0];
  }

  getTransportMilitaryPlanes() {
    let militaryPlanes = this.getMilitaryPlanes();
    return militaryPlanes.filter((planes) => planes.getMilitaryType() === MILITARY_TYPE.TRANSPORT);
  }

  getBomberMilitaryPlanes() {
    let militaryPlanes = this.getMilitaryPlanes();
    return militaryPlanes.filter((planes) => planes.getMilitaryType() === MILITARY_TYPE.BOMBER);
  }

  getExperimentalPlanes() {
    return this.planes.filter((planes) => planes instanceof ExperimentalPlane);
  }

  sortByMaxDistance() {
    let maxDistance = this.planes.sort((a, b) =>
      a.getMaxFlightDistance() > b.getMaxFlightDistance() ? 'distance1 > distance2' : 'distance1 < distance2',
    );
    return maxDistance;
  }

  sortByMaxSpeed() {
    let maxSpeed = this.planes.sort((a, b) =>
      a.getMaxSpeed() > b.getMaxSpeed() ? 'speed1 > speed2' : 'speed1 < speed2',
    );
    return maxSpeed;
  }

  sortByMaxLoadCapacity() {
    let MaxLoadCapacity = this.planes.sort((a, b) =>
      a.getMaxLoadCapacity() > b.getMaxLoadCapacity()
        ? 'MaxLoadCapacity1 > MaxLoadCapacity2'
        : 'MaxLoadCapacity1 < MaxLoadCapacity2',
    );
    return MaxLoadCapacity;
  }
}

module.exports = { Airport };
