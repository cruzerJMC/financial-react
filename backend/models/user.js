"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.belongsToMany(models.Favorite, {
      through: "UserFavorite",
      as: "favorites",
      foreignKey: "userId"
    });
  };
  return User;
};
