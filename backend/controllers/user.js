"use strict";

const User = require("../models").User;
const Favorite = require("../models").Favorite;
const UserFavorite = require("../models").UserFavorite;
// const Note = require("../models").Note;

// exports.listUsers = (req, res) => {
//   return User.findAll()

//     .then(users => res.status(200).send(users))
//     .catch(error => res.status(400).send(error));
// };

exports.favsList = (req, res) => {
  return Favorite.findAll()
    .then(favs => res.status(200).send(favs))
    .catch(error => res.status(400).send(error));
};

const handleResponse = res => {
  return data => {
    console.log(data);
    res.send(data);
  };
};

const handleError = res => {
  return error => {
    console.log(error);
    res.send(error);
  };
};

exports.listUsers = (req, res) => {
  return User.findAll({
    include: [
      {
        model: Favorite,
        as: "favorites"
        // required: true
      }
    ]
  }).then(handleResponse(res), handleError(res));
};

exports.getUser = (req, res) => {
  return User.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Favorite,
        as: "favorites"
        // required: true
      }
    ]
  }).then(handleResponse(res), handleError(res));
};

// exports.addUser = (req, res) => {
// }

exports.addUser = (req, res) => {
  return User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(handleResponse(res), handleError(res));
};

// exports.addFavorite = (req, res) => {
//   console.log("Body", req.body);
//   console.log("Params", req.params);
//   let newFav = {};

//   Favorite.create({
//     name: req.body.foundTicker.name,
//     ticker: req.body.foundTicker.ticker,
//     companyId: req.body.foundTicker.id
//   })
//     .then(fav => {
//       newFav = fav;

//       return UserFavorite.create({
//         userId: req.body.userId,
//         favId: newFav.id
//       });
//     })
//     .then(() => {
//       res.json(newFav);
//     });
// };

// exports.deleteFavorite = (req, res) => {
//   return Favorite.findOne({
//     where: { id: req.params.id }
//   })
//     .then(() => {
//       Favorite.detroy();
//     })
//     .then(() => {
//       return UserFavorite.destroy();
//     })
//     .then(handleResponse(res), handleError(res));
// };

// exports.getFavorite = (req, res) => {
//   return Favorite.findOne({
//     where: { id: req.params.id },
//     include: [
//       {
//         model: User,
//         as: "users",
//         required: true
//       }
//     ]
//   }).then(handleResponse(res), handleError(res));
// };
