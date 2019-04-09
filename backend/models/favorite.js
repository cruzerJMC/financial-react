"use strict";
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define(
    "Favorite",
    {
      name: DataTypes.STRING,
      ticker: DataTypes.STRING
    },
    {}
  );
  Favorite.associate = function(models) {
    Favorite.belongsToMany(models.User, {
      through: "UserFavorite",
      as: "users",
      foreignKey: "favId"
    });
    Favorite.hasMany(models.Note);
  };
  return Favorite;
};
