"use strict";
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      favId: DataTypes.INTEGER
    },
    {}
  );
  Note.associate = function(models) {
    Note.belongsTo(models.Favorite);
  };
  return Note;
};
