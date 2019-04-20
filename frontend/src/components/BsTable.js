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
        <Message>
          <h5>{props["Release Date"]}</h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Cash and Cash Equivalents"] / decimal).toLocaleString(
              "us-EN",
              {
                style: "currency",
                currency: "USD"
              }
            )}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Short-term Investments"] / decimal).toLocaleString(
              "us-EN",
              {
                style: "currency",
                currency: "USD"
              }
            )}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props.Receivables / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props.Inventories / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Current Assets"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Property Plant & Equipment"] / decimal).toLocaleString(
              "us-EN",
              {
                style: "currency",
                currency: "USD"
              }
            )}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Goodwill and Intangible Assets"] / decimal).toLocaleString(
              "us-EN",
              {
                style: "currency",
                currency: "USD"
              }
            )}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Long-term Investments"] / decimal).toLocaleString(
              "us-EN",
              {
                style: "currency",
                currency: "USD"
              }
            )}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Tax assets"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Non-Current Assets"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Total Assets"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props.Payables / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Current Debt"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Current Liabilities"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Non-Current Debt"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Non-Current Debt"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Tax Liabilities"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Deposit Liabilities"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Non-Current Liabilites"] / decimal).toLocaleString(
              "us-EN",
              {
                style: "currency",
                currency: "USD"
              }
            )}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Total Liabilities"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Other Comprehensive Income"] / decimal).toLocaleString(
              "us-EN",
              {
                style: "currency",
                currency: "USD"
              }
            )}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Retained Earnings (deficit)"] / decimal).toLocaleString(
              "us-EN",
              {
                style: "currency",
                currency: "USD"
              }
            )}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5 style={{ weight: "bold" }}>
            {(props["Shareholders Equity"] / decimal).toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
    </div>
  );
};

export default BsTable;
