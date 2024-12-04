import React, { type FC } from 'react';

interface NoResultsProps {
  message?: string;
  resolution?: string;
  title?: string;
}

const NoResults: FC<NoResultsProps> = ({
  message = 'Sorry, we couldn’t find definitions for the word you were looking for.',
  resolution = 'You can try the search again later or head to the web instead.',
  title = 'No Definitions Found',
}) => {
  return (
    <div className="flex h-full max-w-3xl flex-col items-center justify-center gap-3 rounded-lg p-4 text-center">
      <span className="mb-8 text-6xl">😕</span>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-base font-normal text-gray-500 md:text-xl">
        {message} {resolution}
      </p>
    </div>
  );
};

export default NoResults;
