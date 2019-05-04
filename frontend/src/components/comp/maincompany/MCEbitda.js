import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import Chart from "react-google-charts";

export default class MCEbitda extends Component {
  render() {
    console.log("Rev", this.props);
    const data = [
      ["Element", "EBITDA", { role: "style" }],
      ["2014", this.props.ebitda.YrOne, "color: #6666ff"], // RGB value
      ["2015", this.props.ebitda.YrTwo, "color: #6666ff"], // English color name
      ["2016", this.props.ebitda.YrThree, "color: #6666ff"],
      ["2018", this.props.ebitda.YrFour, "color: #6666ff"],
      ["2019", this.props.ebitda.YrFive, "color: #6666ff"] // CSS-style declaration
    ];
    return (
      <div>
        <Message attached="top" color="blue">
          <strong>EBITDA</strong>
        </Message>
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
