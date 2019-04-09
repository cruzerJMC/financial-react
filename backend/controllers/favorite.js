const Favorite = require("../models").Favorite;

exports.createFav = (req, res) => {
  Favorite.create({
    name: req.body.name,
    ticker: req.body.ticker
  }).then(favorite => {
    res.json(favorite);
  });
};
