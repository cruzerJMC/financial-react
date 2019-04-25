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

const IndexItem = props => {
  console.log("indexItem", props);
  return (
    <Table.Row>
      <Table.Cell textAlign="center">{props.num + 1}</Table.Cell>
      <Table.Cell textAlign="center">{props.Name}</Table.Cell>
      <Table.Cell textAlign="center">{props.Ticker}</Table.Cell>
      <Table.Cell textAlign="center">{props.Price}</Table.Cell>
      <Table.Cell textAlign="center">{props.Changes}</Table.Cell>
      <Table.Cell textAlign="center">{props.updated_at}</Table.Cell>
    </Table.Row>
    //   // </Segment>
    //   {/* <Marquee>
    //     <Statistic size="mini" color="yellow">
    //       <Statistic.Value>
    //         <List horizontal size="mini">
    //           <List.Item>
    //             {props.Name}-{props.Changes}
    //           </List.Item>
    //         </List>
    //       </Statistic.Value>
    //     </Statistic>
    //   </Marquee> */}
    //   {/* </List> */}
    // // </div>
  );
};

export default IndexItem;
