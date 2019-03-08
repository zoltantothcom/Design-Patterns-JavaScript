const STRATEGY = {
  id: 'strategy',
  name: 'Strategy',
  type: 'behavioral',
  hint: 'allows one of a family of algorithms to be selected on-the-fly at runtime',
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
