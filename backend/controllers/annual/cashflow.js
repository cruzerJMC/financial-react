const fetch = require("node-fetch");

exports.getAnnualCF = async (req, res) => {
  // const getData = async () => {
  // console.log("BODY", req.body.post);
  // console.log("params", req.params);

  // const ticker = await req.body;
  // console.log("ticker", ticker);

  const url = `https://financialmodelingprep.com/api/financials/cash-flow-statement/${
    req.body.post
  }?datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  // // // only proceed once promise is resolved
  let json = await response.json();
  // console.log("json", json);

  let data = await Object.values(json);
  // console.log("Data", data);

  let originalCFObj = await data.map(item => {
    const values = Object.values(item);
    const labels = Object.keys(item);
    // console.log(labels);

    return { label: labels, value: values };
  });
  // console.log("originalCFObj", originalCFObj);
  let newData = await originalCFObj.map(item => {
    const labels = Object.values(item.label);
    // console.log("new obj", newObj);
    const newValues = Object.values(item.value);
    // console.log("new values", newValues);

    const cfItems = newValues.map((item, index) => {
      const cf = Object.values(item);
      //   // // const cfl = Object.values(item);
      //   // return item;
      return {
        label: labels[index],
        YrOne: parseInt(cf[0]),
        YrTwo: parseInt(cf[1]),
        YrThree: parseInt(cf[2]),
        YrFour: parseInt(cf[3]),
        YrFive: parseInt(cf[4])
      };
    });
    // console.log("Bs items", bsItems);
    return cfItems;
  });
  // console.log("New Data", newData);

  // let restatedData = await originalCFObj.map(item => {
  //   // const newValues = {
  //   //   [Object.values(item.label)]: Object.values(item.value)
  //   // };
  //   const newValues = Object.values(item.value);
  //   return newValues;
  // });
  // // console.log("restatedData", restatedData);
  // const annualCFData = await restatedData[0];
  // // console.log("Annual", annualCFData);
  // // // res.send(annualIncomeData);

  // const restatedCF = annualCFData.map(item => {
  //   // const valueArray = item[0];
  //   const cf = Object.values(item);
  //   // // const cfl = Object.values(item);
  //   // return item;
  //   return {
  //     YrOne: parseInt(cf[0]),
  //     YrTwo: parseInt(cf[1]),
  //     YrThree: parseInt(cf[2]),
  //     YrFour: parseInt(cf[3]),
  //     YrFive: parseInt(cf[4])
  //   };
  // });

  // const labeledCF = restatedCF.map((item, index) => {
  //   // const valueArray = item[0];
  //   return Object.assign({}, [index], item);
  //   // return { [index]:item };
  // });
  // console.log("labeledCF", labeledCF);
  res.send(newData);
};
