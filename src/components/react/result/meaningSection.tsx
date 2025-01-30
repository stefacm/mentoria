import React, { type FC } from 'react';

import hexGenerator from '@shared/utils/hexGenerator';

interface MeaningProps {
  meaning: {
    definitions: { definition: string; example?: string }[];
    partOfSpeech: string;
    synonyms: string[];
  };
}

const MeaningSection: FC<MeaningProps> = ({ meaning }) => (
  <section className="flex flex-col gap-8 md:gap-10">
    <div className="flex items-center gap-7">
      <h2 className="text-lg font-bold text-gray-700 md:text-2xl dark:text-white">
        {meaning.partOfSpeech}
      </h2>
      <div className="flex-grow border-t border-slate-300 dark:border-slate-700" />
    </div>
    <div className="flex flex-col gap-7">
      <h3 className="text-base font-normal text-gray-500 md:text-xl">Meaning</h3>
      <ul className="flex list-outside list-disc flex-col gap-3 pl-12 text-gray-700 marker:text-purple-600 dark:text-white">
        {meaning.definitions.map((def) => (
          <li className="text-sm font-normal md:text-lg" key={hexGenerator()}>
            {def.definition}
            {'example' in def && (
              <blockquote className="italic text-gray-500">{`"${def.example}"`}</blockquote>
            )}
          </li>
        ))}
      </ul>
    </div>
    {!!meaning.synonyms.length && (
      <div className="flex items-center gap-6">
        <h3 className="text-base font-normal text-gray-500 md:text-xl">Synonyms</h3>
        <p className="text-base font-bold text-purple-600 md:text-xl">
          {meaning.synonyms.join(' ')}
        </p>
      </div>
    )}
  </section>
);

export default MeaningSection;
