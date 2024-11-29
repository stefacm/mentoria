import React from 'react';

import { GET_DICTIONARY } from '@/services/get_dictionary';
import ServicesProvider, { useServiceQuery } from '@shared/react/services';
import Shimmer from '@shared/react/shimmer';

import Header from './header';
import MeaningSection from './meaningSection';
import SourceSection from './sourceSection';

const Result = () => {
  const word = new URLSearchParams(location.search).get('word');
  const { data, isError, isFetching, isSuccess } = useServiceQuery(GET_DICTIONARY, {
    axios: { url: word! },
    enabled: !!word,
  });

  if (isFetching)
    return (
      <div className="flex h-full w-full max-w-3xl flex-col gap-8 md:gap-10">
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );

  if (isError) return null; // TODO: Mensaje error

  if (!data?.data.length && isSuccess)
    return null; // TODO: Emoji de no resultados
  else if (data?.data.length) {
    const { meanings, phonetic, phonetics, sourceUrls } = data.data.at(0)!;
    const audioUrl = phonetics.find((item) => item.audio !== '')?.audio;

    return (
      <div className="flex h-full w-full max-w-3xl flex-col gap-8 md:gap-10">
        <Header audioUrl={audioUrl} phonetic={phonetic} word={word} />
        {meanings.map((mean) => (
          <MeaningSection key={mean.partOfSpeech} meaning={mean} />
        ))}
        {!!sourceUrls.length && <SourceSection sourceUrls={sourceUrls} />}
      </div>
    );
  }
};

export default Result;

export const ResultWithServiceProvider = () => (
  <ServicesProvider>
    <Result />
  </ServicesProvider>
);
