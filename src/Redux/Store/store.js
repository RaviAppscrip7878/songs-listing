import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { playListReducer } from "../ReducerSlices/PlayListSlice";
import { searchReducer } from "../ReducerSlices/SearchSlice";
import rootSaga from "../Saga/rootsaga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    playList: playListReducer,
    searchList: searchReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
