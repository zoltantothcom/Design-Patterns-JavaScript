const CHAIN_OF_RESPONSIBILITY = {
  id: 'chain_of_responsibility',
  name: 'Chain of Responsibility',
  type: 'behavioral',
  hint: 'A way of passing a request between a chain of objects',
  definition: `Avoid coupling the sender of a request to its receiver by giving more than one object a chance to
    handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.`,
  when: 'more than one object can handle a request and that information is known in runtime',
  codeES5: `function ShoppingCart() {
  this.products = [];

  this.addProduct = function(p) {
    this.products.push(p);
  };
}

function Discount() {
  this.calc = function(products) {
    var ndiscount = new NumberDiscount();
    var pdiscount = new PriceDiscount();
    var none = new NoneDiscount();

    ndiscount.setNext(pdiscount);
    pdiscount.setNext(none);

    return ndiscount.exec(products);
  };
}

function NumberDiscount() {
  this.next = null;
  this.setNext = function(fn) {
    this.next = fn;
  };

  this.exec = function(products) {
    var result = 0;
    if (products.length > 3) result = 0.05;

    return result + this.next.exec(products);
  };
}

function PriceDiscount() {
  this.next = null;
  this.setNext = function(fn) {
    this.next = fn;
  };
  this.exec = function(products) {
    var result = 0;
    var total = products.reduce(function(a, b) {
      return a + b;
    });

    if (total >= 500) result = 0.1;

    return result + this.next.exec(products);
  };
}

function NoneDiscount() {
  this.exec = function() {
    return 0;
  };
}

module.exports = [ShoppingCart, Discount];`,
  codeES6: `class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(p) {
    this.products.push(p);
  }
}

class Discount {
  calc(products) {
    let ndiscount = new NumberDiscount();
    let pdiscount = new PriceDiscount();
    let none = new NoneDiscount();
    ndiscount.setNext(pdiscount);
    pdiscount.setNext(none);

    return ndiscount.exec(products);
  }
}

class NumberDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  }

  exec(products) {
    let result = 0;
    if (products.length > 3) result = 0.05;

    return result + this.next.exec(products);
  }
}

class PriceDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  }

  exec(products) {
    let result = 0;
    let total = products.reduce((a, b) => a + b);

    if (total >= 500) result = 0.1;

    return result + this.next.exec(products);
  }
}

class NoneDiscount {
  exec() {
    return 0;
  }
}

export { ShoppingCart, Discount };`
};

export default CHAIN_OF_RESPONSIBILITY;
