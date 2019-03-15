const SINGLETON = {
  id: 'singleton',
  name: 'Singleton',
  type: 'creational',
  hint: 'A class of which only a single instance can exist',
  definition: 'Ensure a class has only one instance and provide a global point of access to it.',
  when: 'there must by only one instance of a class',
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
