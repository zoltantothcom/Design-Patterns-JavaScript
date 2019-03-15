const VISITOR = {
  id: 'visitor',
  name: 'Visitor',
  type: 'behavioral',
  hint: 'Defines a new operation to a class without change',
  definition: `Represent an operation to be performed on the elements of an object structure.
    Visitor lets you define a new operation without changing the classes of the elements on which it operates.`,
  when: `an object structure includes many classes and you want to perform an operations
    on the elements of that structure that depend on their classes`,
  codeES5: `function bonusPattern(employee) {
  if (employee instanceof Manager) employee.bonus = employee.salary * 2;
  if (employee instanceof Developer) employee.bonus = employee.salary;
}

function Employee() {
  this.bonus = 0;
}

Employee.prototype.accept = function(item) {
  item(this);
};

function Manager(salary) {
  this.salary = salary;
}

Manager.prototype = Object.create(Employee.prototype);

function Developer(salary) {
  this.salary = salary;
}

Developer.prototype = Object.create(Employee.prototype);

module.exports = [Developer, Manager, bonusPattern];`,
  codeES6: `function bonusPattern(employee) {
  if (employee instanceof Manager) employee.bonus = employee.salary * 2;
  if (employee instanceof Developer) employee.bonus = employee.salary;
}

class Employee {
  constructor(salary) {
    this.bonus = 0;
    this.salary = salary;
  }

  accept(item) {
    item(this);
  }
}

class Manager extends Employee {
  constructor(salary) {
    super(salary);
  }
}

class Developer extends Employee {
  constructor(salary) {
    super(salary);
  }
}

export { Developer, Manager, bonusPattern };`
};

export default VISITOR;
