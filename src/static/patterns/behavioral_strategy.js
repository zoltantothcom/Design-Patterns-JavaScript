const STRATEGY = {
  id: 'strategy',
  name: 'Strategy',
  type: 'behavioral',
  hint: 'Encapsulates an algorithm inside a class',
  definition: `Define a family of algorithms, encapsulate each one, and make them interchangeable.
    Strategy lets the algorithm vary independently from clients that use it.`,
  when: `you have many classes that differ in their behaviour.
    Strategies allow to configure a class with one of many behaviours`,
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

function guestPattern(amount) {
  return amount;
}

function regularPattern(amount) {
  return amount * 0.9;
}

function premiumPattern(amount) {
  return amount * 0.8;
}

module.exports = [ShoppingCart, guestPattern, regularPattern, premiumPattern];`,
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

function guestPattern(amount) {
  return amount;
}

function regularPattern(amount) {
  return amount * 0.9;
}

function premiumPattern(amount) {
  return amount * 0.8;
}

export { ShoppingCart, guestPattern, regularPattern, premiumPattern };`
};

export default STRATEGY;
