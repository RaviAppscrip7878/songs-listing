import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ArtistAlbumList from "../Components/ArtistAlbumList/ArtistAlbumList";
import ArtistDetaiHeader from "../Components/ArtistComponents";
import ArtistTopTracks from "../Components/ArtistTopTracks/ArtistTopTracks";
import Loader from "../Components/Loader";
import {
  artistAlbumSelector,
  artistDetailSelector,
  getArtistDetail,
  loaderSelector,
  topTrackSelector,
} from "../Redux/ReducerSlices/PlayListSlice";

function Artist() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const artistDetail = useSelector(artistDetailSelector);
  const artistAlbums = useSelector(artistAlbumSelector);
  const topTracks = useSelector(topTrackSelector);
  const isLoading = useSelector(loaderSelector);

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
    </section>
  );
}

export default Artist;
