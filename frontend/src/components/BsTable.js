import React from "react";
import {
  Table,
  List,
  Grid,
  Message,
  Divider,
  Container
} from "semantic-ui-react";

const BsTable = props => {
  const decimal = 1000000000;
  console.log("IS Table", props);
  return (
    <div>
      <Grid.Column>
        <Message>{props["Release Date"]}</Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Cash and Cash Equivalents"] / decimal).toLocaleString(
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
          {(props["Short-term Investments"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props.Receivables / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props.Inventories / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Current Assets"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Property Plant & Equipment"] / decimal).toLocaleString(
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
          {(props["Goodwill and Intangible Assets"] / decimal).toLocaleString(
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
          {(props["Long-term Investments"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Tax assets"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Non-Current Assets"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Total Assets"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props.Payables / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Current Debt"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Current Liabilities"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Non-Current Debt"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Non-Current Debt"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Tax Liabilities"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Deposit Liabilities"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Non-Current Liabilites"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
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
      <br />
    </div>
  );
};

export default BsTable;
