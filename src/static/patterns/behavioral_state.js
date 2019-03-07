const STATE = {
  id: 'state',
  name: 'State',
  type: 'behavioral',
  hint: 'allows an object to alter its behavior when its internal state changes',
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
