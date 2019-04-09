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

class Ticker extends Component {
  // state = {
  //   response: "",
  //   post: "",
  //   responseToPost: "",
  //   metrics: []
  // };

  // handleMetricPost = async () => {
  //   // e.preventDefault();
  //   const response = await fetch("http://localhost:5000/api/metrics", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ post: this.props.clickedTicker.ticker })
  //   });
  //   const body = await response.json();
  //   console.log(body);
  //   this.setState({
  //     metrics: body
  //   });
  // };

  tickerClickHandler = async () => {
    await this.props.showDetails(this.props.id);
    await this.props.handleMetricPost();
    await this.props.handleFinPost();
  };

  render() {
    // console.log("TICKER PROPS", this.props);
    return (
      <Table.Row>
        <Table.Cell
          textAlign="center"
          onClick={() => this.tickerClickHandler()}
        >
          {this.props.num + 1}
        </Table.Cell>
        <Table.Cell onClick={() => this.tickerClickHandler()}>
          <Message color="blue">
            <h3>{this.props.name}</h3>
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
        <Table.Cell>
          <Button onClick={() => this.props.addToWishlist(this.props.id)}>
            WatchList
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default Ticker;
