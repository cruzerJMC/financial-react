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
import IsTable from "./IsTable";

class IncomeList extends Component {
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

  render() {
    console.log("income list", this.props);

    const reformattedIS = this.props.income.map((item, index) => {
      return {
        Date: item[0],
        Revenue: item[1],
        COGS: item[3],
        GrossProfit: item[4],
        RD: item[5],
        SGA: item[6],
        OPEX: item[7],
        EBIT: item[8],
        EBITDA: item[27],
        Interest: item[9],
        EBT: item[10],
        Tax: item[11],
        NI: item[14],
        NIC: item[16],
        EPS: item[17],
        EPSD: item[18],
        WA: item[19],
        WAD: item[20],
        DVPS: item[21]
      };
    });

    return (
      <Segment>
        <Table compact striped>
          {/* <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">
                Quaterly Income Statement
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header> */}

          {/* <Header as="h2" attached="top">
              Quaterly Income Statement
            </Header> */}
          {/* <Table.Body> */}
          <Grid columns="equal" centered>
            <Message color="blue">
              <Grid.Row>
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

                {this.props.income.map((item, index) => {
                  // const value = Object.values(item);
                  return <IsTable key={index} {...item} />;
                })}
              </Grid.Row>
            </Message>
          </Grid>
          {/* </Table.Body> */}
        </Table>
      </Segment>
    );
  }
}

export default IncomeList;
