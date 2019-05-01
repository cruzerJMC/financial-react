import React, { Component } from "react";
import { Segment, Card } from "semantic-ui-react";
import Stock from "./Stock";

export default class StockList extends Component {
  render() {
    console.log("Stock List", this.props);
    return (
      // <div>Test</div>
      <Card.Group itemsPerRow={12}>
        {this.props.stocks.map((stock, index) => {
          if (index < 500) {
            return <Stock num={index} key={stock.symbol} {...stock} />;
          }
        })}
      </Card.Group>
    );
  }
}
