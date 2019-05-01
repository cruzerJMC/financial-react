import React, { Component } from "react";
import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Card,
  Statistic,
  Header,
  Image,
  Message,
  Segment,
  Button
} from "semantic-ui-react";
import CompanyMenu from "./CompanyMenu";
import "../App.css";

// import ChartCont from "./ChartCont";
// import Metrics from "./Metrics";
// import Financials from "./Financials";
import Summary from "./Summary";
import CompanyCard from "./CompanyCard";

import NoteList from "./NoteList";

class TickerDetails extends Component {
  state = { profile: [] };

  componentDidMount() {
    fetch(
      `https://financialmodelingprep.com/api/company/profile/${
        this.props.clickedTicker.ticker
      }?datatype=json`
    )
      .then(response => {
        return response.json();
      })
      .then(profile => {
        this.setState({ profile: Object.values(profile) });
      });
  }

  renderCompanyCard = () => {
    if (this.state.profile[0] === undefined) {
      return "Company Profile Unavaliable";
    } else {
      return (
        <Grid columns={2} divided>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={4}>
              {this.state.profile.map(item => {
                return <CompanyCard key={item.companyName} {...item} />;
              })}
            </Grid.Column>

            <Grid.Column width={10}>
              <Segment>
                {this.state.profile.map(item => {
                  return <Summary key={item.companyName} {...item} />;
                })}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    }
  };
  render() {
    // const company = this.state.profile[0];
    // console.log("tickerDetails", this.state, company);

    return (
      <div>
        <Segment>
          <Button onClick={this.props.closeDetails}>close me</Button>
          <br />
          <br />
        </Segment>
        <Segment attached>
          <Message color="blue">
            <h1>
              {this.props.clickedTicker.name}-{this.props.clickedTicker.ticker}
            </h1>
          </Message>
        </Segment>
        <Segment>{this.renderCompanyCard()}</Segment>

        <Segment>
          <div>
            <CompanyMenu
              fins={this.props.fins}
              income={this.props.income}
              cashflow={this.props.cashflow}
              balance={this.props.balance}
              annualIS={this.props.annualIS}
              annualCF={this.props.annualCF}
              annualBS={this.props.annualBS}
              metrics={this.props.metrics}
              clickedTicker={this.props.clickedTicker}
              historicals={this.props.historicals}
            />
            {/* <Metrics
              metrics={this.props.metrics}
              clickedTicker={this.props.clickedTicker}
            /> */}

            {/* <Financials fins={this.props.fins} /> */}
            <Segment inverted>
              {/* <Message color="violet" /> */}
              <NoteList
                notes={this.props.notes.filter(note => {
                  return note.favTicker === this.props.clickedTicker.ticker;
                })}
                removeNote={this.props.removeNote}
              />
            </Segment>
          </div>
        </Segment>
      </div>
    );
  }
}

export default TickerDetails;
