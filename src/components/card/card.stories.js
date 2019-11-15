import React from 'react';
import { Card } from './card';

export default {
  title: 'Global|Card',
};

export const basicUsage = () => (
  <Card
    header="I'm the header!"
    content="I'm the content!"
    footer="I'm the footer!"
  />
);

export const contentOnly = () => (
  <Card
    content="I'm the content!"
  />
);

export const withHeader = () => (
  <Card
    header="I'm the header!"
    content="I'm the content!"
  />
);

export const withFooter = () => (
  <Card
    content="I'm the content!"
    footer="I'm the footer!"
  />
);
