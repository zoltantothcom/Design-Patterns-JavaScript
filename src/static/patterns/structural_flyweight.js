const FLYWEIGHT = {
  id: 'flyweight',
  name: 'Flyweight',
  type: 'structural',
  hint: 'A fine-grained instance used for efficient sharing',
  definition: `Use sharing to support large numbers of fine-grained objects efficiently.`,
  when: `an application uses a lot of small objects and their storing is expensive or their identity is not important`,
  codeES5: `function Color(name) {
  this.name = name;
}

var colorCreator = {
  colors: {},
  create: function(name) {
    var color = this.colors[name];
    if (color) return color;

    this.colors[name] = new Color(name);

    return this.colors[name];
  }
};

module.exports = colorCreator;`,
  codeES6: `class Color {
  constructor(name) {
    this.name = name;
  }
}

class colorCreator {
  constructor(name) {
    this.colors = {};
  }

  create(name) {
    let color = this.colors[name];
    if (color) return color;

    this.colors[name] = new Color(name);

    return this.colors[name];
  }
}

export { colorCreator };`
};

export default FLYWEIGHT;
