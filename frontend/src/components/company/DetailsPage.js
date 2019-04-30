import React, { Component } from "react";
import { Input, Segment, Button, Grid, Label, Icon } from "semantic-ui-react";
import CompareList from "./CompareList";
// import CompanyCompare from "./CompanyCompare";
import CompsCont from "./CompsCont";
import CCCont from "./comparedcompanies/CCCont";
import CompanyList from "./CompanyList";
export default class DetailsPage extends Component {
  state = {
    ratios: [],
    clickedCompare: [],
    detailsPage: false,
    compareItems: [],
    comps: [],
    compsPage: false,
    detailsSearch: "",
    compsSearch: ""
  };
  handleChange = event => {
    // console.log("Changing")
    // console.log (event.target.name)
    this.setState({
      detailsSearch: event.target.value,
      compsSearch: event.target.value
    });
  };

  filterCompanies = () =>
    this.props.tickers.filter(item => {
      return (
        item.name
          .toLowerCase()
          .includes(this.state.detailsSearch.toLowerCase()) ||
        item.ticker
          .toLowerCase()
          .includes(this.state.detailsSearch.toLowerCase()) ||
        item.exchange
          .toLowerCase()
          .includes(this.state.detailsSearch.toLowerCase()) ||
        item.sector
          .toLowerCase()
          .includes(this.state.detailsSearch.toLowerCase()) ||
        item.industry
          .toLowerCase()
          .includes(this.state.detailsSearch.toLowerCase())
      );
    });
  renderCompareCont = () => {
    if (this.state.compareItems.length === 1) {
      return this.setState({
        compsPage: !this.state.compsPage
      });
    } else {
      return this.setState({
        compsPage: false
      });
    }
  };
  viewCompanySummary = () => {
    return this.setState({
      detailsPage: !this.state.detailsPage
    });
  };
  compareDetails = itemId => {
    const clickedCompare = this.props.tickers.find(item => item.id === itemId);
    // console.log("showing", clickedCompare);
    this.setState({
      clickedCompare: clickedCompare,
      // compareItems: clickedCompare,
      compsPage: false
    });
  };

  addItemToCompare = itemTicker => {
    const foundCompare = this.props.tickers.find(
      item => item.ticker === itemTicker
    );
    const preventDoubles = this.state.compareItems.find(
      item => item.ticker === itemTicker
    );
    console.log("Comparing", foundCompare);

    if (!preventDoubles && this.state.compareItems.length === 0) {
      alert("One Item add to compare");
      return this.setState({
        compareItems: [...this.state.compareItems, foundCompare]
      });
    } else if (!preventDoubles && this.state.compareItems.length === 1) {
      return this.setState({
        compareItems: [...this.state.compareItems, foundCompare]
      });
    } else {
      return this.setState({
        compareItems: [...this.state.compareItems]
      });
    }
    // else {
    //   alert("You Can Only Compare Two Items");
    // }
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
        ratios: body
      });
      // } else if (this.state.ratios.length === 1) {
      //   this.setState({
      //     ratios: [...this.state.ratios, body]
      //   });
      // } else {
      //   this.setState({
      //     ratios: [...this.state.ratios]
      //   });
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
    console.log(
      "compareItems",
      this.state.comaparesItems,
      typeof this.state.comaparesItems
    );
    // const objectOne = this.state.comps[0];
    // const objectTwo = this.state.comps[1];

    // const mainCompany = { ...objectOne, ...objectTwo };

    return (
      <div>
        {!this.state.compsPage ? (
          <Segment inverted>
            {!this.state.detailsPage ? (
              <Segment inverted>
                <Segment attached="top" inverted>
                  <Input fluid focus>
                    <input
                      onChange={this.handleChange}
                      type="text"
                      placeholder={"Search Companies"}
                      value={this.state.detailsSearch}
                    />
                  </Input>
                </Segment>
                <Segment attached="bottom" inverted>
                  <CompanyList
                    tickers={this.filterCompanies()}
                    handleRatioPost={this.handleRatioPost}
                    compareDetails={this.compareDetails}
                    // addItemToCompare={this.addItemToCompare}
                    handleCompsPost={this.handleCompsPost}
                    viewCompanySummary={this.viewCompanySummary}
                  />
                </Segment>
              </Segment>
            ) : (
              <Segment inverted>
                <Segment attached="top" inverted>
                  <Label as="a" corner="right" color="blue">
                    <Icon
                      name="remove"
                      onClick={() => this.viewCompanySummary()}
                    />
                  </Label>
                  <Input fluid focus>
                    {/* <input
                      onChange={this.handleChange}
                      type="text"
                      placeholder={"Search ...."}
                      value={this.state.compsSearch}
                    /> */}
                  </Input>
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
                          clickedCompare={this.state.clickedCompare}
                          renderCompareCont={this.renderCompareCont}
                        />
                        ;
                      </Grid.Column>
                      <Grid.Column width={10} color="black">
                        <CompsCont
                          comps={[this.state.comps]}
                          ratios={this.state.ratios}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Segment>
            )}{" "}
          </Segment>
        ) : (
          <CCCont />
        )}
      </div>
    );
  }
}
