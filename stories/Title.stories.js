import React from 'react';
import { storiesOf } from '@storybook/react';
import { Title } from '../src/components/Title';

storiesOf('Title', module)
  .add('dark theme', () => <Title mode="dark" text="Dark Theme" />)
  .add('light theme', () => <Title mode="light" text="Light Theme" />);
