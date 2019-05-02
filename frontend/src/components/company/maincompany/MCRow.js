import React from "react";
import {
  Divider,
  Grid,
  Header,
  Message,
  Segment,
  Table
} from "semantic-ui-react";

const MCRow = props => {
  // console.log("MCRow", props);
  return (
    <div>
      {/* <Table.Row> */}
      <Table.Cell style={{ color: "blue" }}>
        <strong>text</strong>
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.YrOne.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.YrTwo.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.YrThree.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.YrFour.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.YrFive.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
      <Table.Cell style={{ color: "blue" }} textAlign="center">
        {props.TTM.toLocaleString("us-EN", {
          style: "currency",
          currency: "USD"
        })}
      </Table.Cell>
      {/* </Table.Row> */}
      );
    </div>
  );
};

export default MCRow;
