/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import serviceGif from './api/services/gif';

import SearchBar from './components/search-bar';
import Gif from './components/gif';

function App() {
  const [gifs, setGifs] = useState([]);

  const getGifs = async (query) => {
    if (!query) return;

    const params = {
      q: query,
      limit: 10,
    };

    try {
      const {
        data: { data, pagination },
      } = await serviceGif.search(params);
      setGifs(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  const onSearchChange = async (event) => {
    event.preventDefault();
    const q = event.target[0].value;
    await getGifs(q);
  };

  return (
    <div className="app">
      <h1 className="title text-center">Search GIF</h1>
      <SearchBar onSearchChange={onSearchChange} />
      <div className="row">
        {gifs.map((gif) => (
          <div className="col-6" key={gif.id}>
            <Gif gif={gif} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
