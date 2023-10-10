import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const feedSlice = createSlice({
  name: "feedSlice",
  initialState: {
    feedsList: [],
    pageId: 1,
  },
  reducers: {
    setFeedsList: (state, action) => {
      let tempFeedList = [];
      if(action.payload && action.payload.length> 0){
        tempFeedList = [...state?.feedsList, ...action?.payload];
      }else {
        tempFeedList = state.feedsList;
      }
      state.feedsList = tempFeedList;
    },
    setPageId: (state, action) => {
      state.pageId = action.payload;
    },
  },
});

// function used to call feeds based on page number through redux thunk
export const getAllFeeds = (pageNumber = 1) => {
  return async (dispatch) => {
    dispatch(setFeedsList());
    const result = await axios.post("/api/getAllFeeds", { pageId: pageNumber });
    dispatch(setFeedsList(result?.data?.data?.nodes));
  };
};

export const { setFeedsList, setPageId } = feedSlice.actions;

export default feedSlice.reducer;
