import React, { Component } from "react";

import { Message, Table } from "semantic-ui-react";
import CFItem from "./CFItem";

class CFList extends Component {
  render() {
    console.log("CFlist", this.props);

    return (
      <div>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="6">
                <Message color="violet">Annual Cashflow Statement</Message>
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell colSpan="1">Item</Table.HeaderCell>
              <Table.HeaderCell colSpan="1" textAlign="center">
                2014
              </Table.HeaderCell>
              <Table.HeaderCell colSpan="1" textAlign="center">
                2015
              </Table.HeaderCell>
              <Table.HeaderCell colSpan="1" textAlign="center">
                2016
              </Table.HeaderCell>
              <Table.HeaderCell colSpan="1" textAlign="center">
                2017
              </Table.HeaderCell>
              <Table.HeaderCell colSpan="1" textAlign="center">
                2018
              </Table.HeaderCell>
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
