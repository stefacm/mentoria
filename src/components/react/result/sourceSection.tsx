import React from 'react';

interface SourceSectionProps {
  sourceUrls: string[];
}

const SourceSection: React.FC<SourceSectionProps> = ({ sourceUrls }) => (
  <section>
    <div className="flex-grow border-t border-gray-300" />
    <p className="mt-6 flex flex-wrap gap-5 text-sm md:mt-5">
      <span className="w-full text-gray-500 underline md:w-auto">Source</span>
      {sourceUrls.map((url, index) => (
        <a
          className="underline dark:text-white"
          href={url}
          key={index}
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
