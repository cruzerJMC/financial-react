const fetch = require("node-fetch");
const express = require("express");
const router = express.Router();

exports.getMetrics = async (req, res) => {
  // const getData = async () => {
  // console.log("BODY", req.body.post);
  // console.log("params", req.params);

  // const ticker = await req.body;
  // console.log("ticker", ticker);

  const url = `https://www.quandl.com/api/v3/datatables/SHARADAR/DAILY.json?ticker=${
    req.body.post
  }&api_key=YvjxT6NSByrGzvHcVJyS`;

  let response = await fetch(url);
  // console.log("response", response);

  // // only proceed once promise is resolved
  let json = await response.json();
  // const labels = await json.datatable.columns.map(item => {
  //   return item.name;
  // });

  const dataRes = await json.datatable.data.map((item, index) => {
    return {
      ticker: item[0],
      date: item[1],
      lastupdated: item[2],
      ev: item[3],
      evebit: item[4],
      evebitda: item[5],
      marketcap: item[6],
      pb: item[7],
      pe: item[8],
      ps: item[9]
    };
  });

  let newArray = await dataRes[0];
  // console.log("response", newArray);
  res.send(newArray);
};

// module.exports = {
//   getMetrics
// };
