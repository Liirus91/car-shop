'use client';

import { useState } from 'react';
import { SearchManufacturer } from '.';
import Image from 'next/image';

const SearchButton = ({ otherClasses }: { otherClasses?: string }) => (
  <button
    type="submit"
    className={`-ml-3 z-10 ${otherClasses ? otherClasses : 'sm:hidden'}`}
  >
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
  const [model, setModel] = useState('');
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

      <div className="search__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Car model"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="search__input"
        />
        <SearchButton />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default Search;
