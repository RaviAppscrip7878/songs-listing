import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getAuthTokenFromLocal } from "../../Helpers/CommonHelpers";
import { searchAlbumSuccess } from "../ReducerSlices/SearchSlice";

function* searchAlbum({ payload }) {
  const searchRes = yield call(() =>
    axios.get(
      `https://api.spotify.com/v1/search?type=album&include_external=audio&q=${payload.search}`,
      {
        headers: {
          Authorization: `Bearer ${getAuthTokenFromLocal()}`,
        },
      }
    )
  );
  yield put(searchAlbumSuccess({ searchList: searchRes.data.albums.items }));
}

function* searchSaga() {
  yield takeEvery("search/searchAlbumFetch", searchAlbum);
}

export default searchSaga;
