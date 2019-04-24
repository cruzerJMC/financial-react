import React, { Component } from "react";
import { Table, List, Grid, Message, Divider } from "semantic-ui-react";

class CFItem extends Component {
  render() {
    console.log("CFItem", this.props);

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

export default CFItem;
