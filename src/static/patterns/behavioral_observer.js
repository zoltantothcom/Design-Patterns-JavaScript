const OBSERVER = {
  id: 'observer',
  name: 'Observer',
  type: 'behavioral',
  hint: 'is a publish/subscribe pattern which allows a number of observer objects to see an event',
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
};

export default OBSERVER;
