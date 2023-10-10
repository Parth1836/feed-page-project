import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./FeedsList.css";
import { convertToDate } from "../common-functions/convertDateFormat";
import { TextField } from "@mui/material";

function FeedsList(props) {
  const { feedsList } = props;
  const [filteredList, setFilteredList] = useState([]);

  const handleSearch = (value) => {
    if (value?.length > 0) {
      const tempFilterList = feedsList?.filter((feed) => {
        return feed?.node?.title
          ?.toLocaleLowerCase()
          .includes(value.toLocaleLowerCase());
      });
      setFilteredList(tempFilterList);
    } else {
      setFilteredList(feedsList);
    }
  };

  useEffect(() => {
    setFilteredList(feedsList);
  }, [feedsList]);

  return (
    <>
      <Grid style={{ display: "flex", margin: "auto", marginTop: "7px" }}>
        <TextField
          id="standard-textarea"
          label="Search Feed"
          placeholder="Search Feed"
          variant="standard"
          style={{ width: "500px" }}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Grid>
      <Grid style={{ padding: "50px 25px" }} container spacing={2}>
        {filteredList?.map((feed, idx) => (
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
            item
            xs={12}
            md={12}
            lg={12}
          >
            <div
              id={idx}
              style={{
                display: "flex",
                width: "800px",
                flexDirection: "row",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <LazyLoadImage
                className="feed-image"
                src={feed?.node?.ImageStyle_thumbnail}
                alt="Image Alt"
              />
              <div>
                <h3 className="feed-title">
                  {feed?.node?.title?.length > 50
                    ? `${feed?.node?.title?.slice(0, 49)}...`
                    : feed?.node?.title}
                </h3>
                <h3 className="feed-date">
                  {convertToDate(feed?.node?.last_update)}
                </h3>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default React.memo(FeedsList);
