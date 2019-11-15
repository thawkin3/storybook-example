import React from 'react';
import { Button } from './button';

export default {
  title: 'Button',
};

export const basicUsage = () => (
  <Button
    text="Click me"
    onClick={() => alert('clicked!')}
  />
);

export const outline = () => (
  <Button
    text="Click me"
    onClick={() => alert('clicked!')}
    focusType="outline"
  />
);

export const underline = () => (
  <Button
    text="Click me"
    onClick={() => alert('clicked!')}
    focusType="underline"
  />
);
