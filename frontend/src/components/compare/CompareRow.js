import React, { Component } from "react";
import { Table } from "semantic-ui-react";

export default class CompareRow extends Component {
  compareClickHandler = async () => {
    await this.props.compareDetails(this.props.id);
    await this.props.handleRatioPost();
    await this.props.handleCompsPost();
    // await this.props.addItemToCompare(this.props.);
  };

  render() {
    // console.log("Compare Row", this.props);
    return (
      <Table.Row>
        <Table.Cell
          onClick={() => this.compareClickHandler()}
          textAlign="center"
          style={{ color: "#7FFF00" }}
        >
          {this.props.num + 1}
        </Table.Cell>
        <Table.Cell
          onClick={() => this.compareClickHandler()}
          textAlign="center"
          style={{ color: "#7FFF00" }}
        >
          {this.props.name}
        </Table.Cell>
        <Table.Cell
          onClick={() => this.compareClickHandler()}
          textAlign="center"
          style={{ color: "#7FFF00" }}
        >
          {this.props.ticker}
        </Table.Cell>
      </Table.Row>
    );
  }
}
