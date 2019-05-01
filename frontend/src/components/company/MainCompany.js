import React, { Component } from "react";
import {
  Input,
  Segment,
  Button,
  Grid,
  Image,
  List,
  Message,
  Header,
  Table,
  Item
} from "semantic-ui-react";

import MCHeader from "./maincompany/MCHeader";
import MCTable from "./maincompany/MCTable";
import CompanyRatio from "./CompanyRatio";

class MainCompany extends Component {
  render() {
    console.log("MainCompany", this.props.ratios, typeof this.props.ratios);
    return (
      <div>
        <Segment attached="top" inverted>
          {this.props.comps.map((item, index) => {
            return <MCHeader key={index} {...item.profile} />;
          })}
        </Segment>
        <Segment attached="middle" inverted>
          {this.props.comps.map((item, index) => {
            return <MCTable key={index} {...item} />;
          })}
        </Segment>
        <Segment attached="bottom" inverted>
          {this.props.ratios.map((item, index) => {
            // console.log("Ratios", item);
            return <CompanyRatio key={index} {...item} />;
          })}
        </Segment>
      </div>
    );
  }
}

export default MainCompany;
