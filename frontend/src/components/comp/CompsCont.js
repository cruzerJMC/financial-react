import React, { Component } from "react";
// import { connect } from "react-redux";
import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Card,
  Button
} from "semantic-ui-react";

import MainCompany from "./MainCompany";

class CompsCont extends Component {
  renderMainCompany = () => {
    if (Object.values(this.props.comps[0]).length === 0) {
      return <Message color="blue">Select Company</Message>;
    } else {
      return (
        <MainCompany
          comps={this.props.comps.map(obj => {
            return {
              profile: obj[0],
              revenue: obj[1].filter(item => {
                return item.label === "Revenue";
              }),
              ebit: obj[1].filter(item => {
                return item.label === "Operating income";
              }),
              ebitda: obj[1].filter(item => {
                return item.label === "EBITDA";
              }),
              ni: obj[1].filter(item => {
                return item.label === "Net income";
              }),
              ocf: obj[2].filter(item => {
                return item.label === "Operating cash flow";
              }),
              capex: obj[2].filter(item => {
                return item.label === "Capital expenditure";
              }),
              fcf: obj[2].filter(item => {
                return item.label === "Free cash flow";
              })
            };
          })}
          ratios={this.props.ratios}
        />
      );
    }
  };
  render() {
    console.log(
      "CompsCOnt",
      this.props
      // Object.values(this.props.ratios[0])
    );

    // const object = this.props.comps.map(obj => {
    //   return {
    //     profile: obj[0],
    //     revenue: obj[1].filter(item => {
    //       return item.label === "Revenue";
    //     }),
    //     ebit: obj[1].filter(item => {
    //       return item.label === "Operating income";
    //     }),
    //     ebitda: obj[1].filter(item => {
    //       return item.label === "EBITDA";
    //     }),
    //     ni: obj[1].filter(item => {
    //       return item.label === "Net income";
    //     }),
    //     ocf: obj[2].filter(item => {
    //       return item.label === "Operating cash flow";
    //     }),
    //     capex: obj[2].filter(item => {
    //       return item.label === "Capital expenditure";
    //     }),
    //     fcf: obj[2].filter(item => {
    //       return item.label === "Free cash flow";
    //     })
    //   };
    // });

    // console.log("COmps", object);
    return (
      <div>
        {/* {this.props.mainCompany.map(item => {
          return (
            <MainCompany
              key={item.companyName}
              name={item.companyName}
              image={item.image}
              revenue={item[0]}
              ebit={[item[6]]}
            />
          );
        })} */}

        <Segment inverted>{this.renderMainCompany()}</Segment>

        {/* <Segment inverted>Test</Segment> */}
      </div>
    );
  }
}

export default CompsCont;
