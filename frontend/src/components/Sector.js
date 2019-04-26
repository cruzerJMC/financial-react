import React from "react";
// import Marquee from "react-smooth-marquee";

import {
  Table,
  List,
  Message,
  Divider,
  Segment,
  Grid,
  Statistic
} from "semantic-ui-react";

const Sector = props => {
  console.log("Sector", props);
  return (
    <Table.Row>
      <Table.Cell textAlign="center" style={{ color: "#7FFF00" }}>
        {props.num + 1}
      </Table.Cell>
      <Table.Cell textAlign="center" style={{ color: "#7FFF00" }}>
        {props.Name}
      </Table.Cell>
      <Table.Cell textAlign="center" style={{ color: "#7FFF00" }}>
        {props.Change}
      </Table.Cell>
    </Table.Row>

    // // </div>
  );
};

export default Sector;
