import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Title } from '../src/components/Title';

const themes = ['dark', 'light'];

storiesOf('Title', module)
  .addDecorator(withKnobs)

  .add('with dark theme', () => <Title theme="dark" text="Dark Theme" />)
  .add('with light theme', () => <Title theme="light" text="Light Theme" />)
  .add('playground', () => <Title theme={select('theme', themes)} text={text('text', 'JavaScript Patterns')} />);
