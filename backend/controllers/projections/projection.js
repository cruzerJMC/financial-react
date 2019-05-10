const fetch = require("node-fetch");

exports.getProjections = async (req, res) => {
  const url = `https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?ticker=${
    req.body.post
  }&dimension=MRY&calendardate.gte=2013-12-31&qopts.columns=datekey,revenue,ebitda,ebitdamargin,ncfo,capex,fcf,netinc&api_key=YvjxT6NSByrGzvHcVJyS`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("json", json);

  let datatable = await json.datatable.data;
  // console.log("datatable", datatable);

  // let historicals = await Object.assign(
  //   {},
  //   {
  //     one: datatable[0],
  //     two: datatable[1],
  //     three: datatable[2],
  //     four: datatable[3],
  //     five: datatable[4]
  //   }
  // );

  // console.log("updatedData", updatedData);

  let reorganizedData = await datatable.map((item, index) => {
    const divisor = 1000000000;
    const capex = item[6] * 1;
    return {
      Revenue: (item[1] / divisor).toLocaleString("us-EN", {
        style: "currency",
        currency: "USD"
      }),
      EBITDA: (item[2] / divisor).toLocaleString("us-EN", {
        style: "currency",
        currency: "USD"
      }),
      Margin: (item[3] * 100).toFixed(2) + "%",
      OCF: (item[4] / divisor).toLocaleString("us-EN", {
        style: "currency",
        currency: "USD"
      }),
      Conversion: (item[4] / item[7]).toFixed(2) + "x",
      FCF: (item[6] / divisor).toLocaleString("us-EN", {
        style: "currency",
        currency: "USD"
      }),
      capex: ((capex / item[1]) * 100).toFixed(2) + "%",
      numRev: item[1] / divisor,
      numEBITDA: item[2] / divisor,
      numOCF: item[4] / divisor,
      numFCF: item[6] / divisor
    };
    // const fullDate = item[1];
    // const date = fullDate.slice(0, 4);
    // return { one: item[0] };
    // return { [item[1]]: Object.assign({}, item) };
    // return Object.assign(
    //   { [index]: item[0] },
    //   { [index]: item[1] },
    //   { [index]: item[2] },
    //   { [index]: item[3] },
    //   { [index]: item[4] },
    //   { [index]: item[5] },
    //   { [index]: item[6] }
    // );
  });
  // console.log("reorganizedData", reorganizedData);

  // let reorganizedData = await historicals.map(item => {
  //   return item;
  // });
  // console.log("reorganizedData", reorganizedData);

  res.send(reorganizedData);
};
