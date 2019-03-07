const PROTOTYPE = {
  id: 'prototype',
  name: 'Prototype',
  type: 'creational',
  hint: 'creates objects by cloning an existing object',
  codeES5: `function Sheep(name, weight) {
  this.name = name;
  this.weight = weight;
}

Sheep.prototype.clone = function() {
  return new Sheep(this.name, this.weight);
};

module.exports = Sheep;`,
  codeES6: `class Sheep {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  clone() {
    return new Sheep(this.name, this.weight);
  }
}

export default Sheep;`
};

export default PROTOTYPE;
