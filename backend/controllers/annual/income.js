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
  // console.log("Data", Object.keys(data[0]));
  // let incomeData = await data[0];

  let incomeData = await data.map(item => {
    const value = Object.values(item);
    // console.log("value", value);
    return value;
  });

  // console.log("incomeData", incomeData);
  // prettier-ignore
  let restatedData = await incomeData.map(item => {
    const newValue = Object.values(item)
    // console.log(is);
  
    return newValue
    // return {
    //       Revenue: Object.values(item[0]),
    //       "Cost of Goods Sold": Object.values(item[1]),
    //       "Gross Profit": Object.values(item[2]),
    //       "Operating Expenses": Object.values(item[5]),
    //       "Operating Income": Object.values(item[6]),
    //       EBITDA: Object.values(item[16]),
    //       "Interest Expense": Object.values(item[7]),
    //       "Other Income": Object.values(item[8]),
    //       "Pre-Tax Income": Object.values(item[9]),
    //       "Tax Expense": Object.values(item[10]),
    //       "Continuing Net Income": Object.values(item[11]),
    //       "Net Income": Object.values(item[12]),
    //       "Common Net Income": Object.values(item[13]),
    //       "Basic EPS": Object.values(item[14]),
    //       "Diluted EPS": Object.values(item[15])
    //     };
      });
  // console.log("restatedData", restatedData);

  const annualIncomeData = await restatedData[0];
  // console.log("Annual", annualIncomeData);

  // prettier-ignore
  const restatedIncome = annualIncomeData.map(item => {
    // const incomeLabels= ['Revenue',
    // 'Cost of Revenue',
    // 'Gross Profit',
    // 'Sales, General and Administrative',
    // 'Other Expenses',
    // 'Operating Expenses',
    // 'Operating Income',
    // 'Interest Expense',
    // 'Other Income (Expense)',
    // 'Pre-Tax Income',
    // 'Tax Expense',
    // 'Other Income',
    // 'Continuing Net Income',
    // 'Net Income',
    // 'Common Equity Net Income',
    // 'Basic EPS',
    // 'Diluted EPS',
    // 'EBITDA']
    const is = Object.values(item);
    // console.log("is", is)
    // const isObj ={
    //   YrOne: parseInt(is[0]),
    //   YrTwo: parseInt(is[1]),
    //   YrThree: parseInt(is[2]),
    //   YrFour: parseInt(is[3]),
    //   YrFive: parseInt(is[4])}
     
    return {
      YrOne: parseInt(is[0]),
      YrTwo: parseInt(is[1]),
      YrThree: parseInt(is[2]),
      YrFour: parseInt(is[3]),
      YrFive: parseInt(is[4])}
  });
  // console.log("restatedIncome", restatedIncome);
  // let restatedIncome = await incomeData.map(item => {
  //   // const isItem = Object.values(item);
  //   return {
  //     Revenue: Object.values(item[0]),
  //     "Cost of Goods Sold": Object.values(item[1]),
  //     "Gross Profit": Object.values(item[2]),
  //     "Operating Expenses": Object.values(item[5]),
  //     "Operating Income": Object.values(item[6]),
  //     EBITDA: Object.values(item[16]),
  //     "Interest Expense": Object.values(item[7]),
  //     "Other Income": Object.values(item[8]),
  //     "Pre-Tax Income": Object.values(item[9]),
  //     "Tax Expense": Object.values(item[10]),
  //     "Continuing Net Income": Object.values(item[11]),
  //     "Net Income": Object.values(item[12]),
  //     "Common Net Income": Object.values(item[13]),
  //     "Basic EPS": Object.values(item[14]),
  //     "Diluted EPS": Object.values(item[15])
  //   };
  // });
  // res.send(annualIncomeData);
  res.send(restatedIncome);
};
