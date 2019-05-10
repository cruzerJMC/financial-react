import React, { Component } from "react";
import { Table } from "semantic-ui-react";

class ISItem extends Component {
  render() {
    // console.log("ISItem", this.props);

    return (
      <Table.Row>
        <Table.Cell style={{ color: "blue" }}>
          <strong>{this.props.label}</strong>
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
