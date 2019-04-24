import React from "react";
import { Table, List, Grid, Message, Divider } from "semantic-ui-react";

const IsTable = props => {
  const decimal = 1000000000;
  console.log("IS Table", props);
  return (
    <div>
      <Grid.Column width={1}>
        <Message>{props["Release Date"]}</Message>
      </Grid.Column>
      <Divider />
      <br />

      <Grid.Column width={1}>
        <Message>
          {(props.Revenue / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Cost of Revenue"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Gross Profit"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["R&D Expenses"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["SG&A Expense"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Operating Expenses"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Operating Income"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["EBITDA"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Interest Expense"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Pre-tax Income"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Income Tax Expense"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Net Income"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Preferred Dividends"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Net Income Common"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props.EPS / 1).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["EPS Diluted"] / 1).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>{props["Weighted Average Shs Out"] / decimal}</Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>{props["Weighted Average Shs Out (Dil)"] / decimal}</Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column width={1}>
        <Message>
          {(props["Dividend per Share"] / 1).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />

      {/* <Grid.Column width={1}>
        <Message>
          {(props["Total Liabilities"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Other Comprehensive Income"] / decimal).toLocaleString(
            "us-EN",
            {
              style: "currency",
              currency: "USD"
            }
          )}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Retained Earnings (deficit)"] / decimal).toLocaleString(
            "us-EN",
            {
              style: "currency",
              currency: "USD"
            }
          )}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Shareholders Equity"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br /> */}
    </div>
  );
};

export default IsTable;
