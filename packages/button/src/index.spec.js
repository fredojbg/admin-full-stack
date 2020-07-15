import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Button, ButtonAzul } from '.';

describe('Button', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Button>{'Test'}</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ButtonAzul', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<ButtonAzul>{'Test'}</ButtonAzul>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});