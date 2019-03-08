import ABSTRACT_FACTORY from './creational_abstractFactory';
import BUILDER from './creational_builder';
import FACTORY from './creational_factory';
import PROTOTYPE from './creational_prototype';
import SINGLETON from './creational_singleton';
import ADAPTER from './structural_adapter';
import BRIDGE from './structural_bridge';
import COMPOSITE from './structural_composite';
import DECORATOR from './structural_decorator';
import FACADE from './structural_facade';
import FLYWEIGHT from './structural_flyweight';
import PROXY from './structural_proxy';
import CHAIN_OF_RESPONSIBILITY from './behavioral_chainOfResponsibility';
import COMMAND from './behavioral_command';
import INTERPRETER from './behavioral_interpreter';
import ITERATOR from './behavioral_iterator';
import MEDIATOR from './behavioral_mediator';
import MEMENTO from './behavioral_memento';
import OBSERVER from './behavioral_observer';
import STATE from './behavioral_state';
import STRATEGY from './behavioral_strategy';
import TEMPLATE from './behavioral_template';
import VISITOR from './behavioral_visitor';

export const patterns = [
  ABSTRACT_FACTORY,
  BUILDER,
  FACTORY,
  PROTOTYPE,
  SINGLETON,

  ADAPTER,
  BRIDGE,
  COMPOSITE,
  DECORATOR,
  FACADE,
  FLYWEIGHT,
  PROXY,

  CHAIN_OF_RESPONSIBILITY,
  COMMAND,
  INTERPRETER,
  ITERATOR,
  MEDIATOR,
  MEMENTO,
  OBSERVER,
  STATE,
  STRATEGY,
  TEMPLATE,
  VISITOR
];

const mixed = [...patterns];
for (let i = mixed.length - 1; i > 0; i--) {
  const rand = Math.floor(Math.random() * (i + 1));
  [mixed[i], mixed[rand]] = [mixed[rand], mixed[i]];
}

export default mixed;
