const tickerController = require("../controllers/ticker");
const userController = require("../controllers/user");
const metricController = require("../controllers/metric");
const financialController = require("../controllers/financial");
const favoriteController = require("../controllers/favorite");
const noteController = require("../controllers/note");

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );

  app.get("/api/tickers", tickerController.getTickers);
  app.get("/api/users", userController.listUsers);
  // app.get("/api/notes", userController.favsList);
  // app.use("/api/user_favs", userController.userFavList);
  app.post("/api/metrics", metricController.getMetrics); ///MAKE SURE POST NOT GET
  app.use("/api/financials", financialController.getFinancials);
  // app.get("/api/notes", noteController.listNotes);
  app.post("/api/user_note", noteController.addNote);
  app.post("/api/favorites", favoriteController.createFav);
  // app.use("/api/financials", financialController.getFinancials);
};
