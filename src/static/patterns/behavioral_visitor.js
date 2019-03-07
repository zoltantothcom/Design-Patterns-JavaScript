const VISITOR = {
  id: 'visitor',
  name: 'Visitor',
  type: 'behavioral',
  hint:
    'separates an algorithm from an object structure by moving the hierarchy of methods into one object',
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
