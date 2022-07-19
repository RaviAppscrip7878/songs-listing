import { createSelector, createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoading: false,
  searchList: [],
};
const searchSlice = createSlice({
  name: "search",
  initialState: initState,
  reducers: {
    searchAlbumFetch: (state) => {
      state.isLoading = true;
    },
    searchAlbumSuccess: (state, action) => {
      return {
        ...state,
        searchList: action.payload.searchList,
        isLoading: false,
      };
    },
    clearState: () => {
      return { isLoading: false, searchList: [] };
    },
  },
});

const currentState = (state) => state.searchList;
export const searchListSelector = createSelector(
  currentState,
  (state) => state.searchList
);
export const isLoadingSelector = createSelector(
  currentState,
  (state) => state.isLoading
);
export const searchReducer = searchSlice.reducer;
export const { searchAlbumFetch, clearState, searchAlbumSuccess } =
  searchSlice.actions;
