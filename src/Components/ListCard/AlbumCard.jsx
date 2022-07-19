import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import "./AlbumCard.scss";

const ArtistName = ({ artists, onArtistClick }) => {
  return (
    <div>
      {artists?.map((artist, i) => (
        <span
          onClick={() => onArtistClick(artist?.id)}
          className="artist"
          key={i}
        >
          {artist?.name} {i < artists?.length - 1 ? ", " : ""}
        </span>
      ))}
    </div>
  );
};
function AlbumCard({ detail, extraClasses }) {
  const navigate = useNavigate();
  const onArtistClick = (id) => {
    navigate(`/artist/${id}`);
  };
  return (
    <div className={`card-container ${extraClasses}`}>
      <div>
        <img src={detail?.images[0]?.url} alt="card-img" />
      </div>
      <div className="playlist-name">{detail?.name}</div>
      <div className="artist-name">
        <ArtistName onArtistClick={onArtistClick} artists={detail?.artists} />
      </div>
    </div>
  );
}

export default memo(AlbumCard);
