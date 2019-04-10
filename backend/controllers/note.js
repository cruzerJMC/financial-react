"use strict";
// const User = require("../models").User;
const Favorite = require("../models").Favorite;
// const UserFavorite = require("../models").UserFavorite;
const Note = require("../models").Note;

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
exports.listNotes = (req, res) => {
  return Note.findAll()
    .then(notes => {
      res.send(notes);
    })
    .then(handleError(res));
};

exports.addNote = (req, res) => {
  console.log("Note Body", req.body);
  const title = req.body.title;
  const favId = req.body.favId;
  const content = req.body.content;
  const favTicker = req.body.favTicker;
  const favName = req.body.favName;
  const userId = req.body.userId;
  return Note.create({
    title: title,
    favId: favId,
    content: content,
    favTicker: favTicker,
    favName: favName,
    userId: userId
  }).then(newNote => {
    res.json(newNote);
  });
};

exports.getNote = (req, res) => {
  Note.findOne({
    where: {
      id: req.params.id
    }
  }).then(post => {
    res.json(post);
  });
};

exports.deleteNote = (req, res) => {
  return Note.destroy({
    where: { id: req.params.id }
  }).then(handleResponse(res), handleError(res));
};
// exports.updateNote=(req, res)=> {
//   return Note.findById(req.params.id, {
//       include: [{
//         model: Favorite,
//         as: 'favorites'
//       }],
//     })
//     .then(note => {
//       if (!note) {
//         return res.status(404).send({
//           message: 'Note Not Found',
//         });
//       }
//       return Note
//         .update({
//           title: req.body.name
//         })
//         .then(() => res.status(200).send(lecturer))
//         .catch((error) => res.status(400).send(error));
//     })
//     .catch((error) => res.status(400).send(error));
// },
