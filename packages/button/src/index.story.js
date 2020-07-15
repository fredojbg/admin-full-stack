import React from 'react';
import {storiesOf } from '@storybook/react';

import { Button, ButtonAzul } from '.';

storiesOf('Button', module).add('default', () => <Button>{'Button'}</Button>);
storiesOf('Button Azul', module).add('default', () => <ButtonAzul>{'Button'}</ButtonAzul>);


