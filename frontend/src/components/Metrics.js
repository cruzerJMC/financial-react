import React from "react";

import {
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Table
} from "semantic-ui-react";

const Metrics = props => {
  // const company = props.ticker.name.toUpperCase();
  // console.log("Metrics", props);
  return (
    <div>
      <Segment attached>
        <Message color="blue">
          {props.clickedTicker.name}-{props.clickedTicker.ticker}
        </Message>
      </Segment>
      <Segment attached="bottom">
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="3">
                Enterprise Valuation
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell textAlign="center">
                Enterperise Value
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">EV/EBIT(x)</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                EV/EBITDA(x)
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell textAlign="center">${props.metrics.ev}</Table.Cell>
              <Table.Cell textAlign="center">
                {props.metrics.evebit}x
              </Table.Cell>
              <Table.Cell textAlign="center">
                {props.metrics.evebitda}x
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="3">
                Equity Valuation
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell textAlign="center">P/E(x)</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">P/B(x)</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">P/S(x)</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        </Table>
      </Segment>
    </div>
  );
};

export default Metrics;
