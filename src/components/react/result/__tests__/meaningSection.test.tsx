import { render, screen } from '@testing-library/react';

import MeaningSection from '../meaningSection';

describe('<MeaningSection />', () => {
  const TITLE_MEANING = 'Meaning';
  const TITLE_SYNONYMS = 'Synonyms';

  const mockProps = {
    definitions: [
      { definition: 'Test definition 1' },
      { definition: 'Test definition 2', example: 'Test example 2' },
    ],
    partOfSpeech: 'Test part of speech',
    synonyms: ['Synonym 1', 'Synonym 2'],
  };

  test('renders', () => {
    render(<MeaningSection meaning={mockProps} />);

    screen.getByText(mockProps.partOfSpeech);
    screen.getByText(TITLE_MEANING);
    screen.getByText(TITLE_SYNONYMS);

    const list = screen.getByRole('list');
    expect(list.tagName.toLowerCase()).toBe('ul');
  });

  test('render the correct number of definitions and examples', () => {
    render(<MeaningSection meaning={mockProps} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockProps.definitions.length);

    mockProps.definitions.forEach(({ definition, example }, index) => {
      const listItem = listItems[index];
      expect(listItem?.textContent).toContain(definition);

      if (example) {
        screen.getByText(`"${example}"`);
      }
    });
  });

  test('render synonyms', () => {
    render(<MeaningSection meaning={mockProps} />);

    screen.getByText(mockProps.synonyms.join(' '));
  });
});
