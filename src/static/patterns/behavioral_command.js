const COMMAND = {
  id: 'command',
  name: 'Command',
  type: 'behavioral',
  hint: 'Encapsulate a command request as an object',
  definition: `Encapsulate a request as an object, thereby letting you parameterize clients with different requests,
    queue or log requests, and support undoable operations.`,
  when:
    'you have a queue of requests to handle or you want to log them. Also when you want to have an «undo» action',
  codeES5: `function Cockpit(instruction) {
  this.instruction = instruction;
}

Cockpit.prototype.execute = function() {
  this.instruction.execute();
};

function Turbine() {
  this.speed = 0;
  this.state = false;
}

Turbine.prototype.on = function() {
  this.state = true;
  this.speed = 100;
};

Turbine.prototype.off = function() {
  this.speed = 0;
  this.state = false;
};

Turbine.prototype.speedDown = function() {
  if (!this.state) return;

  this.speed -= 100;
};

Turbine.prototype.speedUp = function() {
  if (!this.state) return;

  this.speed += 100;
};

function OnInstruction(turbine) {
  this.turbine = turbine;
}

OnInstruction.prototype.execute = function() {
  this.turbine.on();
};

function OffInstruction(turbine) {
  this.turbine = turbine;
}

OffInstruction.prototype.execute = function() {
  this.turbine.off();
};

function SpeedUpInstruction(turbine) {
  this.turbine = turbine;
}

SpeedUpInstruction.prototype.execute = function() {
  this.turbine.speedUp();
};

function SpeedDownInstruction(turbine) {
  this.turbine = turbine;
}

SpeedDownInstruction.prototype.execute = function() {
  this.turbine.speedDown();
};

module.exports = [Cockpit, Turbine, OnInstruction, OffInstruction, SpeedUpInstruction, SpeedDownInstruction];`,
  codeES6: `class Cockpit {
  constructor(instruction) {
    this.instruction = instruction;
  }

  execute() {
    this.instruction.execute();
  }
}

class Turbine {
  constructor() {
    this.state = false;
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }
}

class OnInstruction {
  constructor(turbine) {
    this.turbine = turbine;
  }

  execute() {
    this.turbine.on();
  }
}

class OffInstruction {
  constructor(turbine) {
    this.turbine = turbine;
  }

  execute() {
    this.turbine.off();
  }
}

export { Cockpit, Turbine, OnInstruction, OffInstruction };`
};

export default COMMAND;
