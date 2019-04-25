import React, { Component } from "react";

import {
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Table,
  Container,
  List,
  Tab
} from "semantic-ui-react";
import CfTable from "./CfTable";

class CashflowList extends Component {
  // renderAggregateItems =()=>{
  //   Revenue
  //      'Revenue Growth
  //      'Cost of Revenue
  //      'Gross Profit
  //      'R&D Expenses
  //      'SG&A Expense
  //      'Operating Expenses
  //      'Operating Income
  //      'Interest Expense
  //      'Earnings before Tax
  //      'Income Tax Expense
  //      'Net Income - Non-Controlling int
  //      'Net Income - Discontinued ops
  //      'Net Income
  //      'Preferred Dividends
  //      'Net Income Com
  // }

  renderValue = () => {
    return this.props.cashflow.map(item => {
      return <Grid.Column>{item}</Grid.Column>;
    });
  };
  render() {
    // const labelArray = this.props.labels[0];

    console.log("CF list", this.props);

    return (
      <Segment compact>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">
                Quaterly Cashflow Statement
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Message>
              <Grid centered column={2}>
                <Table.Row>
                  {this.props.labels.map(item => {
                    return (
                      <div>
                        <Message color="blue" style={{ color: "black" }}>
                          <strong>{item}</strong>
                        </Message>
                        <Divider inverted />
                        <br />
                      </div>
                    );
                  })}
                </Table.Row>

                {this.props.cashflow.map((item, index) => {
                  return <CfTable key={index} {...item} />;
                })}
              </Grid>
            </Message>
          </Table.Body>
        </Table>
      </Segment>
    );
  }
}

export default CashflowList;
