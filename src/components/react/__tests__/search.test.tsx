import React from 'react';

import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { locationReplaceMock } from '@shared/vitest/dom.utils';

import Search from '../search';

describe('<Search />', () => {
  test('renders', () => {
    render(<Search />);

    screen.getByPlaceholderText('Search for any word…');
  });

  test('change input and keydown "Enter"', async () => {
    const replaceMock = locationReplaceMock();
    const user = userEvent.setup();

    render(<Search />);

    await user.click(screen.getByPlaceholderText('Search for any word…'));
    await user.keyboard('test');
    await user.keyboard('{Enter}');

    expect(replaceMock).toHaveBeenCalledWith('/?word=test');
  });

  test('change input and keydown "Enter" with empty value', async () => {
    const replaceMock = locationReplaceMock();
    const user = userEvent.setup();

    render(<Search />);

    await user.click(screen.getByPlaceholderText('Search for any word…'));
    await user.keyboard('{Enter}');

    expect(replaceMock).not.toHaveBeenCalled();
  });

  test('onChange with isEmpty', () => {
    render(<Search />);

    fireEvent.blur(screen.getByPlaceholderText('Search for any word…'));

    fireEvent.change(screen.getByPlaceholderText('Search for any word…'), {
      target: { value: 't' },
    });

    expect(screen.queryByText('Whoops, can’t be empty…')).toBeNull();
  });
});
