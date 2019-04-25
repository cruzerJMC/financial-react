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
  render() {
    console.log("ISlist", this.props);

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
