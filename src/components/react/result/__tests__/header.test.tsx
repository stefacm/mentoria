import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { audioPlayMock } from '@shared/vitest/dom.utils';

import Header from '../header';

describe('<Header />', () => {
  test('renders', () => {
    render(<Header audioUrl="https://example.com/audio.mp3" phonetic="/tɛst/" word="test" />);

    screen.getByText('test');
    screen.getByText('/tɛst/');
    screen.getByTitle('Play word');
  });

  test('render without props', () => {
    render(<Header />);

    expect(screen.queryByText('test')).toBeNull();
    expect(screen.queryByText('/tɛst/')).toBeNull();
    expect(screen.queryByTitle('Play word')).toBeNull();
  });

  test('calls play method when play button is clicked', () => {
    const play = audioPlayMock();

    render(<Header audioUrl="https://example.com/audio.mp3" />);

    fireEvent.click(screen.getByTitle('Play word'));

    expect(play).toHaveBeenCalled();
  });

  test('calls play method when play button is clicked and rejected', () => {
    const play = vi.fn().mockRejectedValue(undefined);
    audioPlayMock(play);

    render(<Header audioUrl="https://example.com/audio.mp3" />);

    fireEvent.click(screen.getByTitle('Play word'));

    expect(play).toHaveBeenCalled();
  });
});
