import React, { useRef } from 'react';

import Play from '@static/assets/play.svg?react';

import mockResult from '@/mocks/result.json';

const Result = () => {
  const { meanings, phonetic, phonetics, sourceUrls, word } = mockResult;
  const audioUrl = phonetics.find((item) => item.audio !== '')?.audio;
  const audioRef = useRef(audioUrl ? new Audio(audioUrl) : null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
      });
    }
  };

  return (
    <div className="flex h-full w-full max-w-3xl flex-col gap-8 md:gap-10">
      <section className="flex w-full justify-between space-x-4">
        <div className="flex flex-col space-y-3">
          <h1 className="text-2xl font-bold md:text-6xl">{word}</h1>
          <p className="text-lg text-purple-600 md:text-2xl">{phonetic}</p>
        </div>
        {audioUrl && (
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent hover:bg-black hover:bg-opacity-5 focus:outline-purple-500 md:h-20 md:w-20"
            onClick={playAudio}
          >
            <Play className="h-12 w-12 md:h-20 md:w-20" height={20} width={20} />
          </button>
        )}
      </section>
      {meanings.map((mean) => (
        <section className="flex flex-col gap-8 md:gap-10" key={mean.partOfSpeech}>
          <div className="flex items-center gap-7">
            <h2 className="text-lg font-bold text-gray-700 md:text-2xl dark:text-white">
              {mean.partOfSpeech}
            </h2>
            <div className="flex-grow border-t border-gray-300" />
          </div>
          <div className="flex flex-col gap-7">
            <h3 className="text-base font-normal text-gray-500 md:text-xl">Meaning</h3>
            <div className="flex flex-col gap-3 pl-12">
              {mean.definitions.map((def, index) => (
                <ul
                  className="list-outside list-disc text-gray-700 marker:text-purple-600 dark:text-white"
                  key={index}
                >
                  <li className="text-sm font-normal md:text-lg">
                    {def.definition}
                    {'example' in def && (
                      <blockquote className="italic text-gray-500">
                        &quot;{def.example}&quot;
                      </blockquote>
                    )}
                  </li>
                </ul>
              ))}
            </div>
          </div>
          {mean.synonyms.length > 0 && (
            <div className="flex items-center gap-6">
              <h3 className="text-base font-normal text-gray-500 md:text-xl">Synonyms</h3>
              <p className="text-base font-bold text-purple-600 md:text-xl">
                {mean.synonyms.join(' ')}
              </p>
            </div>
          )}
        </section>
      ))}

      {sourceUrls.length > 0 && (
        <section>
          <div className="flex-grow border-t border-gray-300" />
          <p className="mt-6 flex flex-wrap gap-5 text-sm md:mt-5">
            <span className="w-full text-gray-500 underline md:w-auto">Source </span>
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
      )}
    </div>
  );
};

export default Result;
