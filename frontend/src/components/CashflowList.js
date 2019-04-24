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
      // <Segment>
      <div>
        {/* {this.renderTable()} */}
        <Table striped>
          {/* <Segment> */}
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">
                Quaterly Cashflow Statement
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {/* </Segment>
          <Segment attached="bottom"> */}
          <Table.Body>
            <Message color="violet">
              <Grid column={2}>
                <Table.Row>
                  {this.props.labels.map(item => {
                    return (
                      <div>
                        <Message>{item}</Message>
                        <Divider inverted />
                        <br />
                      </div>
                    );
                  })}
                </Table.Row>

                {this.props.cashflow.map((item, index) => {
                  // const value = Object.values(item);
                  return <CfTable key={index} {...item} />;
                })}
              </Grid>
            </Message>
          </Table.Body>
          {/* </Segment> */}
        </Table>
      </div>
    );
  }
}

export default CashflowList;
