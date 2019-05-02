import React from "react";
import {
  Divider,
  Grid,
  Header,
  Message,
  Segment,
  Table
} from "semantic-ui-react";

const ModelRow = props => {
  console.log("Model Row", props);
  return (
    <div>
      {/* <Table.Row textAlign="center">{props.Revenue}</Table.Row>
        <Table.Row textAlign="center">{props.EBITDA}</Table.Row>
        <Table.Row textAlign="center">{props.Margin}</Table.Row>
        <Table.Row textAlign="center">{props.OCF}</Table.Row>
        <Table.Row textAlign="center">{props.Conversion}</Table.Row>
        <Table.Row textAlign="center">{props.FCF}</Table.Row> */}
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.Revenue}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.EBITDA}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.Margin}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.OCF}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.Conversion}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.FCF}</strong>
        </Table.Row>
      </Message>
      <Message color="black" textAlign="center">
        <Table.Row style={{ color: "#6666ff" }}>
          <strong>{props.capex}</strong>
        </Table.Row>
      </Message>
    </div>
  );
};

export default ModelRow;
