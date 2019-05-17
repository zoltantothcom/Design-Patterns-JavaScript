const FACADE = {
  id: 'facade',
  name: 'Facade',
  type: 'structural',
  hint: 'A single class that represents an entire subsystem',
  definition: `Provide a unified interface to a set of interfaces in a subsystem.
    Facade defines a higher-level interface that makes the subsystem easier to use.`,
  when: `you want to provide a simple interface to a complex subsystem`,
  codeES5: `var shopPattern = {
  calc: function(price) {
    price = discount(price);
    price += fees(price);
    price += shipping();

    return price;
  }
};

function discount(value) {
  return value * 0.9;
}

function shipping() {
  return 5;
}

function fees(value) {
  return value * 1.05;
}

module.exports = shopPattern;`,
  codeES6: `class ShopPattern {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }

  calc(price) {
    price = this.discount.calc(price);
    price = this.fees.calc(price);
    price += this.shipping.calc();

    return price;
  }
}

class Discount {
  calc(value) {
    return value * 0.9;
  }
}

class Shipping {
  calc() {
    return 5;
  }
}

class Fees {
  calc(value) {
    return value * 1.05;
  }
}

export default ShopPattern;`
};

export default FACADE;
