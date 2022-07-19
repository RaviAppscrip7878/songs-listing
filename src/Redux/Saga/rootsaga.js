import { spawn } from "redux-saga/effects";
import artistListSaga from "./playListSaga";
import searchSaga from "./searchSaga";
export default function* rootSaga() {
  yield spawn(artistListSaga);
  yield spawn(searchSaga);
}
