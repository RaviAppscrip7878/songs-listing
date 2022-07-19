import React, { memo } from "react";

import "./artistTopTrack.scss";
function ArtistTopTracks({ topTracks, classes, title }) {
  return (
    <div className={`artist-track-list ${classes}`}>
      <span className="list-title">{title}</span>
      <div className="track-list-section">
        {topTracks?.map((item, index) => (
          <div key={index} className="track-item">
            <img
              className="track-img"
              alt={"artist-track"}
              src={item.album.images[0].url}
            />
            <div className="track-name">{item.album.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ArtistTopTracks);
