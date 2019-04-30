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
        <Table striped inverted>
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
                  handleIncomePost={this.props.handleIncomePost}
                  handleRatioPost={this.props.handleRatioPost}
                  handleBalancePost={this.props.handleBalancePost}
                  handleCashflowPost={this.props.handleCashflowPost}
                  handleAnnualIncome={this.props.handleAnnualIncome}
                  handleAnnualCF={this.props.handleAnnualCF}
                  handleAnnualBS={this.props.handleAnnualBS}
                  handleHistoricals={this.props.handleHistoricals}
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
