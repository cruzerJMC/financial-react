import React, { Component } from "react";
import {
  Input,
  Segment,
  Button,
  Grid,
  Image,
  List,
  Message,
  Header,
  Table,
  Item
} from "semantic-ui-react";

class MCHeader extends Component {
  render() {
    // console.log("MCHeader", this.props, typeof this.props);
    return (
      <Message color="blue" size="tiny">
        <Grid columns={2} textAlign="center">
          {/* <Message color="blue"> */}
          <Grid.Row>
            <Grid.Column width={4} floated="left">
              <Image
                src={this.props.image}
                size="small"
                boardered
                circular
                centered
              />
            </Grid.Column>
            <Grid.Column width={12}>
              <List verticalAlign="middle" divided relaxed>
                <List.Item>
                  <List.Header>
                    <h3>{this.props.companyName}</h3>
                  </List.Header>
                </List.Item>
                <List.Item>
                  <List.Icon
                    name="crosshairs"
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header as="a">
                      {(parseInt(this.props.MktCap) / 1000000).toLocaleString(
                        "us-EN",
                        {
                          style: "currency",
                          currency: "USD"
                        }
                      )}
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon
                    name="rocket"
                    size="large"
                    verticalAlign="middle"
                  />
                  <List.Content>
                    <List.Header as="a">
                      {this.props.Price.toLocaleString("us-EN", {
                        style: "currency",
                        currency: "USD"
                      })}
                    </List.Header>
                  </List.Content>
                </List.Item>
                <Button
                  size="tiny"
                  onClick={() => this.props.handleChartToggle()}
                >
                  Charts
                </Button>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Message>
    );
  }
}

export default MCHeader;

{
  /* <Table inverted striped>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell textAlign="center" colSpan="9">
      {this.props.companyName}
    </Table.HeaderCell>
  </Table.Row>

  <Table.Row>
    <Table.HeaderCell colSpan="1">Item</Table.HeaderCell>
    <Table.HeaderCell textAlign="center" colSpan="1">
      2014A
    </Table.HeaderCell>
    <Table.HeaderCell textAlign="center" colSpan="1">
      2015A
    </Table.HeaderCell>
    <Table.HeaderCell textAlign="center" colSpan="1">
      2016A
    </Table.HeaderCell>
    <Table.HeaderCell textAlign="center" colSpan="1">
      2017A
    </Table.HeaderCell>
    <Table.HeaderCell textAlign="center" colSpan="1">
      2018A
    </Table.HeaderCell>
    <Table.HeaderCell textAlign="center" colSpan="1">
      TTM
    </Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body></Table.Body>
</Table> */
}
