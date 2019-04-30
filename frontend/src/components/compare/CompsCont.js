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
    return (
      <div>
        {this.props.mainCompany.map(item => {
          return <MainCompany key={item.companyName} {...item} />;
        })}
      </div>
      // </Segment>
    );
  };
  render() {
    console.log("CompsCOnt", this.props, this.props.mainCompany[0]);
    return (
      <div>
        {this.props.mainCompany.map(item => {
          return (
            <MainCompany
              key={item.companyName}
              name={item.companyName}
              image={item.image}
              revenue={item[0]}
              ebit={[item[6]]}
            />
          );
        })}
        {/* {!this.props.mainCompany[0] ? null : (
          <Segment inverted>{this.renderMainCompany()}</Segment>
        )} */}
        <Segment inverted>Test</Segment>
      </div>
    );
  }
}

export default CompsCont;
