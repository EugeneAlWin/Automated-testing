const { assert } = require('chai');

const { MilitaryPlane } = require('../planes/militaryPlane');
const { PassengerPlane } = require('../planes/passengerPlane');
const { ExperimentalPlane } = require('../planes/experimentalPlane');
const { Airport } = require('../airport');
const { MILITARY_TYPE } = require('../models/militaryType');
const { EXPERIMENTAL_TYPE } = require('../models/experimentalType');
const { CLASSIFICATION_LEVEL } = require('../models/classificationLevel');

describe('My Test', () => {
  const planes = [
    new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
    new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
    new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
    new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
    new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
    new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
    new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
    new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
    new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MILITARY_TYPE.BOMBER),
    new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MILITARY_TYPE.BOMBER),
    new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MILITARY_TYPE.BOMBER),
    new MilitaryPlane('F-15', 1500, 12000, 10000, MILITARY_TYPE.FIGHTER),
    new MilitaryPlane('F-22', 1550, 13000, 11000, MILITARY_TYPE.FIGHTER),
    new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MILITARY_TYPE.TRANSPORT),
    new ExperimentalPlane('Bell X-14', 277, 482, 500, EXPERIMENTAL_TYPE.HIGH_ALTITUDE, CLASSIFICATION_LEVEL.SECRET),
    new ExperimentalPlane('Ryan X-13 Vertijet', 560, 307, 500, EXPERIMENTAL_TYPE.VTOL, CLASSIFICATION_LEVEL.TOP_SECRET),
  ];
  const planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);

  it('should have military planes with transport type', () => {
    const airport = new Airport(planes);
    const transportMilitaryPlanes = airport.getTransportMilitaryPlanes();
    let flag = false;
    for (const militaryPlane of transportMilitaryPlanes) {
      if (militaryPlane.militaryType === MILITARY_TYPE.TRANSPORT) {
        flag = true;
        break;
      }
    }
    assert.equal(flag, true);
  });

  it('should check passenger plane with max capacity', () => {
    const airport = new Airport(planes);
    const expectedPlaneWithMaxPassengersCapacity = airport.getPassengerPlaneWithMaxPassengersCapacity();
    assert.isFalse(expectedPlaneWithMaxPassengersCapacity === planeWithMaxPassengerCapacity);
  });

  it('should get passenger plane with max capacity', () => {
    const airport = new Airport(planes);
    airport.sortByMaxLoadCapacity();
    const planesSortedByMaxLoadCapacity = airport.getPlanes();
    let nextPlaneMaxLoadCapacityIsHigherThanCurrent = true;
    for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i += 1) {
      const currentPlane = planesSortedByMaxLoadCapacity[i];
      const nextPlane = planesSortedByMaxLoadCapacity[i + 1];
      if (currentPlane.maxLoadCapacity > nextPlane.maxLoadCapacity) {
        nextPlaneMaxLoadCapacityIsHigherThanCurrent = false;
        break;
      }
    }
    assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent);
  });

  it('should check if there is at least one bomber in military planes', () => {
    const airport = new Airport(planes);
    const bomberMilitaryPlanes = airport.getBomberMilitaryPlanes();

    for (const militaryPlane of bomberMilitaryPlanes) {
      if (militaryPlane.militaryType !== MILITARY_TYPE.BOMBER) {
        assert.fail('Test failed!');
      }
    }
  });

  it('should check that experimentsl planes has classification level higher than unclassified', () => {
    const airport = new Airport(planes);
    const bomberMilitaryPlanes = airport.getExperimentalPlanes();
    let hasUnclassifiedPlanes = false;
    for (const experimentalPlane of bomberMilitaryPlanes) {
      if (experimentalPlane.CLASSIFICATION_LEVEL === CLASSIFICATION_LEVEL.UNCLASSIFIED) {
        hasUnclassifiedPlanes = true;
      }
      assert.isFalse(hasUnclassifiedPlanes);
    }
  });
});
