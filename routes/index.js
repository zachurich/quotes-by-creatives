const controller = require("../controllers/index");

module.exports = function(app) {
  app.get("/random-quote", controller.getRandomQuote);
  app.get("/get-person", controller.getPerson);
  app.get("/list-quotes", controller.getListQuotes);
};
