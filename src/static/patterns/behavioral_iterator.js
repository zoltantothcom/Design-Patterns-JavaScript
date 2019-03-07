const ITERATOR = {
  id: 'iterator',
  name: 'Iterator',
  type: 'behavioral',
  hint:
    'accesses the elements of an object sequentially without exposing its underlying representation',
  codeES5: `function Pattern(el) {
  this.index = 0;
  this.elements = el;
}

Pattern.prototype = {
  next: function() {
    return this.elements[this.index++];
  },
  hasNext: function() {
    return this.index < this.elements.length;
  }
};

module.exports = Pattern;`,
  codeES6: `class Pattern {
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

export default Pattern;`
};

export default ITERATOR;
