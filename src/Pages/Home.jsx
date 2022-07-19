import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlbumCard from "../Components/ListCard";
import Loader from "../Components/Loader";
import {
  albumListSelector,
  getAlbumFetch,
  loaderSelector,
  tokenSelector,
} from "../Redux/ReducerSlices/PlayListSlice";

export default function Home() {
  const dispatch = useDispatch();
  const albumList = useSelector(albumListSelector);
  const isLoading = useSelector(loaderSelector);
  const token = useSelector(tokenSelector);

  useEffect(() => {
    console.log("token", token);
    if (albumList.length <= 0 && token !== null) {
      dispatch(getAlbumFetch());
    }
  }, [dispatch, token, albumList]);

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
