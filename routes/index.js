const controller = require("../controllers/index");

module.exports = function(app) {
  app.get("/quote", controller.getQuery, controller.getQuote);
};
