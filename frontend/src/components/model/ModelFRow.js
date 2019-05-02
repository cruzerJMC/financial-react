import React, { Component } from "react";
import {
  Divider,
  Grid,
  Header,
  Message,
  Segment,
  Table
} from "semantic-ui-react";

class ModelFRow extends Component {
  render() {
    // prettier-ignore
    console.log("Model Row", this.props);

    const pastRevenue = this.props.numRev;
    console.log("past", typeof pastRevenue, pastRevenue);

    const revenue = pastRevenue * (1 + this.props.EGrowth);
    const ebitda = revenue * (this.props.EMargin / 100);
    const ocf = ebitda * this.props.ocfConv;
    const capex = revenue * this.props.ECapex;
    const fcf = ocf - capex;

    return (
      <div>
        {/* <Table.Row textAlign="center">{props.Revenue}</Table.Row>
        <Table.Row textAlign="center">{props.EBITDA}</Table.Row>
        <Table.Row textAlign="center">{props.Margin}</Table.Row>
        <Table.Row textAlign="center">{props.OCF}</Table.Row>
        <Table.Row textAlign="center">{props.Conversion}</Table.Row>
        <Table.Row textAlign="center">{props.FCF}</Table.Row> */}

        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>
              {revenue.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>
              {ebitda.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>{this.props.EMargin.toFixed(2) + "%"}</strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>
              {ocf.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>{this.props.ocfConv.toFixed(2) + "x"}</strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>
              {fcf.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD"
              })}
            </strong>
          </Table.Row>
        </Message>
        <Message color="black" textAlign="center">
          <Table.Row style={{ color: "#6666ff" }}>
            <strong>{this.props.ECapex.toFixed(2) + "%"}</strong>
          </Table.Row>
        </Message>
      </div>
    );
  }
}

export default ModelFRow;
