import { render, screen } from '@testing-library/react';

import { GET_DICTIONARY, GET_DICTIONARY_MOCK } from '@/services/get_dictionary';
import { useServiceQueryMock } from '@shared/react/services/__tests__/test.utils';

import Result, { ResultWithServiceProvider } from '..';

vi.mock('../noResults', () => ({
  default: () => <div>NoResults Mocked</div>,
}));

vi.mock('../header', () => ({
  default: () => <div>Header Mocked</div>,
}));

vi.mock('../meaningSection', () => ({
  default: () => <div>MeaningSection Mocked</div>,
}));

vi.mock('../sourceSection', () => ({
  default: () => <div>SourceSection Mocked</div>,
}));

describe('<Result />', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: { search: '?word=keyboard' },
      writable: true,
    });
  });

  test('render when is fetching', () => {
    useServiceQueryMock({
      preset: GET_DICTIONARY,
      result: { data: { data: null }, isFetching: true },
    });

    render(<Result />);
    const shimmers = screen.getAllByTestId('shimmer');
    expect(shimmers).toHaveLength(3);
  });

  test('render when no results', () => {
    useServiceQueryMock({
      preset: GET_DICTIONARY,
      result: {
        data: { data: [] },
        error: {
          response: {} as never,
        },
        isError: true,
      },
    });

    render(<Result />);
    screen.getByText('NoResults Mocked');
  });

  test('render when has results', () => {
    useServiceQueryMock({
      preset: GET_DICTIONARY,
      result: { data: { data: GET_DICTIONARY_MOCK }, isError: false },
    });

    render(<Result />);

    screen.getByText('Header Mocked');
    screen.getByText('SourceSection Mocked');

    expect(screen.getAllByText('MeaningSection Mocked')).toHaveLength(2);
  });

  test('return null when data is empty', () => {
    useServiceQueryMock({
      preset: GET_DICTIONARY,
      result: { data: { data: [] } },
    });

    const { container } = render(<Result />);

    expect(container.firstChild).toBeNull();
  });

  test('return null when word is undefined', () => {
    Object.defineProperty(window, 'location', {
      value: { search: '' },
      writable: true,
    });

    useServiceQueryMock({
      preset: GET_DICTIONARY,
      result: { data: { data: [] } },
    });

    const { container } = render(<Result />);

    expect(container.firstChild).toBeNull();
  });

  test('render when is fetching', () => {
    useServiceQueryMock({
      preset: GET_DICTIONARY,
      result: {
        data: { data: [] },
        error: {
          response: {} as never,
        },
        isError: true,
      },
    });

    render(<ResultWithServiceProvider />);

    screen.getByText('NoResults Mocked');
  });
});
