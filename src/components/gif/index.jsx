import React from 'react';

import './styles.css';

function Gif({ gif }) {
  const { title, uploadedDate, url, webp } = gif;

  return (
    <div className="gif">
      <picture>
        <source srcSet={webp} type="image/webp" />
        <img src={url} alt={title} />
      </picture>
      <div className="gif-info">
        <p className="gif-title">{title}</p>
        <p className="gif-uploaded-date">{uploadedDate}</p>
      </div>
    </div>
  );
}

export default Gif;
