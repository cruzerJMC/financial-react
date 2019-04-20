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
import BsTable from "./BsTable";

class BalanceList extends Component {
  // renderDate =() => {
  //   return{this.props.balance}
  // }
  render() {
    console.log("Balance List", this.props);
    return (
      <Responsive as={Segment}>
        {/* {this.renderTable()} */}
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">
                Quaterly Balance Sheet
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Message color="blue">
              <Grid container column={2}>
                <Table.Row>
                  {this.props.labels.map(item => {
                    return (
                      <div>
                        <Message>
                          <h5>{item}</h5>
                        </Message>
                        <Divider inverted />
                        <br />
                      </div>
                    );
                  })}
                </Table.Row>
                {this.props.balance.map((item, index) => {
                  // const value = Object.values(item);
                  return <BsTable key={index} {...item} />;
                })}
              </Grid>
            </Message>
          </Table.Body>
        </Table>
      </Responsive>
    );
  }
}

export default BalanceList;
