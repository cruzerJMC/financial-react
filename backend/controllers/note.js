"use strict";
// const User = require("../models").User;
// const Favorite = require("../models").Favorite;
// const UserFavorite = require("../models").UserFavorite;
const Note = require("../models").Note;

exports.listNotes = (req, res) => {
  return Note.findAll()
    .then(notes => res.status(200).send(notes))
    .catch(error => res.status(400).send(error));
};

exports.addNote = (req, res) => {
  console.log("Note Body", req.body);
  const title = req.body.title;
  const favId = req.body.favId;
  const content = req.body.content;
  return Note.create({
    title: title,
    favId: favId,
    content: content
  }).then(newNote => {
    res.json(newNote);
  });
};
