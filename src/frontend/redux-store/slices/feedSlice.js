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
      console.log("set all feeds", action.payload);
      state.feedsList = action.payload;
    },
    setPageId: (state, action) => {
      console.log("set page Id", action.payload);
      state.pageId = action.payload;
    },
  },
});

// function used to call feeds based on page number through redux thunk
export const getAllFeeds = (pageNumber = 1) => {
  return async (dispatch) => {
    dispatch(setFeedsList());
    const result = await axios.post("/api/getAllFeeds", { pageId: pageNumber });
    console.log("feeds result", result?.data?.data?.nodes);
    dispatch(setFeedsList(result?.data?.data?.nodes));
  };
};

export const { setFeedsList, setPageId } = feedSlice.actions;

export default feedSlice.reducer;
