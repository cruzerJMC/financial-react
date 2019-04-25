import React, { Component } from "react";
import { Menu, Header, Container, Segment } from "semantic-ui-react";

import Indexes from "./Indexes";
import Sectors from "./Sectors";

export default class MarketPage extends Component {
  render() {
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
        <Indexes />
        <Sectors />
      </Segment>
    );
  }
}
