const STATE = {
  id: 'state',
  name: 'State',
  type: 'behavioral',
  hint: "Alter an object's behavior when its state changes",
  definition: `Allow an object to alter its behavior when its internal state changes.
    The object will appear to change its class.`,
  when: `the object's behaviour depends on its state and its behaviour changes in run-time depends on that state`,
  codeES5: `function Order() {
  this.pattern = new WaitingForPayment();

  this.nextPattern = function() {
    this.pattern = this.pattern.next();
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
    this.pattern = new WaitingForPayment();
  }

  nextPattern() {
    this.pattern = this.pattern.next();
  }
}

export default Order;`
};

export default STATE;
