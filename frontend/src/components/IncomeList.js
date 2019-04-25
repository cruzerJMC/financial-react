import React, { Component } from "react";

import {
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Table,
  Label,
  Statistic,
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
      <Segment compact>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">
                Quaterly Income Statement
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {/* <Segment tertiary> */}
          <Table.Body tertiary>
            <Message>
              <Grid centered column={2}>
                <Table.Row>
                  {this.props.labels.map(item => {
                    return (
                      <div>
                        <Message style={{ color: "navy" }}>
                          {/* <Message.Header as="a"> */}
                          <strong>{item}</strong>
                          {/* </Message.Header> */}

                          {/* <strong>{item}</strong> */}
                          {/* </Label> */}
                        </Message>

                        <Divider inverted />
                        <br />
                      </div>
                    );
                  })}
                </Table.Row>

                {this.props.income.map((item, index) => {
                  return <IsTable key={index} {...item} />;
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

export default IncomeList;
