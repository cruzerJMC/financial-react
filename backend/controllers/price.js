const fetch = require("node-fetch");

exports.getPrices = async (req, res) => {
  const url = `https://financialmodelingprep.com/api/stock/real-time/all?datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  // // // only proceed once promise is resolved
  let json = await response.json();
  // console.log("json", json);

  // const stocks = await json.filter((stock, index) => {
  //   return index < 25;
  // });

  const stocks = await [...json];

  // const stockData = await [json];
  // console.log("Stock", stockData);
  // const filteredStocks = await stockData.filter((stock, index) => {
  //   return index < 51;
  // });

  // console.log("filteredStocks", filteredStocks);
  res.send(stocks);
};
