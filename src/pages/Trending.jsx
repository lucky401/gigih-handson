/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import serviceGif from '../api/services/gif';

import Gif from '../components/gif';

function HomePage() {
  const [gifs, setGifs] = useState([]);

  const getTrendingGifs = async () => {
    const params = {
      limit: 10,
    };

    try {
      const {
        data: { data },
      } = await serviceGif.trending(params);
      setGifs(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    getTrendingGifs();
  }, []);

  return (
    <>
      <h1 className="title text-center">Trending GIF</h1>
      <p className="text-center my-2">
        <Link to="/">Search Gifs</Link>
      </p>
      <div className="row">
        {gifs.map((gif) => (
          <div className="col-6" key={gif.id}>
            <Gif gif={gif} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
