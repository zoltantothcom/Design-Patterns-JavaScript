const PROTOTYPE = {
  id: 'prototype',
  name: 'Prototype',
  type: 'creational',
  hint: 'A fully initialized instance to be copied or cloned',
  definition: `Specify the kind of objects to create using a prototypical instance,
    and create new objects by copying this prototype.`,
  when: 'classes to instantiate are available only in runtime',
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
