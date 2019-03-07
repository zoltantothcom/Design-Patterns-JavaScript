const PROXY = {
  id: 'proxy',
  name: 'Proxy',
  type: 'structural',
  hint:
    'provides a placeholder for another object to control access, reduce cost, and reduce complexity',
  codeES5: `function Car() {
  this.drive = function() {
    return 'driving';
  };
}

function CarPattern(driver) {
  this.driver = driver;
  this.drive = function() {
    if (driver.age < 18) return 'too young to drive';

    return new Car().drive();
  };
}

function Driver(age) {
  this.age = age;
}

module.exports = [Car, CarPattern, Driver];`,
  codeES6: `class Car {
  drive() {
    return 'driving';
  }
}

class CarPattern {
  constructor(driver) {
    this.driver = driver;
  }

  drive() {
    return this.driver.age < 18 ? 'too young to drive' : new Car().drive();
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

export { Car, CarPattern, Driver };`
};

export default PROXY;
