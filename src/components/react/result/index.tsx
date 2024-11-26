import React, { useEffect, useRef } from 'react';

import { GET_DICTIONARY } from '@/services/get_dictionary';
import ServicesProvider, { useServiceQuery } from '@shared/react/services';

import Header from './header';
import MeaningSection from './meaningSection';
import SourceSection from './sourceSection';

// TODO: Buscar otra forma de resolver lo que hicimos con ?? {} para que quede mejor.

const Result = () => {
  const word = new URLSearchParams(location.search).get('word');
  const { data } = useServiceQuery(GET_DICTIONARY, { axios: { url: word! }, enabled: !!word });
  const { meanings, phonetic, phonetics, sourceUrls } = data?.data[0] ?? {};
  const audioUrl = phonetics?.find((item) => item.audio !== '')?.audio;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Error al reproducir el audio:', error);
      });
    }
  };

  useEffect(() => {
    if (audioUrl) {
      audioRef.current = new Audio(audioUrl);
    }
  }, [audioUrl]);

  return (
    <div className="flex h-full w-full max-w-3xl flex-col gap-8 md:gap-10">
      <Header audioUrl={audioUrl} phonetic={phonetic} playAudio={playAudio} word={word} />
      {meanings?.map((mean) => <MeaningSection key={mean.partOfSpeech} meaning={mean} />)}
      {!!sourceUrls?.length && <SourceSection sourceUrls={sourceUrls} />}
    </div>
  );
};

export default Result;

export const ResultWithServiceProvider = () => (
  <ServicesProvider>
    <Result />
  </ServicesProvider>
);
