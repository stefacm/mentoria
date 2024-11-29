import React, { type FC } from 'react';

import hexGenerator from '@shared/utils/hexGenerator';

interface SourceSectionProps {
  sourceUrls: string[];
}

const SourceSection: FC<SourceSectionProps> = ({ sourceUrls }) => (
  <section>
    <hr className="border-slate-300 dark:border-slate-700" />
    <p className="mt-6 flex flex-wrap gap-5 text-sm md:mt-5">
      <span className="w-full text-gray-500 underline md:w-auto">Source</span>
      {sourceUrls.map((url) => (
        <a
          className="underline dark:text-white"
          href={url}
          key={hexGenerator()}
          rel="noreferrer"
          target="_blank"
        >
          {url}
        </a>
      ))}
    </p>
  </section>
);

export default SourceSection;
