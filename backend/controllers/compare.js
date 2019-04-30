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
    ).then(response => response.json())
    // fetch(
    //   `https://financialmodelingprep.com/api/financials/income-statement/${
    //     req.body.post
    //   }?period=quarter&datatype=json`
    // ).then(response => response.json())
  ]);
  // console.log("data", data);

  const profileData = await Object.values(data[0]);

  const isData = await Object.values(data[1]).map(item => {
    return Object.values(item);
  });
  console.log("isData", isData);
  const combinedData = await profileData.concat(isData);
  console.log("combinedData", typeof combinedData, combinedData);
  // const reformat = await [
  //   ...combinedData[0],
  //   ...Object.values(combinedData[1])
  // ];
  // .map(item => {
  //   return item.Price;
  // });

  // console.log("reformat", typeof reformat);

  // const dataH = await reformat.map(item => {
  //   return { price: item.Price };
  // });

  // console.log("dataH", typeof dataH, dataH);

  res.send(combinedData);
};
