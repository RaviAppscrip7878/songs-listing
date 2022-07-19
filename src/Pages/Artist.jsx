import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArtistAlbumList from "../Components/ArtistAlbumList/ArtistAlbumList";
import ArtistDetaiHeader from "../Components/ArtistComponents";
import ArtistTopTracks from "../Components/ArtistTopTracks/ArtistTopTracks";
import Carousal from "../Components/Carousal";
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
      <div className="related-artist-container m-3 mb-0">
        <h3>Related Artists</h3>
        {relatedArtists.length > 0 && (
          <Carousal relatedArtistsList={relatedArtists} />
        )}
      </div>
    </section>
  );
}

export default Artist;
