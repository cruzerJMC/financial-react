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
      <Table.Cell textAlign="center" style={{ color: "#7FFF00" }}>
        {props.num + 1}
      </Table.Cell>
      <Table.Cell textAlign="center" style={{ color: "#7FFF00" }}>
        {props.Name}
      </Table.Cell>
      <Table.Cell textAlign="center" style={{ color: "#7FFF00" }}>
        {props.Ticker}
      </Table.Cell>
      <Table.Cell textAlign="center" style={{ color: "#7FFF00" }}>
        {props.Price}
      </Table.Cell>
      <Table.Cell textAlign="center" style={{ color: "#7FFF00" }}>
        {props.Changes}
      </Table.Cell>
      <Table.Cell textAlign="center" style={{ color: "#7FFF00" }}>
        {props.updated_at}
      </Table.Cell>
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
