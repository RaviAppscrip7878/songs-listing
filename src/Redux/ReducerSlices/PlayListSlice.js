import { createSelector, createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  albumList: [],
  albumDetail: {},
  artistList: [],
  artistDetail: {},
  artistAlbum: [],
  topTracks: [],
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
