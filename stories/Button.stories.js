import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';
import Button from '../src/components/Button';

const themes = ['primary', 'secondary'];

storiesOf('Button', module)
  .addDecorator(withKnobs)

  .add('with no prop', () => <Button />)
  .add('with label', () => <Button label={text('label', 'Hello Button')} />)
  .add('with big', () => <Button label="Big Button" big={boolean('big', true)} />)
  .add('with theme', () => (
    <React.Fragment>
      <Button label="Button with primary theme" theme="primary" />
      <Button label="Button with secondary theme" theme="secondary" />
    </React.Fragment>
  ))
  .add('custom style', () => (
    <Button
      label="Custom style"
      style={object('style', {
        backgroundColor: 'orange',
        border: '2px solid crimson'
      })}
    />
  ))
  .add('playground', () => (
    <Button
      label={text('label', 'Hello Button')}
      big={boolean('big', true)}
      theme={select('theme', themes)}
      style={object('style', {})}
    />
  ));
