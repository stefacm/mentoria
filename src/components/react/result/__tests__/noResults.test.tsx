import { render, screen } from '@testing-library/react';

import NoResults from '../noResults';

describe('<NoResults />', () => {
  const defaultProps = {
    emoji: '😕',
    message: 'Sorry, we couldn’t find definitions for the word you were looking for.',
    resolution: 'You can try the search again later or head to the web instead.',
    title: 'No Definitions Found',
  };

  test('render with default props', () => {
    render(<NoResults />);

    screen.getByText(defaultProps.emoji);
    screen.getByText(defaultProps.title);
    screen.getByText(`${defaultProps.message} ${defaultProps.resolution}`);
  });

  test('render with custom props', () => {
    const customProps = {
      message: 'Test message',
      resolution: 'Test resolution',
      title: 'Test title',
    };

    render(<NoResults {...customProps} />);

    screen.getByText(customProps.title);
    screen.getByText(`${customProps.message} ${customProps.resolution}`);
  });
});
