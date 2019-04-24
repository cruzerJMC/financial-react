import React, { Component } from "react";
import { Table, List, Grid, Message, Divider } from "semantic-ui-react";

class CFItem extends Component {
  renderLabels = () => {
    if (this.props[0] === 0) {
      return "Net Income";
    } else {
      return "CF Item";
    }
  };
  render() {
    console.log("CFItem", this.props);

    return (
      // <div>Test</div>
      <Table.Row>
        {/* {this.renderISLabels()} */}
        <Table.Cell>
          <strong>{this.renderLabels()}</strong>
        </Table.Cell>
        {this.props.YrOne ? (
          <Table.Cell>
            {this.props.YrOne.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell>N/A</Table.Cell>
        )}
        {this.props.YrTwo ? (
          <Table.Cell>
            {this.props.YrTwo.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell>N/A</Table.Cell>
        )}
        {this.props.YrThree ? (
          <Table.Cell>
            {this.props.YrThree.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell>N/A</Table.Cell>
        )}
        {this.props.YrFour ? (
          <Table.Cell>
            {this.props.YrFour.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell>N/A</Table.Cell>
        )}
        {this.props.YrFive ? (
          <Table.Cell>
            {this.props.YrFive.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD"
            })}
          </Table.Cell>
        ) : (
          <Table.Cell>N/A</Table.Cell>
        )}
      </Table.Row>
    );
  }
}

export default CFItem;
