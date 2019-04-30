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

  //METHOD I
  const isData = await Object.values(data[1]).map(item => {
    return Object.values(item);
    // const is = Object.values(item);

    // return {
    //   YrOne: parseInt(is[0]),
    //   YrTwo: parseInt(is[1]),
    //   YrThree: parseInt(is[2]),
    //   YrFour: parseInt(is[3]),
    //   YrFive: parseInt(is[4]),
    //   TTM: parseInt(is[5])
    // };
  });
  // console.log("isData", isData);
  const combinedData = await profileData.concat(isData);
  // console.log("combinedData", typeof combinedData, combinedData);

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

  let restatedDataIS = await originalISObj.map(item => {
    const newValues = Object.values(item.value);
    return newValues;
  });
  // console.log("restatedDataIS", restatedDataIS);

  const annualISValues = await restatedDataIS[0];
  // console.log("Annual", annualISValues);
  const restatedIS = await annualISValues.map(item => {
    const is = Object.values(item);

    return {
      YrOne: parseInt(is[0]),
      YrTwo: parseInt(is[1]),
      YrThree: parseInt(is[2]),
      YrFour: parseInt(is[3]),
      YrFive: parseInt(is[4]),
      TTM: parseInt(is[5])
    };
  });
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

  let restatedDataCF = await originalCFObj.map(item => {
    const newValues = Object.values(item.value);
    return newValues;
  });
  // console.log("restatedData", restatedData);

  const annualCFValues = await restatedDataCF[0];
  // console.log("Annual", annualISValues);
  const restatedCF = await annualCFValues.map(item => {
    const is = Object.values(item);

    return {
      YrOne: parseInt(is[0]),
      YrTwo: parseInt(is[1]),
      YrThree: parseInt(is[2]),
      YrFour: parseInt(is[3]),
      YrFive: parseInt(is[4]),
      TTM: parseInt(is[5])
    };
  });

  const combinedIS = await await profileData.concat(restatedIS);
  const combinedCF = await await combinedIS.concat(restatedCF);

  // console.log("combinedCF", combinedCF);

  res.send(combinedCF);
};
