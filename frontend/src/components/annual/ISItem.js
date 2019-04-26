import React, { Component } from "react";
import { Table, List, Grid, Message, Divider } from "semantic-ui-react";

class ISItem extends Component {
  renderLabels = () => {
    if (this.props[0] === 0) {
      return "Revenue";
    }
    if (this.props[0] === 1) {
      return "Cost of Revenue";
    }
    if (this.props[0] === 2) {
      return "Gross Profit";
    }
    if (this.props[0] === 3) {
      return "R&D Expense";
    }
    if (this.props[0] === 4) {
      return "SG&A Expense";
    }
    if (this.props[0] === 5) {
      return "Operating Expenses";
    }
    if (this.props[0] === 6) {
      return "Operating Income";
    }
    if (this.props[0] === 7) {
      return "Interest Expense";
    }
    if (this.props[0] === 8) {
      return "Other income (expense)";
    }
    if (this.props[0] === 9) {
      return "Pre-Tax Income";
    }
    if (this.props[0] === 10) {
      return "Provision for income taxes";
    }
    if (this.props[0] === 11) {
      return "Continuing Net Income";
    }
    if (this.props[0] === 12) {
      return "Net Income";
    }
    if (this.props[0] === 13) {
      return "Net income available to common shareholders";
    }
    if (this.props[0] === 14) {
      return "Basic";
    }
    if (this.props[0] === 15) {
      return "Diluted";
    }
    if (this.props[0] === 16) {
      return "EBITDA";
    } else {
      return "IS Item";
    }
  };
  render() {
    console.log("ISItem", this.props);

    return (
      <Table.Row>
        <Table.Cell style={{ color: "blue" }}>
          <strong>{this.renderLabels()}</strong>
        </Table.Cell>
        <Table.Cell style={{ color: "blue" }} textAlign="center">
          {this.props.YrOne.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "blue" }} textAlign="center">
          {this.props.YrTwo.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "blue" }} textAlign="center">
          {this.props.YrThree.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "blue" }} textAlign="center">
          {this.props.YrFour.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell style={{ color: "blue" }} textAlign="center">
          {this.props.YrFive.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default ISItem;

// {incomeLabels.map((label, index) => {
//   return <Table.Row>{label[index]}</Table.Row>;
// })}
// {/* <Table.Row>{incomeLabels}</Table.Row> */}
// {/* {this.renderISLabels()} */}
