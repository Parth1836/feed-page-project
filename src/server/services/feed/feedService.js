const FeedDataService = require("./feedDataService");

class FeedService {
  constructor() {
    this._feedDataService = new FeedDataService();
  }

  async gellAllFeeds(body) {
    try {
      const gellAllFeedsServiceData = await this._feedDataService.gellAllFeeds(
        body
      );
      return gellAllFeedsServiceData;
    } catch (error) {
      res.send({
        status: "error",
        message: error.message,
      });
    }
  }
}

module.exports = FeedService;
