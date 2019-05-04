import React, { Component } from "react";
import { Table, List, Grid, Message, Divider } from "semantic-ui-react";

class BSItem extends Component {
  // renderLabels = () => {
  //   if (this.props[0] === 0) {
  //     return "Cash and cash equivalents";
  //   }
  //   if (this.props[0] === 1) {
  //     return "Short-term investments";
  //   }
  //   if (this.props[0] === 2) {
  //     return "Total Cash";
  //   }
  //   if (this.props[0] === 3) {
  //     return "Receivables";
  //   }
  //   if (this.props[0] === 4) {
  //     return "Inventories";
  //   }
  //   if (this.props[0] === 5) {
  //     return "Deferred income taxes";
  //   }
  //   if (this.props[0] === 6) {
  //     return "Other current assets";
  //   }
  //   if (this.props[0] === 7) {
  //     return "'Total current assets'";
  //   }
  //   if (this.props[0] === 8) {
  //     return "Gross PP&E";
  //   }
  //   if (this.props[0] === 9) {
  //     return "Accumulated Depreciation";
  //   }
  //   if (this.props[0] === 10) {
  //     return "Net PP&E";
  //   }
  //   if (this.props[0] === 11) {
  //     return "Equity and other investments";
  //   }
  //   if (this.props[0] === 12) {
  //     return "Goodwill";
  //   }
  //   if (this.props[0] === 13) {
  //     return "Intangible assets";
  //   }
  //   if (this.props[0] === 14) {
  //     return "Other Long Term Assets";
  //   }
  //   if (this.props[0] === 15) {
  //     return "Total non-current assets";
  //   }
  //   if (this.props[0] === 16) {
  //     return "Total assets";
  //   }
  //   if (this.props[0] === 17) {
  //     return "Short-term debt";
  //   }
  //   if (this.props[0] === 18) {
  //     return "Accounts payable";
  //   }
  //   if (this.props[0] === 19) {
  //     return "Taxes payable";
  //   }
  //   if (this.props[0] === 20) {
  //     return "Accrued liabilities";
  //   }
  //   if (this.props[0] === 21) {
  //     return "Deferred revenues";
  //   }
  //   if (this.props[0] === 22) {
  //     return "Other current liabilities";
  //   }
  //   if (this.props[0] === 23) {
  //     return "Total current liabilities";
  //   }
  //   if (this.props[0] === 24) {
  //     return "Long-term debt";
  //   }
  //   if (this.props[0] === 25) {
  //     return "Deferred taxes liabilities";
  //   }
  //   if (this.props[0] === 26) {
  //     return "Other long-term liabilitie";
  //   }
  //   if (this.props[0] === 27) {
  //     return "Total non-current liabilities";
  //   }
  //   if (this.props[0] === 28) {
  //     return "Total liabilities";
  //   }
  //   if (this.props[0] === 29) {
  //     return "Common stock";
  //   }
  //   if (this.props[0] === 30) {
  //     return "Retained earnings";
  //   }
  //   if (this.props[0] === 31) {
  //     return "Accumulated other comprehensive income";
  //   }
  //   if (this.props[0] === 32) {
  //     return "Total stockholders' equity";
  //   }
  //   if (this.props[0] === 33) {
  //     return "Total liabilities and stockholders' equity";
  //   } else {
  //     return "BS Item";
  //   }
  // };

  renderLabels = () => {
    return this.props.labels.map(label => {
      return label;
    });
  };
  render() {
    console.log("BSItem", this.props);

    return (
      // <div>Test</div>
      <Table.Row>
        {/* {this.renderISLabels()} */}
        {/* <Table.Cell style={{ color: "blue" }}>
          {this.props.labels.map(label => {
            return <strong>{label}</strong>;
          })}
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
          <Table.Cell textAlign="center" style={{ color: "black" }}>
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

export default BSItem;
