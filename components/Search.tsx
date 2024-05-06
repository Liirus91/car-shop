'use client';

import { useState } from 'react';
import { SearchManufacturer } from '.';

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
      </div>
    </form>
  );
};

export default Search;
