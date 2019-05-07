import React from 'react';
import TestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import 'jest-styled-components';

import CodePreTag from '../../src/components/CodePreTag';

const shortCodeToRender = `
  function foo() {
    return 'bar';
  }
`;

const longCodeToRender = `
  function EquipmentPattern(name) {
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

  module.exports = [EquipmentPattern, FloppyDisk, HardDrive, Memory];
`;

describe('<CodePreTag /> component', () => {
  it('renders children properly', () => {
    const tree = renderer
      .create(
        <CodePreTag>
          <code>{shortCodeToRender}</code>
        </CodePreTag>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('scrolls to position 0,0 on children change', () => {
    const container = mount(
      <CodePreTag style={{ height: 200 }}>
        <code>{longCodeToRender}</code>
      </CodePreTag>
    );
    const $container = container.getDOMNode();

    // Initially the scroll position must be at the top
    expect($container.scrollTop).toBe(0);

    $container.scrollTop = 100;

    // Test that the scroll position is updated correctly
    expect($container.scrollTop).toBe(100);

    container.setProps({ children: shortCodeToRender });

    // Test that the scroll position is reset after changing its children
    expect($container.scrollTop).toBe(0);
  });
});
