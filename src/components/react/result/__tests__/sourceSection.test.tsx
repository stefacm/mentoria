import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';

import SourceSection from '../sourceSection';

describe('<SourceSection />', () => {
  const TITLE_SOURCE = 'Source';

  const mockProps = {
    sourceUrls: ['https://example.com', 'https://example2.com'],
  };

  test('renders', () => {
    render(<SourceSection {...mockProps} />);
    const separator = screen.getAllByRole('separator');
    expect(separator).toHaveLength(1);

    screen.getByText(TITLE_SOURCE);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockProps.sourceUrls.length);

    mockProps.sourceUrls.forEach((url, index) => {
      const link = links[index];
      expect(link?.getAttribute('href')).toBe(url);
    });
  });
});
