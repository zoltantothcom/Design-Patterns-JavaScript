const COMPOSITE = {
  id: 'composite',
  name: 'Composite',
  type: 'structural',
  hint: 'composes zero-or-more similar objects so that they can be manipulated as one object',
  codeES5: `function EquipmentPattern(name) {
  this.equipments = [];
  this.name = name;
}

EquipmentPattern.prototype.add = function(equipment) {
  this.equipments.push(equipment);
};

EquipmentPattern.prototype.getPrice = function() {
  return this.equipments
    .map(function(equipment) {
      return equipment.getPrice();
    })
    .reduce(function(a, b) {
      return a + b;
    });
};

function Equipment() {}

Equipment.prototype.getPrice = function() {
  return this.price;
};

// -- leafs
function FloppyDisk() {
  this.name = 'Floppy Disk';
  this.price = 70;
}
FloppyDisk.prototype = Object.create(Equipment.prototype);

function HardDrive() {
  this.name = 'Hard Drive';
  this.price = 250;
}
HardDrive.prototype = Object.create(Equipment.prototype);

function Memory() {
  this.name = '8gb memomry';
  this.price = 280;
}
Memory.prototype = Object.create(Equipment.prototype);

module.exports = [EquipmentPattern, FloppyDisk, HardDrive, Memory];`,
  codeES6: `//Equipment
class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

class Pattern extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments
      .map(equipment => {
        return equipment.getPrice();
      })
      .reduce((a, b) => {
        return a + b;
      });
  }
}

class Cabbinet extends Pattern {
  constructor() {
    super();
    this.setName('cabbinet');
  }
}

// --- leafs ---
class FloppyDisk extends Equipment {
  constructor() {
    super();
    this.setName('Floppy Disk');
    this.price = 70;
  }
}

class HardDrive extends Equipment {
  constructor() {
    super();
    this.setName('Hard Drive');
    this.price = 250;
  }
}

class Memory extends Equipment {
  constructor() {
    super();
    this.setName('Memory');
    this.price = 280;
  }
}

export { Cabbinet, FloppyDisk, HardDrive, Memory };`
};

export default COMPOSITE;
