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
      <Segment>
        {/* {this.renderTable()} */}
        <Table striped>
          {/* <Segment> */}
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="21">
                Quaterly Cashflow Statement
              </Table.HeaderCell>
            </Table.Row>
            {/* <Table.Row>
                <Table.HeaderCell>Date:</Table.HeaderCell>
                {this.props.cashflow.map(item => {
                  return (
                    <Table.HeaderCell>
                      <h5>{item.date}</h5>
                    </Table.HeaderCell>
                  );
                })}
              </Table.Row> */}
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
                        <h5>{item}</h5>
                        <Divider inverted />
                        <br />
                      </div>
                    );
                  })}
                </Table.Row>

                {this.props.cashflow.map(item => {
                  const value = Object.values(item);
                  return <CfTable key={item.date} {...value} />;
                })}
              </Grid>
            </Message>
          </Table.Body>
          {/* </Segment> */}
        </Table>
      </Segment>
    );
  }
}

export default CashflowList;
