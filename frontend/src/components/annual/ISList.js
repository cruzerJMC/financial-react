import React, { Component } from "react";

import {
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Responsive,
  Table,
  Container,
  List,
  Tab
} from "semantic-ui-react";
import ISItem from "./ISItem";

class ISList extends Component {
  // renderISLabels = () => {
  //   const incomeLabels = [
  //     "Revenue",
  //     "Cost of Revenue",
  //     "Gross Profit",
  //     "Sales, General and Administrative",
  //     "Other Expenses",
  //     "Operating Expenses",
  //     "Operating Income",
  //     "Interest Expense",
  //     "Other Income (Expense)",
  //     "Pre-Tax Income",
  //     "Tax Expense",
  //     "Other Income",
  //     "Continuing Net Income",
  //     "Net Income",
  //     "Common Equity Net Income",
  //     "Basic EPS",
  //     "Diluted EPS",
  //     "EBITDA"
  //   ];
  //   return <div>{incomeLabels}</div>;
  //   // return incomeLabels.map(item => {
  //   //   return <div>{item}</div>;
  //   // });
  // };
  renderISTable = () => {
    return this.props.income.map((item, index) => {
      return (
        <div>
          {/* <Table.Row> */}
          <Table.Cell>{item.YrOne}</Table.Cell>
          <Table.Cell>{item.YrTwo}</Table.Cell>
          <Table.Cell>{item.YrThree}</Table.Cell>
          <Table.Cell>{item.YrFour}</Table.Cell>
          <Table.Cell>{item.YrFive}</Table.Cell>
          {/* </Table.Row> */}
        </div>
      );
    });
  };

  render() {
    console.log("ISlist", this.props);
    const incomeLabels = [
      "Revenue",
      "Cost of Revenue",
      "Gross Profit",
      "Sales, General and Administrative",
      "Other Expenses",
      "Operating Expenses",
      "Operating Income",
      "Interest Expense",
      "Other Income (Expense)",
      "Pre-Tax Income",
      "Tax Expense",
      "Other Income",
      "Continuing Net Income",
      "Net Income",
      "Common Equity Net Income",
      "Basic EPS",
      "Diluted EPS",
      "EBITDA"
    ];
    return (
      // prettier-ignore
      <div>
        <Table striped>
        <Table.Header>
        <Table.Row>
        <Table.HeaderCell colSpan='6'>Annual Income Statement</Table.HeaderCell>
      </Table.Row>
          <Table.Row>
            <Table.HeaderCell colSpan='1'>Item</Table.HeaderCell>
            <Table.HeaderCell colSpan='1'>2014</Table.HeaderCell>
            <Table.HeaderCell colSpan='1'>2015</Table.HeaderCell>
            <Table.HeaderCell colSpan='1'>2016</Table.HeaderCell>
            <Table.HeaderCell colSpan='1'>2017</Table.HeaderCell>
            <Table.HeaderCell colSpan='1'>2018</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body> 
      

        {this.props.income.map((isItem, index) => {
          //  const incomeLabels = [
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
          // labels={incomeLabels.map(item => {
          //   return item.label})}
        return <ISItem key={index} {...isItem}  />;
        })}
       {/* </Grid> */}
         </Table.Body>
         </Table>
      </div>
    );
  }
}

export default ISList;
