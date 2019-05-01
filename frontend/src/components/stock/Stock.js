import React, { Component } from "react";
import {
  Segment,
  Card,
  Message,
  Statistic,
  Image,
  Icon,
  Table
} from "semantic-ui-react";
// import Stock from "./Stock";

export default class Stock extends Component {
  state = {
    currentPrice: [],
    pastPrice: []
  };

  componentDidMount() {
    this.timer = setInterval(() => this.setStockPrice(), 5000);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  setStockPrice = () => {
    this.setState({
      currentPrice: this.props.price,
      pastPrice: this.state.currentPrice
    });
  };

  handleColorChange = () => {
    if (this.state.currentPrice > this.state.pastPrice) {
      return "#7FFF00";
    } else if (this.state.currentPrice < this.state.pastPrice) {
      return "#FF4500";
    } else {
      return "#FF8C00";
    }
  };

  render() {
    console.log("Stock", this.state);
    return (
      <Table.Row>
        <Table.Cell>
          <Message color="black">
            <strong style={{ color: "#FF8C00" }}>{this.props.symbol}</strong>
          </Message>
        </Table.Cell>
        <Table.Cell
          verticalAlign="middle"
          // style={{ color: this.handleColorChange() }}
          textAlign="center"
        >
          <Statistic size="mini" inverted>
            <Statistic.Value>
              {/* <br /> */}
              <Icon name="dollar sign" />
              <strong style={{ color: this.handleColorChange() }}>
                {this.state.currentPrice}
              </strong>
            </Statistic.Value>
          </Statistic>
        </Table.Cell>
      </Table.Row>
      // <Card inverted textAlign="center">
      //   {/* <Message compact color="blue" textAlign="center"> */}
      //   <Statistic size="mini" textAlign="center">
      //     <Statistic.Label textAlign="center">
      //       {this.props.symbol}
      //     </Statistic.Label>
      //     <Statistic.Value
      //       style={{ color: this.handleColorChange() }}
      //       textAlign="center"
      //     >
      //       {/* <Icon name="dollar sign" /> */}
      //       {/* <Image src="/images/avatar/small/joe.jpg" inline circular /> */}
      //       {this.state.currentPrice}
      //     </Statistic.Value>
      //   </Statistic>
      //   {/* </Message> */}
      // </Card>
    );
  }
}
