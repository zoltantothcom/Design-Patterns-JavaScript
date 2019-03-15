const MEMENTO = {
  id: 'memento',
  name: 'Memento',
  type: 'behavioral',
  hint: "Capture and restore an object's internal state",
  definition: `Without violating encapsulation, capture and externalize an object's internal state
    so that the object can be restored to this state later.`,
  when: 'you need to take a snapshot of an object',
  codeES5: `function Pattern(value) {
  this.value = value;
}

var originator = {
  store: function(val) {
    return new Pattern(val);
  },
  restore: function(pattern) {
    return pattern.value;
  }
};

function Caretaker() {
  this.values = [];
}

Caretaker.prototype.addPattern = function(pattern) {
  this.values.push(pattern);
};

Caretaker.prototype.getPattern = function(index) {
  return this.values[index];
};

module.exports = [originator, Caretaker];`,
  codeES6: `class Pattern {
  constructor(value) {
    this.value = value;
  }
}

const originator = {
  store: function(val) {
    return new Pattern(val);
  },
  restore: function(pattern) {
    return pattern.value;
  }
};

class Caretaker {
  constructor() {
    this.values = [];
  }

  addPattern(pattern) {
    this.values.push(pattern);
  }

  getPattern(index) {
    return this.values[index];
  }
}

export { originator, Caretaker };`
};

export default MEMENTO;
