import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { Title } from '../src/components/Title';

const themes = ['dark', 'light'];

storiesOf('Title', module)
  .addDecorator(withKnobs)

  .add('dark theme', () => <Title mode="dark" text="Dark Theme" />)
  .add('light theme', () => <Title mode="light" text="Light Theme" />)
  .add('playground', () => (
    <Title mode={select('mode', themes)} text={text('text', 'JavaScript Patterns')} />
  ));
