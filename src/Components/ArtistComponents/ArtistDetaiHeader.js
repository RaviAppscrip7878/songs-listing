import React, { memo } from "react";
import "./artistDetailHeader.scss";
function ArtistDetaiHeader({ headerDetails }) {
  return (
    <div className="artist-header-component">
      <span className="type">
        <i className="fa-solid fa-check"></i>
        {headerDetails?.type}
      </span>
      <span className="name">{headerDetails?.name}</span>
      <span className="followers">
        {headerDetails.followers?.total.toLocaleString("en")} total followers
      </span>
    </div>
  );
}

export default memo(ArtistDetaiHeader);
