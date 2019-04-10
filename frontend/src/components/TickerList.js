import React, { Component } from "react";

import {
  Container,
  Divider,
  Grid,
  Header,
  Segment,
  Table
} from "semantic-ui-react";
import Ticker from "./Ticker";
import TickersHeader from "./TickersHeader";

class TickerList extends Component {
  render() {
    // console.log("tickers list", this.props);

    return (
      <div>
        <Table striped color={"violet"} inverted>
          <Table.Header>
            <TickersHeader />
          </Table.Header>
          <Table.Body>
            {this.props.tickers.map((ticker, index) => {
              return (
                <Ticker
                  num={index}
                  key={ticker.id}
                  {...ticker}
                  showDetails={this.props.showDetails}
                  clickedTicker={this.props.clickedTicker}
                  handleMetricPost={this.props.handleMetricPost}
                  addToWatchList={this.props.addToWatchList}
                  handleFinPost={this.props.handleFinPost}
                />
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default TickerList;
