import React, { Component } from "react";
import { Input, Segment, Button, Table, Message } from "semantic-ui-react";
import CompareRow from "./CompareRow";

export default class CompareList extends Component {
  render() {
    // console.log("Compare List", this.props);
    return (
      <Table striped inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" inverted colSpan="6">
              {/* <Message color="violet"> Sector Performance </Message> */}
              {/* <strong style={{ color: "#F59900" }}>Sector Performance </strong> */}
              <strong style={{ color: "#D3D3D3" }}>Companies </strong>
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row textAlign="center">
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
                #
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
                Index
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
                Ticker
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
                Comp Analysis
              </Message>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.tickers.map((ticker, index) => {
            return (
              <CompareRow
                num={index}
                key={ticker.ticker}
                {...ticker}
                handleRatioPost={this.props.handleRatioPost}
                compareDetails={this.props.compareDetails}
                addItemToCompare={this.props.addItemToCompare}
                handleCompsPost={this.props.handleCompsPost}
                addItemToCompare={this.props.addItemToCompare}
                clickedCompare={this.props.clickedCompare}
                renderCompareCont={this.props.renderCompareCont}
              />
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}
