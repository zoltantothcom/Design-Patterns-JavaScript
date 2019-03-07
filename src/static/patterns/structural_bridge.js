const BRIDGE = {
  id: 'bridge',
  name: 'Bridge',
  type: 'structural',
  hint: 'decouples an abstraction from its implementation so that the two can vary independently',
  codeES5: `function EpsonPrinter(ink) {
  this.ink = ink();
}

EpsonPrinter.prototype.print = function() {
  return 'Printer: Epson, Ink: ' + this.ink;
};

function HPprinter(ink) {
  this.ink = ink();
}

HPprinter.prototype.print = function() {
  return 'Printer: HP, Ink: ' + this.ink;
};

function acrylicInk() {
  return 'acrylic-based';
}

function alcoholInk() {
  return 'alcohol-based';
}

module.exports = [EpsonPrinter, HPprinter, acrylicInk, alcoholInk];`,
  codeES6: `class Printer {
  constructor(ink) {
    this.ink = ink;
  }
}

class EpsonPrinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  print() {
    return 'Printer: Epson, Ink: ' + this.ink.get();
  }
}

class HPprinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  print() {
    return 'Printer: HP, Ink: ' + this.ink.get();
  }
}

class Ink {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class AcrylicInk extends Ink {
  constructor() {
    super('acrylic-based');
  }
}

class AlcoholInk extends Ink {
  constructor() {
    super('alcohol-based');
  }
}

export { EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk };`
};

export default BRIDGE;
