import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import io from "socket.io-client";
import StockList from "./StockList";

export default class PriceCont extends Component {
  state = {
    currentPrices: [],
    pastPrices: []
  };
  async componentDidMount() {
    try {
      setInterval(async () => {
        const res = await fetch("http://localhost:5000/api/prices");
        const prices = await res.json();

        console.log("prices", typeof prices);
        // const dataPanelone = blocks.panelone;
        // const dataPaneltwo = blocks.paneltwo;

        this.setState({
          currentPrices: prices,
          pastPrices: this.state.currentPrices
        });
      }, 10000);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log("Price COnt", this.state);
    return (
      <Segment centered inverted>
        {this.state.currentPrices.length === 0 ? (
          <Segment loading>
            <div>LOADING ....</div>
          </Segment>
        ) : (
          <StockList stocks={this.state.currentPrices} />
        )}
      </Segment>
    );
  }
}
