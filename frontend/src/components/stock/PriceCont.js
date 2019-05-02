import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";
// import io from "socket.io-client";
// import StockList from "./StockList";
import ListOne from "./ListOne";
import ListTwo from "./ListTwo";
import Indexes from "../market/Indexes";
import Sectors from "../market/Sectors";

export default class PriceCont extends Component {
  render() {
    // console.log("Price COnt", this.state);
    return (
      <Segment centered inverted>
        <Grid columns="equal" textAlign="center">
          <Grid.Row>
            <Grid.Column color="black">
              <ListOne
                stocks={this.props.stocks.filter((stock, index) => {
                  return index < 25;
                })}
              />
            </Grid.Column>
            <Grid.Column color="black">
              <ListTwo
                stocks={this.props.stocks.filter((stock, index) => {
                  return index >= 25;
                })}
              />
            </Grid.Column>
            <Grid.Column color="black">
              <Indexes />
              <Sectors />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
