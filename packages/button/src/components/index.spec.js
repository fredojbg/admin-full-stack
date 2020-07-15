import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Modal from '.';

describe('Modal', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Modal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

