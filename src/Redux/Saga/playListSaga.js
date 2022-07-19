import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getAuthTokenFromLocal } from "../../Helpers/CommonHelpers";
import {
  getAlbumList,
  getArtistDetailSuccess,
  getAuthTokenSuccess,
} from "../ReducerSlices/PlayListSlice";

//This action gets the token from spotify and returns the authentication function
function* getSpotifyAuthenticated() {
  const client_id = "3eed408061e74216b38b2fa60dbdf0df";
  const client_secret = "76b6fd1392e94a05b1c328af67b38d21";

  const res = yield call(() =>
    axios("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(client_id + ":" + client_secret),
      },
      data: "grant_type=client_credentials",
    })
  );

  localStorage.setItem("token", res.data.access_token);

  yield put(getAuthTokenSuccess(res.data));
}

//This action gets the all albums from api
function* getAlbumListAction() {
  const albumRes = yield call(() =>
    axios.get("https://api.spotify.com/v1/browse/new-releases?limit=50", {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocal()}`,
      },
    })
  );
  const { data } = albumRes;
  yield put(getAlbumList(data));
}

function* getArtistDetails({ payload }) {
  const artist = yield call(() =>
    axios.get(`https://api.spotify.com/v1/artists/${payload.id}`, {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocal()}`,
      },
    })
  );
  const albums = yield call(() =>
    axios.get(
      `https://api.spotify.com/v1/artists/${payload.id}/albums?limit=50`,
      {
        headers: {
          Authorization: `Bearer ${getAuthTokenFromLocal()}`,
        },
      }
    )
  );
  const topTracks = yield call(() =>
    axios.get(
      `https://api.spotify.com/v1/artists/${payload.id}/top-tracks?market=in`,
      {
        headers: {
          Authorization: `Bearer ${getAuthTokenFromLocal()}`,
        },
      }
    )
  );

  yield put(
    getArtistDetailSuccess({
      artistDetails: artist.data,
      artistAlbums: albums.data,
      topTracks: topTracks.data,
    })
  );
}

function* artistListSaga() {
  yield takeEvery("playList/getAlbumFetch", getAlbumListAction);
  yield takeEvery("playList/getAuthToken", getSpotifyAuthenticated);
  yield takeEvery("playList/getArtistDetail", getArtistDetails);
}

export default artistListSaga;
