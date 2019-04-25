const fetch = require("node-fetch");

exports.getAnnualBS = async (req, res) => {
  // const getData = async () => {
  // console.log("BODY", req.body.post);
  // console.log("params", req.params);

  // const ticker = await req.body;
  // console.log("ticker", ticker);

  const url = `https://financialmodelingprep.com/api/financials/balance-sheet-statement/${
    req.body.post
  }?datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  // // // only proceed once promise is resolved
  let json = await response.json();
  // console.log("json", json);

  let data = await Object.values(json);
  // console.log("Data", data);

  let originalBSObj = await data.map(item => {
    const values = Object.values(item);
    const labels = Object.keys(item);
    // console.log(labels);

    return { label: labels, value: values };
  });
  // console.log("originalBSObj", originalBSObj);

  let restatedData = await originalBSObj.map(item => {
    // const newValues = {
    //   [Object.values(item.label)]: Object.values(item.value)
    // };
    const newValues = Object.values(item.value);
    return newValues;
  });
  // console.log("restatedData", restatedData);
  const annualBSData = await restatedData[0];
  // console.log("Annual", annualBSData);
  // // res.send(annualIncomeData);

  const restatedBS = annualBSData.map(item => {
    // const valueArray = item[0];
    const bs = Object.values(item);
    // // const cfl = Object.values(item);
    // return item;
    return {
      YrOne: parseInt(bs[0]),
      YrTwo: parseInt(bs[1]),
      YrThree: parseInt(bs[2]),
      YrFour: parseInt(bs[3]),
      YrFive: parseInt(bs[4])
    };
  });

  const labeledBS = restatedBS.map((item, index) => {
    // const valueArray = item[0];
    return Object.assign({}, [index], item);
    // return { [index]:item };
  });
  // console.log("labeledBS", labeledBS);
  res.send(labeledBS);
};
