const controller = require("../controllers/index");

module.exports = function(app) {
  app.get("/random-quote", controller.getRandomQuote);
  app.get("/check-quotes", controller.checkForQuotes);
  app.get("/list-quotes", controller.getListQuotes);
};
