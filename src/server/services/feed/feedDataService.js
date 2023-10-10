const axios = require("axios");

class FeedDataService {
  
  constructor() {}

  async gellAllFeeds(body) {
    const url = "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/";
    const result = await axios.get(`${url}${body.pageId}`);
    return result.data;
  }
}
module.exports = FeedDataService;
