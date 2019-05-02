import React, { Component } from "react";
import {
  Table,
  Dropdown,
  List,
  Message,
  Segment,
  Grid
} from "semantic-ui-react";
// import Company from "./Company";

export default class CompanyCompare extends Component {
  render() {
    console.log("CompanyCompare ", this.props, typeof this.props);
    // const ratios = [Object.values(this.props.yr2017)];
    // console.log("Ratio Props", typeof ratios, ratios);
    // const ratioArray = [this.props[0]];

    return (
      <Segment inverted>
        {/* <Grid color="black" columns="equal" textAlign="center" divided>
          <Grid.Row color="black"> */}
        {/* {ratios.map((ratio, index) => {
          // console.log("RATBCBDK", typeof ratio, ratio[0]);
          // const divisor = 1000000000
          // // console.log("Ratio", typeof item.cashRatio);
          // const reformat = ratio/ divisor
          // const obj = { [index]: ratio };
          return (
            <Company
              key={index}
              liquidity={[ratio[0]]}
              profitability={[ratio[1]]}
              debt={[ratio[2]]}
              cashflow={[ratio[4]]}
              valuation={[ratio[5]]}
            />
          );
        })} */}
        {/* </Grid.Row>
        </Grid> */}
      </Segment>
    );
  }
}
