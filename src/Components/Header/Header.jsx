import React, { memo, useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import {
  getAuthToken,
  tokenSelector,
} from "../../Redux/ReducerSlices/PlayListSlice";
import "./Header.scss";
function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();

  const token = useSelector(tokenSelector);
  const [coockie, setCookie] = useCookies();
  useEffect(() => {
    if (token) {
      setCookie("token", token);
    }
    if (
      (!token || token === null) &&
      (!coockie.token || !coockie.token === null)
    ) {
      dispatch(getAuthToken());
    }
  }, [token, coockie, dispatch, setCookie]);

  const onBackClick = () => {
    navigate(-1);
  };
  const onSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const onSearchClick = useCallback(() => {
    if (search !== "")
      navigate({
        pathname: "search",
        search: createSearchParams({
          q: search,
        }).toString(),
      });
  }, [search, navigate]);
  const onSearchEnter = useCallback(
    (e) => {
      if (search !== "" && e.keyCode === 13)
        navigate({
          pathname: "search",
          search: createSearchParams({
            q: search,
          }).toString(),
        });
    },
    [search, navigate]
  );

  return (
    <div className="header-container">
      <div className="d-flex">
        {pathname.includes("/artist") && (
          <button onClick={onBackClick} className="btn-back">
            <i className="button-icon fa-solid fa-circle-chevron-left"></i>
          </button>
        )}
        <div>
          <div className="search-container">
            <input
              value={search}
              onChange={onSearchChange}
              onKeyDown={(e) => onSearchEnter(e)}
              className="search-inp"
              placeholder="search"
            />
            <button onClick={onSearchClick} className="btn-back">
              <i className="button-icon fa-solid fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="user-icon">
        <i className="button-icon fa-solid fa-circle-user"></i>
      </div>
    </div>
  );
}

export default memo(Header);
