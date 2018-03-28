const wikiquote = require("wikiquote");

exports.getRandomQuote = function(req, res, next) {
  const userQuery = req.query.search || null;
  wikiquote
    .searchByTitle(userQuery)
    .then(page => wikiquote.getRandomQuote(page[0].title))
    .then(quote => res.json(quote))
    .catch(err => res.json(err));
};

exports.getPerson = function(req, res, next) {
  const userQuery = req.query.search || null;
  wikiquote
    .searchPeople(userQuery)
    .then(person => res.json(person[0]))
    .catch(err => res.json(err));
};

exports.getListQuotes = function(req, res, next) {
  const userQuery = req.query.search || null;
  wikiquote
    .searchByTitle(userQuery)
    .then(page => wikiquote.list(page[0].title))
    .then(quotes =>
      res.json(
        quotes
          .filter(item => {
            item.quote = item.quote.replace(item.source, "");
            return item;
          })
          .filter(item => (item.source ? item : null))
      )
    )
    .catch(err => res.json(err));
};
