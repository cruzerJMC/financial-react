import React, { Component } from "react";
import { Input, Segment, Button, Grid } from "semantic-ui-react";
import CompareList from "./CompareList";
import CompanyCompare from "./CompanyCompare";
import CompsCont from "./CompsCont";

export default class HomePage extends Component {
  state = {
    ratios: [],
    clickedCompare: [],
    compareItems: [],
    comps: []
  };

  compareDetails = itemId => {
    const clickedCompare = this.props.tickers.find(item => item.id === itemId);
    // console.log("showing", clickedCompare);
    this.setState({
      clickedCompare: clickedCompare
    });
  };

  addItemToCompare = itemTicker => {
    const foundCompare = this.props.tickers.find(
      item => item.ticker === itemTicker
    );
    console.log("foundCompare", foundCompare);
    if (this.state.compareItems.length === 0) {
      this.setState({
        compareItems: [...this.state.compareItems, foundCompare]
      });
    } else if (
      this.state.compareItems.length === 1 &&
      this.state.compareItems[0].ticker !== foundCompare.ticker
    ) {
      this.setState({
        compareItems: [...this.state.compareItems, foundCompare]
      });
    } else if (this.state.compareItems.length === 2) {
      this.setState({
        compareItems: [...this.state.compareItems]
      });
    }
  };
  // handleRatioPost = async () => {
  //   // e.preventDefault();
  //   const response = await fetch("http://localhost:5000/api/ratios", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ post: this.state.clickedCompare.ticker })
  //   });
  //   const body = await response.json();
  //   // console.log(body);
  //   this.setState({
  //     ratios: [...this.state.ratios, body]
  //   });
  // };

  handleRatioPost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/ratios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedCompare.ticker })
    });
    const body = await response.json();
    console.log(body);
    if (this.state.ratios.length === 0) {
      this.setState({
        ratios: [...this.state.ratios, body]
      });
    }
  };

  handleCompsPost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/comps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedCompare.ticker })
    });
    const body = await response.json();
    this.setState({
      comps: [...body]
      // comps: [...body[0], ...Object.values(body[1])]
    });
  };

  render() {
    // console.log("compare props", this.props);
    console.log("compare state", this.state);
    const objectOne = this.state.comps[0];
    const objectTwo = this.state.comps[1];

    const mainCompany = { ...objectOne, ...objectTwo };

    return (
      <Segment inverted>
        <Segment attached="top" inverted>
          <Input focus placeholder="Search..." />
          <Button type="submit">Search</Button>
        </Segment>
        <Segment attached="bottom" inverted>
          <Grid columns={2} textAlign="center">
            {/* <Divider vertical>Or</Divider> */}
            <Grid.Row>
              <Grid.Column width={6} color="black">
                <CompareList
                  tickers={this.props.tickers}
                  handleRatioPost={this.handleRatioPost}
                  compareDetails={this.compareDetails}
                  addItemToCompare={this.addItemToCompare}
                  handleCompsPost={this.handleCompsPost}
                />
                ;
              </Grid.Column>
              <Grid.Column width={10} color="black">
                <CompsCont mainCompany={[mainCompany]} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment>
    );
  }
}
