/**************************************
 *** Start
 *************************************/

 // project was created with `npx create-react-app storybook-example`
 // Storybook was added with `npx -p @storybook/cli sb init`
 // look at the stories it made for Welcome and Button already
 // I created Card and Button components that we can work with



/**************************************
 *** Card
 *************************************/

// create some card stories/examples in card.stories.js
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



/**************************************
 *** Organization
 *************************************/

// 0-Welcome.stories.js
export default {
  title: 'Demo|Welcome',
};

// 1-Button.stories.js
export default {
  title: 'Demo|Button',
};

// card.stories.js
export default {
  title: 'Global|Card',
};

// button.stories.js (doesn't exit yet though)
export default {
  title: 'Global|Button',
};



/**************************************
 *** Button
 *************************************/

// create some button stories/examples in button.stories.js
// use window.alert this time
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



/**************************************
 *** Actions Add-on
 *************************************/

import { action } from '@storybook/addon-actions';

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



/**************************************
 *** Manually Testing the Button
 *************************************/

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

// go fix the CSS to have a max width
```
.button {
  max-width: 18rem;
}
```

// with no spaces
export const withNoSpacesInText = () => (
  <Button
    text="sdhfkjhgfdkjghdfjghdflkfdjskdlafsjlkfghfslkdjadjkfhgljsdajhklfgfhdjfkhdajkdfghjkfahdadjkfhafsjkhddfgjlhfasdlkfah"
    onClick={action('clicked!')}
    focusType="outline"
  />
);

// go fix the CSS to wrap the words
```
.button {
  word-break: break-word;
  word-wrap: break-word;
}
```



/**************************************
 *** Knobs
 *************************************/

 // yarn add --dev @storybook/addon-knobs

import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Global|Button',
  decorators: [withKnobs],
};

export const knobs = () => (
  <Button
    text={text('text', 'Click me')}
    onClick={action('clicked!')}
    focusType={select('focusType', ['outline', 'underline'], 'outline')}
  />
);



/**************************************
 *** Build the Static Site
 *************************************/

 // yarn build-storybook
 // see output in storybook-static
 