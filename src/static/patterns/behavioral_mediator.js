const MEDIATOR = {
  id: 'mediator',
  name: 'Mediator',
  type: 'behavioral',
  hint: 'Defines simplified communication between classes',
  definition: `Define an object that encapsulates how a set of objects interact.
    Mediator promotes loose coupling by keeping objects from referring to each other explicitly,
    and it lets you vary their interaction independently.`,
  when: 'a set of objects communicate in structured but complex ways',
  codeES5: `function TrafficTower() {
  this.airplanes = [];
}

TrafficTower.prototype.requestPositions = function() {
  return this.airplanes.map(function(airplane) {
    return airplane.position;
  });
};

function Airplane(position, trafficTower) {
  this.position = position;
  this.trafficTower = trafficTower;
  this.trafficTower.airplanes.push(this);
}

Airplane.prototype.requestPositions = function() {
  return this.trafficTower.requestPositions();
};

module.exports = [TrafficTower, Airplane];`,
  codeES6: `class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map(airplane => {
      return airplane.position;
    });
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}

export { TrafficTower, Airplane };`
};

export default MEDIATOR;
