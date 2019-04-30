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
              revenue: obj[1],
              ebit: obj[7],
              ebitda: obj[17],
              ni: obj[12],
              ocf: obj[46],
              capex: obj[47],
              fcf: obj[48]
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
