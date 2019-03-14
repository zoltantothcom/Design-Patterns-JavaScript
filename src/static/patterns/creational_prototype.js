const PROTOTYPE = {
  id: 'prototype',
  name: 'Prototype',
  type: 'creational',
  hint: 'A fully initialized instance to be copied or cloned',
  description: `Create objects by copying prototypical instance of them.`,
  use: `classes to instantiate are available only in runtime`,
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
