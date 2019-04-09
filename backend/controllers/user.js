"use strict";

const User = require("../models").User;
const Favorite = require("../models").Favorite;
const UserFavorite = require("../models").UserFavorite;
const Note = require("../models").Note;

exports.listUsers = (req, res) => {
  return User.findAll({
    include: [
      {
        model: Favorite,
        as: "favorites",
        required: true
      }
    ]
  })
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error));
};

exports.favsList = (req, res) => {
  return Favorite.findAll({
    include: [
      {
        model: Note
      }
    ]
  })
    .then(favs => res.status(200).send(favs))
    .catch(error => res.status(400).send(error));
};

// exports.userFavList = (req, res) => {
//   return Favorite.findAll({
//     include: [
//       {
//         model: User,
//         as: "users",
//         required: true
//       }
//     ]
//   }).then(favorites => {
//     const resObj = favorites.map(favorite => {
//       return Object.assign(
//         {},
//         {
//           favId: favorite.id,
//           name: favorite.name,
//           ticker: favorite.ticker,
//           users: favorite.users.map(user => user.id)
//         }
//       );
//     });
//     res.send(resObj);
//   });
// };

exports.getById = (req, res) => {
  return User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "User Not Found"
        });
      }
      return res.status(200).send(user);
    })
    .catch(error => res.status(400).send(error));
};

exports.addFavorite = (req, res) => {
  console.log("Body", req.body);
  console.log("Params", req.params);
  let newFav = {};

  Favorite.create({
    name: req.body.foundTicker.name,
    ticker: req.body.foundTicker.ticker
    // ownerId: req.body.userId
  })
    .then(fav => {
      newFav = fav;

      return UserFavorite.create({
        userId: req.body.userId,
        favId: newFav.id
      });
    })
    .then(() => {
      res.json(newFav);
    });
};
