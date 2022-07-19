import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import AlbumCard from "../Components/ListCard";
import Loader from "../Components/Loader";
import {
  isLoadingSelector,
  searchAlbumFetch,
  searchListSelector,
} from "../Redux/ReducerSlices/SearchSlice";

export default function Search() {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const searchString = params.get("q");
  const isLoading = useSelector(isLoadingSelector);
  const searchList = useSelector(searchListSelector);

  useEffect(() => {
    if (searchString !== "" && searchString !== null) {
      dispatch(searchAlbumFetch({ search: searchString }));
    }
  }, [searchString, dispatch]);

  //   useEffect(() => {
  //     return () => {
  //       dispatch(clearState());
  //     };
  //   }, [dispatch]);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="list-container h-100 row ">
      {searchList.length <= 0 && (
        <div className="d-flex text-uppercase justify-content-center align-items-center h-100">
          Empty List
        </div>
      )}
      {searchList?.map((item, index) => (
        <AlbumCard key={index} extraClasses="col" detail={item} />
      ))}
    </div>
  );
}
