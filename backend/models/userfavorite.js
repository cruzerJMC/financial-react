"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserFavorite = sequelize.define(
    "UserFavorite",
    {
      userId: DataTypes.INTEGER,
      favId: DataTypes.INTEGER
    },
    {}
  );
  UserFavorite.associate = function(models) {
    // UserFavorite.belongsTo(models.Favorite);
    // UserFavorite.belongsTo(models.User);
  };
  return UserFavorite;
};
