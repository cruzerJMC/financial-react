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
  List
} from "semantic-ui-react";
import CFItem from "./CFItem";

class CFList extends Component {
  render() {
    console.log("CFlist", this.props);

    return (
      <div>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="6">
                <Message color="violet">Annual Cashflow Statement </Message>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell colSpan="1">Item</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">2014</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">2015</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">2016</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">2017</Table.HeaderCell>
              <Table.HeaderCell colSpan="1">2018</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.cashflow.map((cfItem, index) => {
              return <CFItem key={index} {...cfItem} />;
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default CFList;
