import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAuthToken,
  tokenSelector,
} from "../Redux/ReducerSlices/PlayListSlice";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(tokenSelector);

  useEffect(() => {
    if (!token || token === null) {
      dispatch(getAuthToken());
    }
    navigate("/");
  }, [token, navigate, dispatch]);

  return (
    <div className="h-100 w-100 d-flex justify-content-center align-items-center">
      <button className="btn  btn-outline-primary btn-sm btn-border-radius-lg">
        Login
      </button>
    </div>
  );
}
