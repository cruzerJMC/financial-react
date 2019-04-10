import React, { Component } from "react";
import {
  Image,
  Button,
  Table,
  Container,
  Segment,
  Card,
  Icon,
  Divider,
  Header,
  List,
  Grid,
  Message
} from "semantic-ui-react";

class Summary extends Component {
  render() {
    // console.log("Summary", this.props);
    return (
      //
      <div>
        <Segment inverted attached="top">
          <Header as="h4" inverted color="blue">
            <h1 />
          </Header>
        </Segment>

        <Message
          color="blue"
          attached
          content="Message"
          icon="help circle"
          info
        >
          {this.props.description}
        </Message>

        <Table attached="bottom" definition striped>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Industry:</Table.Cell>
              <Table.Cell>{this.props.industry}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Sector:</Table.Cell>
              <Table.Cell>{this.props.sector}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Exchange</Table.Cell>
              <Table.Cell>{this.props.exchange}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>CEO:</Table.Cell>
              <Table.Cell>{this.props.CEO}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Website:</Table.Cell>
              <Table.Cell>{this.props.website}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default Summary;
