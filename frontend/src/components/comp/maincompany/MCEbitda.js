import React, { Component } from "react";

import Chart from "react-google-charts";

// const data = [
//   ["Element", "Revenue", { role: "style" }],
//   ["2014", 8.94, "#b87333"], // RGB value
//   ["2015", 10.49, "silver"], // English color name
//   ["2016", 19.3, "gold"],
//   ["2018", 21.45, "color: #e5e4e2"],
//   ["2019", 27.45, "color: #e5e4e2"] // CSS-style declaration
// ];
export default class MCEbitda extends Component {
  render() {
    console.log("Rev", this.props);
    const data = [
      ["Element", "EBITDA", { role: "style" }],
      ["2014", this.props.ebitda.YrOne, "blue"], // RGB value
      ["2015", this.props.ebitda.YrTwo, "silver"], // English color name
      ["2016", this.props.ebitda.YrThree, "gold"],
      ["2018", this.props.ebitda.YrFour, "color: #e5e4e2"],
      ["2019", this.props.ebitda.YrFive, "color: #e5e4e2"] // CSS-style declaration
    ];
    return (
      <div>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
        />
      </div>
    );
  }
}
