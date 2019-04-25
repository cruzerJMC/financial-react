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
import BSItem from "./BSItem";

class BSList extends Component {
  render() {
    console.log("BSlist", this.props);

    return (
      <div>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="6">
                <Message color="violet"> Annual Balance Sheet </Message>
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
            {this.props.balance.map((bsItem, index) => {
              return <BSItem key={index} {...bsItem} />;
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default BSList;
