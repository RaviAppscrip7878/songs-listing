import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlbumCard from "../Components/ListCard";
import Loader from "../Components/Loader";
import {
  albumListSelector,
  getAlbumFetch,
  loaderSelector,
} from "../Redux/ReducerSlices/PlayListSlice";

export default function Home() {
  const dispatch = useDispatch();
  const albumList = useSelector(albumListSelector);
  const isLoading = useSelector(loaderSelector);

  useEffect(() => {
    if (albumList.length <= 0) {
      dispatch(getAlbumFetch());
    }
  }, [dispatch, albumList]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="list-container row ">
      {albumList?.map((item, index) => (
        <AlbumCard key={index} extraClasses="col" detail={item} />
      ))}
    </div>
  );
}
