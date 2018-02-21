const wikiquote = require("wikiquote");

exports.getQuery = function(req, res, next) {
  const userQuery = req.query.search || null;
  wikiquote.search(userQuery).then(results => {
    res.locals.results = results;
    next();
  });
};

exports.getQuote = function(req, res, next) {
  const query = res.locals.results;
  res.json(query);
  next();
};
