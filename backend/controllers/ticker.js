const fetch = require("node-fetch");

exports.getTickers = async (req, res) => {
  // const getData = async () => {
  const col =
    "ticker,name,exchange,famaindustry,sector,industry,scalemarketcap,scalerevenue,location,secfilings,companysite,permaticker";
  const url = `https://www.quandl.com/api/v3/datatables/SHARADAR/TICKERS.json?table=SF1&qopts.columns=${col}&api_key=YvjxT6NSByrGzvHcVJyS`;
  const response = await fetch(url);
  const json = await response.json();
  // const labels = await json.datatable.columns.map(item => {
  //   return item.name;
  // });
  // const columns = await json.datatable.columns;

  // const results = await json.datatable.data.reduce((result, field, index) => {
  //   result[columns[index]] = field;
  //   return result;
  // }, {});

  // console.log("results", results);

  const dataRes = await json.datatable.data.map((item, index) => {
    return {
      id: item[11],
      ticker: item[0],
      name: item[1],
      exchange: item[2],
      famaindustry: item[3],
      sector: item[4],
      industry: item[5],
      marketcap: item[6],
      revenue: item[7],
      location: item[8],
      filings: item[9],
      website: item[10]
    };
  });
  let reformatted = await dataRes.filter(obj => {
    // return obj.marketcap === "5 - Large" || obj.marketcap === "6 - Mega";
    return (
      obj.marketcap === "6 - Mega"
      // || obj.marketcap === "5 - Large"
      // // ||
      // obj.marketcap === "4 - Mid"
    );
  });
  let newArray = await reformatted;
  // console.log?("response", newArray)
  // console.log(newArray);
  res.send(newArray);
};

// module.exports = {
//   getTickers
// };
