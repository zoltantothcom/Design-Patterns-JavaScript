const DECORATOR = {
  id: 'decorator',
  name: 'Decorator',
  type: 'structural',
  hint: 'Add responsibilities to objects dynamically',
  definition: `Attach additional responsibilities to an object dynamically.
    Decorators provide a flexible alternative to subclassing for extending functionality.`,
  when: `you want to add extensions to an object in runtime without affecting other objects`,
  codeES5: `function Pasta() {
  this.price = 0;
}

Pasta.prototype.getPrice = function() {
  return this.price;
};

function Penne() {
  this.price = 8;
}

Penne.prototype = Object.create(Pasta.prototype);

function SaucePattern(pasta) {
  this.pasta = pasta;
}

SaucePattern.prototype.getPrice = function() {
  return this.pasta.getPrice() + 5;
};

function CheesePattern(pasta) {
  this.pasta = pasta;
}

CheesePattern.prototype.getPrice = function() {
  return this.pasta.getPrice() + 3;
};

module.exports = [Penne, SaucePattern, CheesePattern];`,
  codeES6: `class Pasta {
  constructor() {
    this.price = 0;
  }

  getPrice() {
    return this.price;
  }
}

class Penne extends Pasta {
  constructor() {
    super();
    this.price = 8;
  }
}

class PastaPattern extends Pasta {
  constructor(pasta) {
    super();
    this.pasta = pasta;
  }

  getPrice() {
    return this.pasta.getPrice();
  }
}

class SaucePattern extends PastaPattern {
  constructor(pasta) {
    super(pasta);
  }

  getPrice() {
    return super.getPrice() + 5;
  }
}

class CheesePattern extends PastaPattern {
  constructor(pasta) {
    super(pasta);
  }

  getPrice() {
    return super.getPrice() + 3;
  }
}

export { Penne, SaucePattern, CheesePattern };`
};

export default DECORATOR;
