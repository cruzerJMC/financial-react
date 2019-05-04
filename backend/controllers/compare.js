const fetch = require("node-fetch");

exports.getComps = async (req, res) => {
  const data = await Promise.all([
    fetch(
      `https://financialmodelingprep.com/api/company/profile/${
        req.body.post
      }?datatype=json`
    ).then(response => response.json()), // parse each response as json
    fetch(
      `https://financialmodelingprep.com/api/financials/income-statement/${
        req.body.post
      }?datatype=json`
    ).then(response => response.json()),
    fetch(
      `https://financialmodelingprep.com/api/financials/cash-flow-statement/${
        req.body.post
      }?datatype=json`
    ).then(response => response.json())
  ]);
  // console.log("data", data);

  const profileData = await Object.values(data[0]);

  //METHOD II
  const annualDataIS = await Object.values(data[1]);
  // console.log("annualDataIS", annualDataIS);

  let originalISObj = await annualDataIS.map(item => {
    const values = Object.values(item);
    const labels = Object.keys(item);
    // console.log("Labels", labels);
    return { label: labels, value: values };
  });
  // console.log("originalISObj", originalISObj);
  let newISData = await originalISObj.map(item => {
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
        YrFive: parseInt(is[4]),
        TTM: parseInt(is[5])
      };
    });
    // console.log("Bs items", bsItems);
    return isItems;
  });
  // console.log("New Data", newISData);
  // let restatedDataIS = await originalISObj.map(item => {
  //   const newValues = Object.values(item.value);
  //   return newValues;
  // });
  // console.log("restatedDataIS", restatedDataIS);

  // const annualISValues = await restatedDataIS[0];
  // // console.log("Annual", annualISValues);
  // const restatedIS = await annualISValues.map(item => {
  //   const is = Object.values(item);

  //   return {
  //     YrOne: parseInt(is[0]),
  //     YrTwo: parseInt(is[1]),
  //     YrThree: parseInt(is[2]),
  //     YrFour: parseInt(is[3]),
  //     YrFive: parseInt(is[4]),
  //     TTM: parseInt(is[5])
  //   };
  // });
  // console.log("restated", restatedIS);
  const annualDataCF = await Object.values(data[2]);
  // console.log("annualData", annualData);

  let originalCFObj = await annualDataCF.map(item => {
    const values = Object.values(item);
    const labels = Object.keys(item);
    // console.log("Labels", labels);
    return { label: labels, value: values };
  });
  // console.log("originalISObj", originalISObj);

  let newCFData = await originalCFObj.map(item => {
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
        YrFive: parseInt(is[4]),
        TTM: parseInt(is[5])
      };
    });
    // console.log("Bs items", bsItems);
    return isItems;
  });
  // console.log("New Data", newISData);

  // let restatedDataCF = await originalCFObj.map(item => {
  //   const newValues = Object.values(item.value);
  //   return newValues;
  // });
  // // console.log("restatedData", restatedData);

  // const annualCFValues = await restatedDataCF[0];
  // // console.log("Annual", annualISValues);
  // const restatedCF = await annualCFValues.map(item => {
  //   const is = Object.values(item);

  //   return {
  //     YrOne: parseInt(is[0]),
  //     YrTwo: parseInt(is[1]),
  //     YrThree: parseInt(is[2]),
  //     YrFour: parseInt(is[3]),
  //     YrFive: parseInt(is[4]),
  //     TTM: parseInt(is[5])
  //   };
  // });

  const combinedIS = await await profileData.concat(newISData);
  const combinedData = await await combinedIS.concat(newCFData);

  console.log("combinedData", combinedData);

  res.send(combinedData);
};
