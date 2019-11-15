import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Button } from './button';

export default {
  title: 'Global|Button',
  decorators: [withKnobs],
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

export const withLongTextOutline = () => (
  <Button
    text="Click me. But think about it first. Don't just go around clicking things. That's dangerous. Now this button text is getting pretty lengthy."
    onClick={action('clicked!')}
    focusType="outline"
  />
);

export const withLongTextUnderline = () => (
  <Button
    text="Click me. But think about it first. Don't just go around clicking things. That's dangerous. Now this button text is getting pretty lengthy."
    onClick={action('clicked!')}
    focusType="underline"
  />
);

export const withNoSpacesInText = () => (
  <Button
    text="sdhfkjhgfdkjghdfjghdflkfdjskdlafsjlkfghfslkdjadjkfhgljsdajhklfgfhdjfkhdajkdfghjkfahdadjkfhafsjkhddfgjlhfasdlkfah"
    onClick={action('clicked!')}
    focusType="outline"
  />
);

export const knobs = () => (
  <Button
    text={text('text', 'Click me')}
    onClick={action('clicked!')}
    focusType={select('focusType', ['outline', 'underline'], 'outline')}
  />
);
