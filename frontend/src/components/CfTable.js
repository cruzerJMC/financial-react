import React from "react";
import { Table, List, Grid, Message, Divider } from "semantic-ui-react";

const CfTable = props => {
  const decimal = 100000000;
  console.log("Cf Table", props);
  return (
    <div>
      <Grid.Column>
        <Message>{props["Release Date"]}</Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Depreciation & Amortization"] / decimal).toLocaleString(
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
          {(props["Stock-based Compensation"] / decimal).toLocaleString(
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
          {(props["Operating Cash Flow"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Capital Expenditure"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Acquisitions and Disposals"] / decimal).toLocaleString(
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
          {(props["Investment Purchases and Sales"] / decimal).toLocaleString(
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
          {(props["Investing Cash Flow"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Issuance (Repayment) of Debt"] / decimal).toLocaleString(
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
          {(props["Issuance (Buybacks) of Shares"] / decimal).toLocaleString(
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
          {(props["Dividend Payments"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Financing Cash Flow"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["F/X Impact"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          {(props["Net Cash Flow"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />

      <Grid.Column>
        <Message>
          {(props["Free Cash Flow"] / decimal).toLocaleString("us-EN", {
            style: "currency",
            currency: "USD"
          })}
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>{props["Net Cash/Marketcap"] / decimal}</Message>
      </Grid.Column>
      <Divider />
      <br />
    </div>
  );
};

export default CfTable;
