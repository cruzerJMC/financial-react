const fetch = require("node-fetch");

exports.getIndexes = async (req, res) => {
  // const getData = async () => {
  // console.log("BODY", req.body.post);
  // console.log("params", req.params);

  // const ticker = await req.body;
  // console.log("ticker", ticker);

  const url = `https://financialmodelingprep.com/api/majors-indexes?datatype=json`;

  let response = await fetch(url);
  console.log("response", response);

  // // only proceed once promise is resolved
  let json = await response.json();
  console.log("json", json);

  // const labels = await json.datatable.columns.map(item => {
  //   return item.name;
  // });

  // const dataRes = await new Array(json).map((item, index) => {
  //   console.log("idex", item);
  //   return item;
  // });

  let newArray = await [json];
  // console.log("response", newArray);
  let data = await newArray[0];
  res.send(data);
};

// module.exports = {
//   getMetrics
// };ray
