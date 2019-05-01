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

import Indexes from "./Indexes";
import Sectors from "./Sectors";
import PriceCont from "./stock/PriceCont";
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
        <Segment inverted attached="top">
          <PriceCont />
        </Segment>

        <Segment attached="bottom" inverted>
          <Grid columns={2} textAlign="center">
            {/* <Divider vertical>Or</Divider> */}
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
      </Segment>
    );
  }
}
