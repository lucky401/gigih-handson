import React from 'react';

import './styles.css';

function Gif({ gif }) {
  const { title, import_datetime: uploadedDate, images } = gif;

  const {
    fixed_width: { url, webp },
  } = images;

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
