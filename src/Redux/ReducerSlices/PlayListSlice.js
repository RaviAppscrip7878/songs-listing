import { createSelector, createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  albumList: [],
  albumDetail: {},
  artistList: [],
  artistDetail: {},
  artistAlbum: [],
  topTracks: [],
  realatedArtist: [],
  access_token: null,
};
const playListSlice = createSlice({
  name: "playList",
  initialState: initState,
  reducers: {
    getAuthToken: (state) => {
      state.isLoading = true;
    },
    getAuthTokenSuccess: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    getAlbumFetch: (state) => {
      state.isLoading = true;
    },
    getAlbumList: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        albumList: payload.albums.items,
        artistDetail: {},
        artistAlbum: [],
        topTracks: [],
      };
    },
    getArtistDetail: (state) => {
      state.isLoading = true;
    },
    getArtistDetailSuccess: (state, action) => {
      return {
        ...state,
        artistDetail: action.payload.artistDetails,
        artistAlbum: action.payload.artistAlbums.items,
        topTracks: action.payload.topTracks.tracks,
        realatedArtist: action.payload.realatedArtist.artists,
        isLoading: false,
      };
    },
  },
});
const state = (state) => state.playList;
//selectores
export const loaderSelector = createSelector(state, (state) => state.isLoading);
export const albumListSelector = createSelector(
  state,
  (state) => state.albumList
);
export const tokenSelector = createSelector(
  state,
  (state) => state.access_token
);
export const artistDetailSelector = createSelector(
  state,
  (state) => state.artistDetail
);

export const artistAlbumSelector = createSelector(
  state,
  (state) => state.artistAlbum
);
export const topTrackSelector = createSelector(
  state,
  (state) => state.topTracks
);
export const realetedArtistSelector = createSelector(state, (state) => {
  const dataList = state.realatedArtist;
  const newArray = [];
  const chunkSize = 5;
  for (let i = 0; i < dataList.length; i += chunkSize) {
    const chunk = dataList.slice(i, i + chunkSize);
    newArray.push(chunk);
  }

  return newArray;
});
export const playListReducer = playListSlice.reducer;
export const {
  getAlbumFetch,
  getAuthTokenSuccess,
  getAuthToken,
  getAlbumDetail,
  getAlbumList,
  getArtistDetail,
  getArtistDetailSuccess,
} = playListSlice.actions;
