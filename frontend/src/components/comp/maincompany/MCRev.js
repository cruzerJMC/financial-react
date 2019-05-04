import React, { Component } from "react";
import { Message } from "semantic-ui-react";
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
    console.log("Rev", Object.values(this.props.revenue[0]));
    const data = [
      ["Element", "Rev", { role: "style" }],
      ["2014", this.props.revenue[0].YrOne, "color: #6666ff"], // RGB value
      ["2015", this.props.revenue[0].YrTwo, "color: #6666ff"], // English color name
      ["2016", this.props.revenue[0].YrThree, "color: #6666ff"],
      ["2018", this.props.revenue[0].YrFour, "color: #6666ff"],
      ["2019", this.props.revenue[0].YrFive, "color: #6666ff"] // CSS-style declaration
    ];
    const options = {
      legend: { textStyle: { color: "#00FF00" }, position: "bottom" },
      backgroundColor: "black",
      hAxis: {
        textStyle: { color: "#00FF00" }
      },
      vAxis: {
        textStyle: { color: "#00FF00" }
      }
    };

    return (
      <div>
        {Object.values(this.props.revenue).length === 0 ? (
          <div> "NO CHART"</div>
        ) : (
          <div>
            <Message attached="top" color="blue">
              <strong>REVENUE</strong>
            </Message>
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              data={data}
              loader={<div>Loading Chart</div>}
              options={options}
            />
          </div>
        )}
      </div>
    );
  }
}
