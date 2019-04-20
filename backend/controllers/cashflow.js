const fetch = require("node-fetch");

exports.getCashflow = async (req, res) => {
  // const getData = async () => {
  // console.log("BODY", req.body.post);
  // console.log("params", req.params);

  // const ticker = await req.body;
  // console.log("ticker", ticker);

  const url = `https://financialmodelingprep.com/api/financials/cash-flow-statement/${
    req.body.post
  }?period=quarter&datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  // // // only proceed once promise is resolved
  let json = await response.json();
  // console.log("json", json);

  let data = await json.financials;
  // console.log("Data", data);

  let useableData = await data.reverse();

  // let income = useableData.map(item => {
  //   return { [Object.keys(item)]: { ...item } };
  // });
  res.send(useableData);
};

// module.exports = {
//   getMetrics
// };ray
