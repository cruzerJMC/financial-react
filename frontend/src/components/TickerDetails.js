import React, { Component } from "react";
import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Button
} from "semantic-ui-react";

import "../App.css";

// import ChartCont from "./ChartCont";
import Metrics from "./Metrics";
import Financials from "./Financials";
// import PopUp from "./PopUp";
// import PriceChart from "./PriceChart";

class TickerDetails extends Component {
  // state = {
  //   showPopup: false
  // };

  // togglePopup = () => {
  //   this.setState({
  //     showPopup: !this.state.showPopup
  //   });
  // };
  render() {
    return (
      <div>
        <div>
          <Segment>
            <Button onClick={this.props.closeDetails}>close me</Button>
            <br />
            <br />

            <Metrics metrics={this.props.metrics} />
            <Financials fins={this.props.fins} />
          </Segment>
        </div>
      </div>
    );
  }
}

export default TickerDetails;
