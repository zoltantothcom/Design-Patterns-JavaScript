const MEMENTO = {
  id: 'memento',
  name: 'Memento',
  type: 'behavioral',
  hint: 'provides the ability to restore an object to its previous state',
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
