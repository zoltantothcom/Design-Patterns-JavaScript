const SINGLETON = {
  id: 'singleton',
  name: 'Singleton',
  type: 'creational',
  hint: 'restricts object creation for a class to only one instance',
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
