import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArtistAlbumList from "../Components/ArtistAlbumList/ArtistAlbumList";
import ArtistDetaiHeader from "../Components/ArtistComponents";
import ArtistTopTracks from "../Components/ArtistTopTracks/ArtistTopTracks";
import AlbumCard from "../Components/ListCard";
import Loader from "../Components/Loader";
import {
  artistAlbumSelector,
  artistDetailSelector,
  getArtistDetail,
  loaderSelector,
  realetedArtistSelector,
  topTrackSelector,
} from "../Redux/ReducerSlices/PlayListSlice";

function Artist() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const artistDetail = useSelector(artistDetailSelector);
  const artistAlbums = useSelector(artistAlbumSelector);
  const topTracks = useSelector(topTrackSelector);
  const isLoading = useSelector(loaderSelector);
  const relatedArtists = useSelector(realetedArtistSelector);

  useEffect(() => {
    dispatch(getArtistDetail({ id }));
  }, [id, dispatch]);
  return isLoading ? (
    <Loader />
  ) : (
    <section>
      <ArtistDetaiHeader headerDetails={artistDetail} />
      <div className="d-flex">
        {artistAlbums.length > 0 && (
          <ArtistAlbumList
            classes={"w-75"}
            title={"Albums"}
            artistAlbums={artistAlbums}
          />
        )}
        {topTracks.length > 0 && (
          <ArtistTopTracks topTracks={topTracks} title={"Top Tracks"} />
        )}
      </div>
      <div className="related-artist-container m-3">
        <h3>Related Artists</h3>
        <Carousel>
          {relatedArtists.map((item, i) => (
            <Carousel.Item
              key={i}
              prevIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-prev-icon"
                />
              }
            >
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
      </div>
    </section>
  );
}

export default Artist;
