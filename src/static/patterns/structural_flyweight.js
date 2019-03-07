const FLYWEIGHT = {
  id: 'flyweight',
  name: 'Flyweight',
  type: 'structural',
  hint: 'reduces the cost of creating and manipulating a large number of similar objects',
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
