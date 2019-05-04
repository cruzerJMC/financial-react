import React, { Component } from "react";
import { Table, List, Grid, Message, Divider } from "semantic-ui-react";

class CFItem extends Component {
  // renderLabels = () => {
  //   if (this.props[0] === 0) {
  //     return "Net Income";
  //   }
  //   if (this.props[0] === 1) {
  //     return "Depreciation & amortization";
  //   }
  //   if (this.props[0] === 2) {
  //     return "Deferred income taxes";
  //   }
  //   if (this.props[0] === 3) {
  //     return "Stock based compensation";
  //   }
  //   if (this.props[0] === 4) {
  //     return "Change in working capital";
  //   }
  //   if (this.props[0] === 5) {
  //     return "Accounts receivable";
  //   }
  //   if (this.props[0] === 6) {
  //     return "Inventory";
  //   }
  //   if (this.props[0] === 7) {
  //     return "Accounts payable";
  //   }
  //   if (this.props[0] === 8) {
  //     return "Other working capital";
  //   }
  //   if (this.props[0] === 9) {
  //     return "Other non-cash items";
  //   }
  //   if (this.props[0] === 10) {
  //     return "Net Operating Cashflow";
  //   }
  //   if (this.props[0] === 11) {
  //     return "Investments in property} plant} and equipment";
  //   }
  //   if (this.props[0] === 12) {
  //     return "Acquisitions} net";
  //   }
  //   if (this.props[0] === 13) {
  //     return "Purchases of investments";
  //   }
  //   if (this.props[0] === 14) {
  //     return "Sales/Maturities of investments";
  //   }
  //   if (this.props[0] === 15) {
  //     return "Purchases of intangibles";
  //   }
  //   if (this.props[0] === 16) {
  //     return "Other investing activities";
  //   }
  //   if (this.props[0] === 17) {
  //     return "Net Investing Cashflow";
  //   }
  //   if (this.props[0] === 18) {
  //     return "Debt issued";
  //   }
  //   if (this.props[0] === 19) {
  //     return "Debt repayment";
  //   }
  //   if (this.props[0] === 20) {
  //     return "Common stock issued";
  //   }
  //   if (this.props[0] === 21) {
  //     return "Common stock repurchased";
  //   }
  //   if (this.props[0] === 22) {
  //     return "Dividend paid";
  //   }
  //   if (this.props[0] === 23) {
  //     return "Other financing activities";
  //   }
  //   if (this.props[0] === 24) {
  //     return "Net Financing Cashflow";
  //   }
  //   if (this.props[0] === 25) {
  //     return "Net change in cash";
  //   }
  //   if (this.props[0] === 26) {
  //     return "Cash at beginning of period";
  //   }
  //   if (this.props[0] === 27) {
  //     return "Cash at end of period";
  //   }
  //   if (this.props[0] === 28) {
  //     return "Operating cash flow";
  //   }
  //   if (this.props[0] === 29) {
  //     return "Capital expenditure";
  //   }
  //   if (this.props[0] === 30) {
  //     return "Free cash flow";
  //   } else {
  //     return "CF Item";
  //   }
  // };
  render() {
    console.log("CFItem", this.props);

    return (
      // <div>Test</div>
      <Table.Row>
        {/* {this.renderISLabels()}
        <Table.Cell style={{ color: "blue" }}>
          <strong>{this.renderLabels()}</strong>
        </Table.Cell> */}
        <Table.Cell style={{ color: "blue" }}>
          <strong>{this.props.label}</strong>
        </Table.Cell>
        {this.props.YrOne ? (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            {this.props.YrOne.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            N/A
          </Table.Cell>
        )}
        {this.props.YrTwo ? (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            {this.props.YrTwo.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            N/A
          </Table.Cell>
        )}
        {this.props.YrThree ? (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            {this.props.YrThree.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            N/A
          </Table.Cell>
        )}
        {this.props.YrFour ? (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            {this.props.YrFour.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            N/A
          </Table.Cell>
        )}
        {this.props.YrFive ? (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            {this.props.YrFive.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell textAlign="center" style={{ color: "blue" }}>
            N/A
          </Table.Cell>
        )}
      </Table.Row>
    );
  }
}

export default CFItem;
