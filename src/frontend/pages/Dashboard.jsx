import React, { useEffect, useState } from "react";
import { getAllFeeds } from "../redux-store/slices/feedSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Header from "../common-components/Header";
import { Grid, TextField } from "@mui/material";
import FeedsList from "../common-components/FeedsList";
import PaginationComponent from "../common-components/PaginationComponent";
import { setPageId } from "../redux-store/slices/feedSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const feedsList = useSelector((state) => state?.feeds?.feedsList);
  const page = useSelector((state) => state?.feeds?.pageId);

  useEffect(() => {
    dispatch(setPageId(1));
    if (feedsList?.length < 1) {
      dispatch(getAllFeeds(page));
    }
  }, []);

  const changePage = (pageNumber) => {
    dispatch(setPageId(pageNumber));
    dispatch(getAllFeeds(pageNumber));
    page = pageNumber;
    window?.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <Grid container style={{ marginTop: "5%" }}>
        <Grid style={{ display: "flex", margin: "auto", marginTop: "7px" }}>
          <TextField
            id="standard-textarea"
            label="Search Feed"
            placeholder="Search Feed"
            variant="standard"
            style={{ width: "500px" }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Grid>
        {feedsList?.length && (
          <FeedsList feedsList={feedsList} searchQuery={searchQuery} />
        )}
      </Grid>
      {feedsList && feedsList?.length > 0 && (
        <PaginationComponent
          totalPages={10}
          changePage={changePage}
          currentPage={page}
        />
      )}
    </>
  );
};

export default Dashboard;
