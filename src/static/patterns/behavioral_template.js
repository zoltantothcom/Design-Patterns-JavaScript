const TEMPLATE = {
  id: 'template',
  name: 'Template',
  type: 'behavioral',
  hint: 'Defer the exact steps of an algorithm to a subclass',
  definition: `Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.
    Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure.`,
  when: `you have to define steps of the algorithm once and let subclasses to implement its behaviour`,
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
};

export default TEMPLATE;
