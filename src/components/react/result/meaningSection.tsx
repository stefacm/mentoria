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
      <div className="flex flex-col gap-3 pl-12">
        {meaning.definitions.map((def) => (
          <ul
            className="list-outside list-disc text-gray-700 marker:text-purple-600 dark:text-white"
            key={hexGenerator()}
          >
            <li className="text-sm font-normal md:text-lg">
              {def.definition}
              {'example' in def && (
                <blockquote className="italic text-gray-500">&quot;{def.example}&quot;</blockquote>
              )}
            </li>
          </ul>
        ))}
      </div>
    </div>
    {meaning.synonyms.length > 0 && (
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
