const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          password: "password",
          createdAt: Sequelize.literal("NOW()"),
          updatedAt: Sequelize.literal("NOW()")
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Person", null, {});
  }
};
