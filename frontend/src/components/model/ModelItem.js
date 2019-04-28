import React, { Component } from "react";

import {
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Responsive,
  Table,
  Container,
  List,
  Tab
} from "semantic-ui-react";

class ModelItem extends Component {
  state = {
    marginOne: ""
  };

  handleChange = event => {
    console.log("typing");
    console.log(event.target);
    //  console.log(event.target.value)

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  renderyrOne = () => {
    const labels = [
      "Revenue",
      "EBITDA",
      "EBITDA Margin",
      "Operating Cashflow",
      "Cash Conversion Ratio",
      "Free Cashflow",
      "Capex % OCF"
    ];
    return (
      // <div>
      <Table.Row>
        <Table.Cell>
          {labels.map(item => {
            return (
              <Table.Row>
                <Message info>{item}</Message>
              </Table.Row>
            );
          })}
        </Table.Cell>
        <Table.Cell>
          {Object.values(this.props.one).map(item => {
            return (
              <Table.Row>
                <Message info>{item}</Message>
              </Table.Row>
            );
          })}
        </Table.Cell>
        <Table.Cell>
          {Object.values(this.props.two).map(item => {
            return (
              <Table.Row>
                <Message info>{item}</Message>
              </Table.Row>
            );
          })}
        </Table.Cell>
        <Table.Cell>
          {Object.values(this.props.three).map(item => {
            return (
              <Table.Row>
                <Message info>{item}</Message>
              </Table.Row>
            );
          })}
        </Table.Cell>
        <Table.Cell>
          {Object.values(this.props.four).map(item => {
            return (
              <Table.Row>
                <Message info>{item}</Message>
              </Table.Row>
            );
          })}
        </Table.Cell>
        <Table.Cell>
          {Object.values(this.props.five).map(item => {
            return (
              <Table.Row>
                <Message info>{item}</Message>
              </Table.Row>
            );
          })}
        </Table.Cell>
        <Table.Cell>
          <Table.Row>
            <Message info>"100"</Message>
          </Table.Row>
          <Table.Row>
            <Message info>
              <input
                type="text"
                id="marginOne"
                name="marginOne"
                placeholder="Margin"
                value={this.state.marginOne}
                onChange={this.handleChange}
              />
            </Message>
          </Table.Row>
        </Table.Cell>
        {/* </div> */}
      </Table.Row>
    );
  };
  render() {
    console.log("model items", this.props);

    // console.log("yrOne", yrOne);
    return (
      <div>
        {this.renderyrOne()}
        {/* {Object.values(this.props.one).map(item => {
          console.log(item);
          return (
            <Table.Row>
              <Table.Cell style={{ color: "blue" }}>
                <strong>{item}</strong>
              </Table.Cell>
            </Table.Row>
          );
        })} */}
      </div>
    );
  }
}

// console.log(date);
// return <Table.Row>TEST</Table.Row>;

export default ModelItem;
