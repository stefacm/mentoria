import React from 'react';

import { render, screen } from '@testing-library/react';

import Comp from '../comp';

describe('<Comp />', () => {
  test('should render', () => {
    render(<Comp />);
    screen.getByText('Test');
  });
});
