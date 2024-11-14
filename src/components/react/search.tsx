import React, { type ChangeEventHandler, type KeyboardEventHandler, useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearch(event.currentTarget.value);
  };

  const handleOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      location.replace(`/word/${search}`);
    }
  };

  return (
    <input
      className="w-full max-w-3xl rounded-2xl bg-gray-200 px-4 py-3 font-bold outline-none focus:outline-purple-500 dark:bg-gray-800 dark:text-white"
      onChange={handleSearch}
      onKeyDown={handleOnKeyDown}
      placeholder="Search for any word…"
      type="search"
      value={search}
    />
  );
};

export default Search;