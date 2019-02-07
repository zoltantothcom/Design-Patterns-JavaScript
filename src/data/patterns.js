const patterns = [
  {
    name: 'Abstract Factory',
    type: 'creational',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Builder',
    type: 'creational',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Factory',
    type: 'creational',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Prototype',
    type: 'creational',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Singleton',
    type: 'creational',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Adapter',
    type: 'structural',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Bridge',
    type: 'structural',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Composite',
    type: 'structural',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Decorator',
    type: 'structural',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Facade',
    type: 'structural',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Flyweight',
    type: 'structural',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Proxy',
    type: 'structural',
    codeES5: ``,
    codeES6: ``
  },

  {
    name: 'Chain of Resp',
    type: 'behavioral',
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
  },

  {
    name: 'Command',
    type: 'behavioral',
    codeES5: `function Cockpit(command) {
  this.command = command;
}
Cockpit.prototype.execute = function() {
  this.command.execute();
};

function Turbine() {
  this.speed = 0;
  this.state = false;
}

Turbine.prototype.on = function() {
  this.state = true;
  this.speed = 100;
};

Turbine.prototype.off = function() {
  this.speed = 0;
  this.state = false;
};

Turbine.prototype.speedDown = function() {
  if (!this.state) return;

  this.speed -= 100;
};

Turbine.prototype.speedUp = function() {
  if (!this.state) return;

  this.speed += 100;
};

function OnCommand(turbine) {
  this.turbine = turbine;
}
OnCommand.prototype.execute = function() {
  this.turbine.on();
};

function OffCommand(turbine) {
  this.turbine = turbine;
}
OffCommand.prototype.execute = function() {
  this.turbine.off();
};

function SpeedUpCommand(turbine) {
  this.turbine = turbine;
}
SpeedUpCommand.prototype.execute = function() {
  this.turbine.speedUp();
};

function SpeedDownCommand(turbine) {
  this.turbine = turbine;
}
SpeedDownCommand.prototype.execute = function() {
  this.turbine.speedDown();
};

module.exports = [Cockpit, Turbine, OnCommand, OffCommand, SpeedUpCommand, SpeedDownCommand];`,
    codeES6: `class Cockpit {
  constructor(command) {
    this.command = command;
  }
  execute() {
    this.command.execute();
  }
}

class Turbine {
  constructor() {
    this.state = false;
  }
  on() {
    this.state = true;
  }
  off() {
    this.state = false;
  }
}

class OnCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }
  execute() {
    this.turbine.on();
  }
}

class OffCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }
  execute() {
    this.turbine.off();
  }
}

export { Cockpit, Turbine, OnCommand, OffCommand };`
  },

  {
    name: 'Interpreter',
    type: 'behavioral',
    codeES5: `function Sum(left, right) {
  this.left = left;
  this.right = right;
}

Sum.prototype.interpret = function() {
  return this.left.interpret() + this.right.interpret();
};

function Min(left, right) {
  this.left = left;
  this.right = right;
}

Min.prototype.interpret = function() {
  return this.left.interpret() - this.right.interpret();
};

function Num(val) {
  this.val = val;
}

Num.prototype.interpret = function() {
  return this.val;
};

module.exports = [Num, Min, Sum];`,
    codeES6: `class Sum {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}

class Min {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}

class Num {
  constructor(val) {
    this.val = val;
  }

  interpret() {
    return this.val;
  }
}

export { Num, Min, Sum };`
  },

  {
    name: 'Iterator',
    type: 'behavioral',
    codeES5: `function Iterator(el) {
  this.index = 0;
  this.elements = el;
}

Iterator.prototype = {
  next: function() {
    return this.elements[this.index++];
  },
  hasNext: function() {
    return this.index < this.elements.length;
  }
};

module.exports = Iterator;`,
    codeES6: `class Iterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

export default Iterator;`
  },

  {
    name: 'Mediator',
    type: 'behavioral',
    codeES5: `function TrafficTower() {
  this.airplanes = [];
}

TrafficTower.prototype.requestPositions = function() {
  return this.airplanes.map(function(airplane) {
    return airplane.position;
  });
};

function Airplane(position, trafficTower) {
  this.position = position;
  this.trafficTower = trafficTower;
  this.trafficTower.airplanes.push(this);
}

Airplane.prototype.requestPositions = function() {
  return this.trafficTower.requestPositions();
};

module.exports = [TrafficTower, Airplane];`,
    codeES6: `class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map(airplane => {
      return airplane.position;
    });
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}

export { TrafficTower, Airplane };`
  },

  {
    name: 'Memento',
    type: 'behavioral',
    codeES5: `function Memento(value) {
  this.value = value;
}

var originator = {
  store: function(val) {
    return new Memento(val);
  },
  restore: function(memento) {
    return memento.value;
  }
};

function Caretaker() {
  this.values = [];
}

Caretaker.prototype.addMemento = function(memento) {
  this.values.push(memento);
};

Caretaker.prototype.getMemento = function(index) {
  return this.values[index];
};

module.exports = [originator, Caretaker];`,
    codeES6: `class Memento {
  constructor(value) {
    this.value = value;
  }
}

const originator = {
  store: function(val) {
    return new Memento(val);
  },
  restore: function(memento) {
    return memento.value;
  }
};

class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

export { originator, Caretaker };`
  },

  {
    name: 'Observer',
    type: 'behavioral',
    codeES5: `function Product() {
  this.price = 0;
  this.actions = [];
}

Product.prototype.setBasePrice = function(val) {
  this.price = val;
  this.notifyAll();
};

Product.prototype.register = function(observer) {
  this.actions.push(observer);
};

Product.prototype.unregister = function(observer) {
  this.actions.remove.filter(function(el) {
    return el !== observer;
  });
};

Product.prototype.notifyAll = function() {
  return this.actions.forEach(
    function(el) {
      el.update(this);
    }.bind(this)
  );
};

var fees = {
  update: function(product) {
    product.price = product.price * 1.2;
  }
};

var proft = {
  update: function(product) {
    product.price = product.price * 2;
  }
};

module.exports = [Product, fees, proft];`,
    codeES6: `class Product {
  constructor() {
    this.price = 0;
    this.actions = [];
  }

  setBasePrice(val) {
    this.price = val;
    this.notifyAll();
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions.remove.filter(function(el) {
      return el !== observer;
    });
  }

  notifyAll() {
    return this.actions.forEach(
      function(el) {
        el.update(this);
      }.bind(this)
    );
  }
}

class fees {
  update(product) {
    product.price = product.price * 1.2;
  }
}

class proft {
  update(product) {
    product.price = product.price * 2;
  }
}

export { Product, fees, proft };`
  },

  {
    name: 'State',
    type: 'behavioral',
    codeES5: `function Order() {
  this.state = new WaitingForPayment();

  this.nextState = function() {
    this.state = this.state.next();
  };
}

function WaitingForPayment() {
  this.name = 'waitingForPayment';
  this.next = function() {
    return new Shipping();
  };
}

function Shipping() {
  this.name = 'shipping';
  this.next = function() {
    return new Delivered();
  };
}

function Delivered() {
  this.name = 'delivered';
  this.next = function() {
    return this;
  };
}

module.exports = Order;`,
    codeES6: `class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }
}

export default Order;`
  },

  {
    name: 'Strategy',
    type: 'behavioral',
    codeES5: `function ShoppingCart(discount) {
  this.discount = discount;
  this.amount = 0;
}

ShoppingCart.prototype.setAmount = function(amount) {
  this.amount = amount;
};

ShoppingCart.prototype.checkout = function() {
  return this.discount(this.amount);
};

function guestStrategy(amount) {
  return amount;
}

function regularStrategy(amount) {
  return amount * 0.9;
}

function premiumStrategy(amount) {
  return amount * 0.8;
}

module.exports = [ShoppingCart, guestStrategy, regularStrategy, premiumStrategy];`,
    codeES6: `class ShoppingCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
}

function guestStrategy(amount) {
  return amount;
}

function regularStrategy(amount) {
  return amount * 0.9;
}

function premiumStrategy(amount) {
  return amount * 0.8;
}

export { ShoppingCart, guestStrategy, regularStrategy, premiumStrategy };`
  },

  {
    name: 'Template',
    type: 'behavioral',
    codeES5: `function Tax() {}

Tax.prototype.calc = function(value) {
  if (value >= 1000) value = this.overThousand(value);

  return this.complementaryFee(value);
};

Tax.prototype.complementaryFee = function(value) {
  return value + 10;
};

function Tax1() {}
Tax1.prototype = Object.create(Tax.prototype);

Tax1.prototype.overThousand = function(value) {
  return value * 1.1;
};

function Tax2() {}
Tax2.prototype = Object.create(Tax.prototype);

Tax2.prototype.overThousand = function(value) {
  return value * 1.2;
};

module.exports = [Tax1, Tax2];`,
    codeES6: `class Tax {
  calc(value) {
    if (value >= 1000) value = this.overThousand(value);

    return this.complementaryFee(value);
  }

  complementaryFee(value) {
    return value + 10;
  }
}

class Tax1 extends Tax {
  constructor() {
    super();
  }
  overThousand(value) {
    return value * 1.1;
  }
}

class Tax2 extends Tax {
  constructor() {
    super();
  }
  overThousand(value) {
    return value * 1.2;
  }
}

export { Tax1, Tax2 };`
  },

  {
    name: 'Visitor',
    type: 'behavioral',
    codeES5: `function bonusVisitor(employee) {
  if (employee instanceof Manager) employee.bonus = employee.salary * 2;
  if (employee instanceof Developer) employee.bonus = employee.salary;
}

function Employee() {
  this.bonus = 0;
}

Employee.prototype.accept = function(visitor) {
  visitor(this);
};

function Manager(salary) {
  this.salary = salary;
}

Manager.prototype = Object.create(Employee.prototype);

function Developer(salary) {
  this.salary = salary;
}

Developer.prototype = Object.create(Employee.prototype);

module.exports = [Developer, Manager, bonusVisitor];`,
    codeES6: `function bonusVisitor(employee) {
  if (employee instanceof Manager) employee.bonus = employee.salary * 2;
  if (employee instanceof Developer) employee.bonus = employee.salary;
}

class Employee {
  constructor(salary) {
    this.bonus = 0;
    this.salary = salary;
  }

  accept(visitor) {
    visitor(this);
  }
}

class Manager extends Employee {
  constructor(salary) {
    super(salary);
  }
}

class Developer extends Employee {
  constructor(salary) {
    super(salary);
  }
}

export { Developer, Manager, bonusVisitor };`
  }
];

export default patterns;
