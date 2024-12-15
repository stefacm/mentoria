import React, { type ChangeEvent, type KeyboardEventHandler, useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState(new URLSearchParams(location.search).get('word') ?? '');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleValidation = () => {
    const isValid = search.trim() !== '';
    setIsEmpty(!isValid);
    return isValid;
  };

  const handleAction = () => {
    if (handleValidation()) {
      const params = new URLSearchParams({ word: search.trim() });
      location.replace(`/?${params}`);
    }
  };

  const handleOnKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') handleAction();
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    if (isEmpty) setIsEmpty(false);
  };

  return (
    <div className="w-full max-w-3xl">
      <input
        className={`w-full rounded-2xl bg-gray-200 px-4 py-3 font-bold outline-none dark:bg-gray-800 dark:text-white ${
          isEmpty ? 'outline-red-500' : 'focus:outline-purple-500'
        }`}
        onBlur={handleValidation}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        placeholder="Search for any word…"
        type="search"
        value={search}
      />
      {isEmpty && <p className="mt-3 text-red-500">Whoops, can’t be empty…</p>}
    </div>
  );
};

export default Search;
