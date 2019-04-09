"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Favorites", "ownerId", {
      type: Sequelize.INTEGER,
      references: {
        model: "UserFavorites",
        key: "UserId"
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Favorites", "ownerId");
  }
};
