import React from "react";
import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Table
} from "semantic-ui-react";

const Ticker = props => {
  return (
    <Table.Row textAlign="center">
      <Table.HeaderCell>#</Table.HeaderCell>
      <Table.HeaderCell>Company</Table.HeaderCell>
      <Table.HeaderCell>Ticker</Table.HeaderCell>
      <Table.HeaderCell>Exchange</Table.HeaderCell>
      {/* <Table.HeaderCell>Sector</Table.HeaderCell>
      <Table.HeaderCell>Industry</Table.HeaderCell>
      <Table.HeaderCell>Market Cap</Table.HeaderCell>
      <Table.HeaderCell>Revenue</Table.HeaderCell> */}
      {/* <Table.HeaderCell>Website</Table.HeaderCell>
      <Table.HeaderCell>Location</Table.HeaderCell> */}
      <Table.HeaderCell>WatchList</Table.HeaderCell>
    </Table.Row>
  );
};

export default Ticker;
