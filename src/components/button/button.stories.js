import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';

export default {
  title: 'Global|Button',
};

export const basicUsage = () => (
  <Button
    text="Click me"
    onClick={action('clicked!')}
  />
);

export const outline = () => (
  <Button
    text="Click me"
    onClick={action('clicked!')}
    focusType="outline"
  />
);

export const underline = () => (
  <Button
    text="Click me"
    onClick={action('clicked!')}
    focusType="underline"
  />
);
