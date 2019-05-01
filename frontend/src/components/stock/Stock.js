import React, { Component } from "react";
import {
  Segment,
  Card,
  Message,
  Statistic,
  Image,
  Icon
} from "semantic-ui-react";
// import Stock from "./Stock";

export default class Stock extends Component {
  render() {
    console.log("Stock", this.props);
    return (
      <Card>
        <Message color="blue" textAlign="center">
          <Statistic size="mini">
            <Statistic.Label textAlign="center">
              {this.props.symbol}
            </Statistic.Label>
            <Statistic.Value textAlign="center">
              <Icon name="dollar sign" />
              {/* <Image src="/images/avatar/small/joe.jpg" inline circular /> */}
              {this.props.price}
            </Statistic.Value>
          </Statistic>
        </Message>
      </Card>
    );
  }
}
