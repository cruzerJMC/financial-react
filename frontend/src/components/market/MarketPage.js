import React, { Component } from "react";
import {
  Menu,
  Header,
  Container,
  Segment,
  Icon,
  Grid,
  Divider,
  Image,
  Message
} from "semantic-ui-react";
import io from "socket.io-client";

import Indexes from "./Indexes";
import Sectors from "./Sectors";
import PriceCont from "../stock/PriceCont";
export default class MarketPage extends Component {
  state = {
    currentStocks: [],
    pastStocks: [],
    endpoint: "http://localhost:5000"
  };

  componentWillMount() {
    this.socket = io("http://localhost:5000");
    this.socket.on("connect", this.connect);
    this.socket.on("disconnect", this.disconnect);
    const { endpoint } = this.state;
    const socket = io(endpoint);
    socket.on("FromAPI", data =>
      this.setState({
        currentStocks: data,
        pastStocks: this.state.currentStocks
      })
    );
  }

  // livePrice = () => {
  //   const { endpoint } = this.state;
  //   const socket = io(endpoint);
  //   socket.on("FromAPI", data => this.setState({ response: data }));
  // };
  connect = () => {
    // alert("Connected:" + this.socket.id);
    this.setState({ state: "connected" });
  };

  disconnect = () => {
    // alert("disconnected:" + this.socket.id);
    this.setState({ state: "disconnected" });
  };
  // async componentDidMount() {
  //   try {
  //     setInterval(async () => {
  //       const res = await fetch("http://localhost:5000/api/prices");
  //       const prices = await res.json();

  //       console.log("prices", typeof prices);
  //       // const dataPanelone = blocks.panelone;
  //       // const dataPaneltwo = blocks.paneltwo;

  //       this.setState({
  //         currentPrices: prices,
  //         pastPrices: this.state.currentPrices
  //       });
  //     }, 10000);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  render() {
    console.log("MarketPage", this.state);
    return (
      <Segment inverted>
        <style>
          {`
  html, body {
    background-color: #252839 !important;
  }
  p {
    align-content: center;
    background-color: #495285;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 6em;
  }
  p > span {
    opacity: 0.4;
    text-align: center;
  }
}
`}
        </style>
        {this.state.currentStocks.length === 0 ? (
          <div>
            <Segment inverted attached="top">
              <Segment inverted loading>
                <div>LOADING ....</div>
              </Segment>
            </Segment>
            <Segment attached="bottom" inverted>
              <Grid columns={2} textAlign="center">
                <Grid.Row>
                  <Grid.Column color="black">
                    <Indexes />
                  </Grid.Column>
                  <Grid.Column color="black">
                    <Sectors />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        ) : (
          <div>
            <Segment inverted attached="top">
              <Message color="blue" />
            </Segment>
            <Segment attached="bottom" inverted>
              <PriceCont stocks={this.state.currentStocks} />
            </Segment>
          </div>
        )}
      </Segment>
    );
  }
}
