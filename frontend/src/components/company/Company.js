import React, { Component } from "react";

import Linkify from "react-linkify";
import {
  Container,
  Divider,
  Grid,
  Header,
  Segment,
  Button,
  Icon,
  Message,
  Table
} from "semantic-ui-react";

class Company extends Component {
  tickerClickHandler = async () => {
    await this.props.compareDetails(this.props.id);
    await this.props.handleRatioPost();
    await this.props.handleCompsPost();
    await this.props.viewCompanySummary();
  };

  render() {
    // console.log("TICKER PROPS", this.props);
    return (
      // <Segment compact>
      <Table.Row>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.num + 1}
        </Table.Cell>
        <Table.Cell onClick={() => this.tickerClickHandler()}>
          <Message color="blue">
            <h6>{this.props.name}</h6>
          </Message>
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.ticker}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.exchange}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.sector}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.industry}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.marketcap}
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.revenue}
        </Table.Cell>
        <Table.Cell textAlign="center">
          <Linkify>
            <h5>{this.props.website}</h5>
          </Linkify>
        </Table.Cell>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.location}
        </Table.Cell>
      </Table.Row>
      // </Segment>
    );
  }
}

export default Company;
