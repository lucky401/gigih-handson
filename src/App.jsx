import React from 'react';

import SearchBar from './components/search-bar';
import Gif from './components/gif';

import { MOCK_GIF } from './constants';

function gifCollection(gifs) {
  return gifs.filter((gif) => gif.rating === 'pg');
}

function App() {
  const gifs = gifCollection(MOCK_GIF);

  return (
    <div className="app">
      <h1 className="title text-center">Search GIF</h1>
      <SearchBar />
      {gifs.map((gif) => (
        <Gif gif={gif} key={gif.id} />
      ))}
    </div>
  );
}

export default App;
