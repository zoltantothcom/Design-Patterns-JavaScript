const SINGLETON = {
  id: 'singleton',
  name: 'Singleton',
  type: 'creational',
  hint: 'A class of which only a single instance can exist',
  description: `Ensures that a class has only one instance and gives global access to it.`,
  use: `there must by only one instance of a class`,
  codeES5: `function Person() {
  if (typeof Person.instance === 'object') return Person.instance;

  Person.instance = this;

  return this;
}

module.exports = Person;`,
  codeES6: `class Person {
  constructor() {
    if (typeof Person.instance === 'object') {
      return Person.instance;
    }

    Person.instance = this;

    return this;
  }
}

export default Person;`
};

export default SINGLETON;
