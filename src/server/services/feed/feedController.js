const FeedService = require("./feedService");

class FeedController {
  constructor() {
    this._feedService = new FeedService();
    this.gellAllFeeds = this.gellAllFeeds.bind(this);
  }

  /** Input  - number
   *  Output - array
   *  Functionality - To get feeds data from api based on page number
   */
  async gellAllFeeds(req, res) {
    try {
      const result = await this._feedService.gellAllFeeds(req.body);
      res.status(200).send({
        status: "success",
        message: "Feed List",
        data: result,
      });
    } catch (error) {
      res.send({
        status: "error",
        message: error.message,
      });
    }
  }
}

module.exports = FeedController;
