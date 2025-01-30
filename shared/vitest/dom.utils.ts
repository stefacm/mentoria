/**
 * This file can be used to define DOM test utils
 */

import { screen } from '@testing-library/dom';

//////////////////////////////////////////////////////////////
export const locationAssignMock = (href = 'https://localhost') => {
  const assign = vi.fn();
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: new URL(href),
  });
  window.location.assign = assign;
  return assign;
};

//////////////////////////////////////////////////////////////

export const locationReplaceMock = (href = 'https://localhost') => {
  const replace = vi.fn();
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: new URL(href),
  });
  window.location.replace = replace;
  return replace;
};

//////////////////////////////////////////////////////////////
export const audioPlayMock = (audioPlay = vi.fn().mockResolvedValue(undefined)) => {
  Object.defineProperty(global.window.HTMLMediaElement.prototype, 'play', {
    configurable: true,
    get() {
      return audioPlay;
    },
  });

  return audioPlay;
};
