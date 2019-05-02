import React, { Component } from "react";

import {
  Container,
  Divider,
  Grid,
  Header,
  Segment,
  Table
} from "semantic-ui-react";
import Company from "./Company";
import CompanyHeader from "./CompanyHeader";

class CompanyList extends Component {
  render() {
    // console.log("tickers list", this.props);

    return (
      <div>
        <Table striped inverted>
          <Table.Header>
            <CompanyHeader />
          </Table.Header>
          <Table.Body>
            {this.props.tickers.map((ticker, index) => {
              return (
                <Company
                  key={ticker.id}
                  num={index}
                  {...ticker}
                  viewCompanySummary={this.props.viewCompanySummary}
                  handleRatioPost={this.props.handleRatioPost}
                  compareDetails={this.props.compareDetails}
                  // addItemToCompare={this.props.addItemToCompare}
                  handleCompsPost={this.props.handleCompsPost}
                />
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default CompanyList;
