import React from "react";
import { Table, List, Grid, Message, Divider } from "semantic-ui-react";

const IsTable = props => {
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
            {(props.Revenue / decimal).toLocaleString("us-EN", {
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
            {(props["Cost of Revenue"] / decimal).toLocaleString("us-EN", {
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
            {(props["Gross Profit"] / decimal).toLocaleString("us-EN", {
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
            {(props["R&D Expenses"] / decimal).toLocaleString("us-EN", {
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
            {(props["SG&A Expense"] / decimal).toLocaleString("us-EN", {
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
            {(props["Operating Expenses"] / decimal).toLocaleString("us-EN", {
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
            {(props["Operating Income"] / decimal).toLocaleString("us-EN", {
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
            {(props["EBITDA"] / decimal).toLocaleString("us-EN", {
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
            {(props["Interest Expense"] / decimal).toLocaleString("us-EN", {
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
            {(props["Pre-tax Income"] / decimal).toLocaleString("us-EN", {
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
            {(props["Income Tax Expense"] / decimal).toLocaleString("us-EN", {
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
            {(props["Net Income"] / decimal).toLocaleString("us-EN", {
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
            {(props["Preferred Dividends"] / decimal).toLocaleString("us-EN", {
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
            {(props["Net Income Common"] / decimal).toLocaleString("us-EN", {
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
            {(props.EPS / 1).toLocaleString("us-EN", {
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
            {(props["EPS Diluted"] / 1).toLocaleString("us-EN", {
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
          <h5>{props["Weighted Average Shs Out"] / decimal}</h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>{props["Weighted Average Shs Out (Dil)"] / decimal}</h5>
        </Message>
      </Grid.Column>
      <Divider />
      <br />
      <Grid.Column>
        <Message>
          <h5>
            {(props["Dividend per Share"] / 1).toLocaleString("us-EN", {
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

export default IsTable;
