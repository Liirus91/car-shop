'use client';

import { useState } from 'react';
import { SearchManufacturer } from '.';
import Image from 'next/image';

const SearchButton = () => (
  <button type="submit" className="-ml-3 z-10 sm:hidden">
    <Image
      src="/magnifying-glass.svg"
      alt="Magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const Search = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSearch = () => {};

  return (
    <form className="search" onClick={handleSearch}>
      <div className="search__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton />
      </div>
    </form>
  );
};

export default Search;
