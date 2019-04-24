import React, { Component } from "react";
import { Table, List, Grid, Message, Divider } from "semantic-ui-react";

class ISItem extends Component {
  renderISLabels = () => {
    const incomeLabels = [
      { label: "Revenue" },
      { label: "Cost of Revenue" },
      { label: "Gross Profit" },
      { label: "Sales, General and Administrative" },
      { label: "Other Expenses" },
      { label: "Operating Expenses" },
      { label: "Operating Income" },
      { label: "Interest Expense" },
      { label: "Other Income (Expense)" },
      { label: "Pre-Tax Income" },
      { label: "Tax Expense" },
      { label: "Other Income" },
      { label: "Continuing Net Income" },
      { label: "Net Income" },
      { label: "Common Equity Net Income" },
      { label: "Basic EPS" },
      { label: "Diluted EPS" },
      { label: "EBITDA" }
    ];
    return incomeLabels.map(item => {
      return (
        <div>
          <Table.Row>
            <Table.Cell>{item.label}</Table.Cell>
            <Table.Cell>{this.props.YrOne}</Table.Cell>
            <Table.Cell>{this.props.YrTwo}</Table.Cell>
            <Table.Cell>{this.props.YrThree}</Table.Cell>
            <Table.Cell>{this.props.YrFour}</Table.Cell>
            <Table.Cell>{this.props.YrFive}</Table.Cell>
          </Table.Row>
        </div>
      );
    });
  };
  render() {
    console.log("ISItem", this.props);
    // const incomeLabels = [
    //   { label: "Revenue" },
    //   { label: "Cost of Revenue" },
    //   { label: "Gross Profit" },
    //   { label: "Sales, General and Administrative" },
    //   { label: "Other Expenses" },
    //   { label: "Operating Expenses" },
    //   { label: "Operating Income" },
    //   { label: "Interest Expense" },
    //   { label: "Other Income (Expense)" },
    //   { label: "Pre-Tax Income" },
    //   { label: "Tax Expense" },
    //   { label: "Other Income" },
    //   { label: "Continuing Net Income" },
    //   { label: "Net Income" },
    //   { label: "Common Equity Net Income" },
    //   { label: "Basic EPS" },
    //   { label: "Diluted EPS" },
    //   { label: "EBITDA" }
    // ];
    return (
      <Table.Row>
        {/* {this.renderISLabels()} */}
        <Table.Cell>
          <strong>Income Item</strong>
        </Table.Cell>
        <Table.Cell>
          {this.props.YrOne.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell>
          {this.props.YrTwo.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell>
          {this.props.YrThree.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell>
          {this.props.YrFour.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Table.Cell>
        <Table.Cell>
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
