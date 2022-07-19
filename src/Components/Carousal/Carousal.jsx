import React, { memo } from "react";
import { Carousel } from "react-bootstrap";
import AlbumCard from "../ListCard";

function Carousal({ relatedArtistsList }) {
  return (
    <Carousel indicators={false}>
      {relatedArtistsList.map((item, i) => (
        <Carousel.Item key={i}>
          <div className="row">
            {item.map((artist, index) => (
              <AlbumCard
                extraClasses={"col related-artists"}
                detail={artist}
                key={index}
              />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default memo(Carousal);
