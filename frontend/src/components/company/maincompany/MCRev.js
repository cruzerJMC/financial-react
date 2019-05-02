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
export default class MCRev extends Component {
  render() {
    console.log("Rev", this.props);
    const data = [
      ["Element", "Revenue", { role: "style" }],
      ["2014", this.props.revenue.YrOne, "blue"], // RGB value
      ["2015", this.props.revenue.YrTwo, "silver"], // English color name
      ["2016", this.props.revenue.YrThree, "gold"],
      ["2018", this.props.revenue.YrFour, "color: #e5e4e2"],
      ["2019", this.props.revenue.YrFive, "color: #e5e4e2"] // CSS-style declaration
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
