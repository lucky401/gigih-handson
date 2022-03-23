import React from 'react';

import SearchBar from './components/search-bar';
import Gif from './components/gif';

import { MOCK_GIF } from './constants';

function App() {
  return (
    <div className="app">
      <h1 className="title text-center">Search GIF</h1>
      <SearchBar />
      <Gif gif={MOCK_GIF} />
    </div>
  );
}

export default App;
