const fetch = require("node-fetch");

exports.getAnnualIncome = async (req, res) => {
  // const getData = async () => {
  // console.log("BODY", req.body.post);
  // console.log("params", req.params);

  // const ticker = await req.body;
  // console.log("ticker", ticker);

  const url = `https://financialmodelingprep.com/api/financials/income-statement/${
    req.body.post
  }?datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  // // // only proceed once promise is resolved
  let json = await response.json();
  // console.log("json", json);

  let data = await Object.values(json);

  let originalISObj = await data.map(item => {
    const values = Object.values(item);
    const labels = Object.keys(item);
    // console.log("Labels", labels);
    return { label: labels, value: values };
  });
  // console.log("originalISObj", originalISObj);

  let newData = await originalISObj.map(item => {
    const labels = Object.values(item.label);
    // console.log("new obj", newObj);
    const newValues = Object.values(item.value);
    // console.log("new values", newValues);

    const isItems = newValues.map((item, index) => {
      const is = Object.values(item);
      //   // // const cfl = Object.values(item);
      //   // return item;
      return {
        label: labels[index],
        YrOne: parseInt(is[0]),
        YrTwo: parseInt(is[1]),
        YrThree: parseInt(is[2]),
        YrFour: parseInt(is[3]),
        YrFive: parseInt(is[4])
      };
    });
    // console.log("Bs items", bsItems);
    return isItems;
  });
  // let restatedData = await originalISObj.map(item => {
  //   const newValues = Object.values(item.value);
  //   return newValues;
  // });
  // // console.log("restatedData", restatedData);
  // const annualISData = await restatedData[0];
  // // console.log("Annual", annualISData);
  // // // res.send(annualIncomeData);

  // const restatedIS = annualISData.map(item => {
  //   const is = Object.values(item);

  //   return {
  //     YrOne: parseInt(is[0]),
  //     YrTwo: parseInt(is[1]),
  //     YrThree: parseInt(is[2]),
  //     YrFour: parseInt(is[3]),
  //     YrFive: parseInt(is[4])
  //   };
  // });

  // const labeledIS = restatedIS.map((item, index) => {
  //   return Object.assign({}, [index], item);
  // });
  // console.log("labeledIS", labeledIS);
  res.send(newData);
};
