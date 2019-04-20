import React from "react";
import { Table, List, Grid, Message, Divider } from "semantic-ui-react";

const CfTable = props => {
  const decimal = 1000000;
  console.log("Cf Table", props);
  return (
    <div>
      <Grid.Column>
        <h5>{props[0]}</h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[1] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[2] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5 style={{ color: "red" }}>
          {(props[3] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[1] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[4] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[5] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[6] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[7] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[8] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[9] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[10] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[11] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <h5>
          {(props[12] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </h5>
      </Grid.Column>
    </div>
  );
};

export default CfTable;
