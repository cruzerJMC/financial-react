const tickerController = require("../controllers/ticker");
const userController = require("../controllers/user");
const metricController = require("../controllers/metric");
const financialController = require("../controllers/financial");
const favoriteController = require("../controllers/favorite");
const noteController = require("../controllers/note");
const indexController = require("../controllers/market");
const incomeController = require("../controllers/income");
const ratioController = require("../controllers/ratio");
const cashflowController = require("../controllers/cashflow");
const balanceController = require("../controllers/balance");
const annualIncomeController = require("../controllers/annual/income");
const annualCashflowController = require("../controllers/annual/cashflow");
module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );

  app.get("/api/tickers", tickerController.getTickers);
  app.use("/api/indexes", indexController.getIndexes);
  app.use("/api/incomestatement", incomeController.getIncome);
  app.use("/api/annual-income", annualIncomeController.getAnnualIncome);
  app.use("/api/annual-cashflow", annualCashflowController.getAnnualCF);
  app.use("/api/balancesheet", balanceController.getBalance);
  app.use("/api/cashflow", cashflowController.getCashflow);
  app.use("/api/ratios", ratioController.getRatio);
  app.get("/api/users", userController.listUsers);
  app.get("/api/users/:id", userController.getUser);
  app.post("/api/signup", userController.addUser);

  app.use("/api/user_favorite", favoriteController.addFavorite);
  app.delete("/api/delete_favorite/:id", favoriteController.deleteFavorite);
  app.get("/api/user_favorite/:id", favoriteController.getFavorite);

  app.post("/api/metrics", metricController.getMetrics); ///MAKE SURE POST NOT GET
  app.use("/api/financials", financialController.getFinancials);
  // app.get("/api/notes", noteController.listNotes);

  // app.post("/api/favorites", favoriteController.createFav);
  app.use("/api/financials", financialController.getFinancials);

  app.get("/api/notes/:id", noteController.getNote);
  app.get("/api/notes", noteController.listNotes);
  app.post("/api/user_note", noteController.addNote);
  app.delete("/api/delete_note/:id", noteController.deleteNote);
};
