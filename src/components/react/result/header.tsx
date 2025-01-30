import React, { type FC, useRef } from 'react';

import Play from '@static/assets/play.svg?react';

interface HeaderProps {
  audioUrl?: string;
  phonetic?: string;
  word?: string;
}

const Header: FC<HeaderProps> = ({ audioUrl, phonetic, word }) => {
  const audioRef = useRef<HTMLAudioElement | null>(audioUrl ? new Audio(audioUrl) : null);

  const playAudio = () => {
    audioRef.current?.play().catch(() => undefined);
  };

  return (
    <section className="flex w-full justify-between space-x-4">
      <div className="flex flex-col space-y-3">
        {word && <h1 className="text-2xl font-bold md:text-6xl">{word}</h1>}
        {phonetic && <p className="text-lg text-purple-600 md:text-2xl">{phonetic}</p>}
      </div>
      {audioUrl && (
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent hover:bg-black hover:bg-opacity-5 focus:outline-purple-500 md:h-20 md:w-20"
          onClick={playAudio}
          title="Play word"
        >
          <Play className="h-12 w-12 md:h-20 md:w-20" height={20} width={20} />
        </button>
      )}
    </section>
  );
};

export default Header;
