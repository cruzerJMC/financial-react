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
import ChartCont from "./maincompany/ChartCont";
import CompanyRatio from "./maincompany/CompanyRatio";

class MainCompany extends Component {
  state = {
    chartToggle: true
  };

  handleChartToggle = () => {
    this.setState({
      chartToggle: !this.state.chartToggle
    });
  };
  render() {
    console.log("MainCompany", this.props, typeof this.props);
    return (
      <div>
        <Segment attached="top" inverted>
          {this.props.comps.map((item, index) => {
            return (
              <MCHeader
                key={index}
                {...item.profile}
                handleChartToggle={this.handleChartToggle}
              />
            );
          })}
        </Segment>
        <Segment attached="middle" inverted>
          {this.state.chartToggle ? (
            <Segment inverted>
              <ChartCont comps={this.props.comps} />
            </Segment>
          ) : null}
          <Segment inverted>
            {this.props.comps.map((item, index) => {
              return <MCTable key={index} {...item} />;
            })}
          </Segment>
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
