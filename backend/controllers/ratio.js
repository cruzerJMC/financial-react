const fetch = require("node-fetch");

exports.getRatio = async (req, res) => {
  // const getData = async () => {
  // console.log("BODY", req.body.post);
  // console.log("params", req.params);

  // const ticker = await req.body;
  // console.log("ticker", ticker);

  const url = `https://financialmodelingprep.com/api/financial-ratios/${
    req.body.post
  }?&datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  // // // only proceed once promise is resolved
  let json = await response.json();
  // console.log("json", json);
  let ticker = await json.symbol;
  // console.log("ticker", ticker);
  let data = await [json.financialRatios];
  // console.log("data", typeof data, data);
  // // const labels = await json.datatable.columns.map(item => {
  // //   return item.name;
  // // });
  let ratioData = await data.map(ratio => {
    return Object.values(ratio);
  });
  // console.log("ratioData", ratioData);

  let reformatedData = await ratioData.map(item => {
    // console.log(item);
    return Object.values(item[4]);
    // return {
    //   ticker: ticker,
    //   one: Object.values(item[0]),
    //   two: Object.values(item[1]),
    //   three: Object.values(item[2]),
    //   four: Object.values(item[3]),
    //   five: Object.values(item[4])
    // };
  });

  // console.log("refromated", reformatedData);

  const combinedRatio = await reformatedData.map(item => {
    return {
      ...item[0],
      ...item[1],
      ...item[2],
      ...item[3],
      ...item[4],
      ...item[5]
    };
  });
  // console.log("combinedRatio", combinedRatio);

  res.send(combinedRatio);
};
