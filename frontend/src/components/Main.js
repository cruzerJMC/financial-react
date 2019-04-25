import React, { Component } from "react";

import { Menu, Header, Container, Segment } from "semantic-ui-react";
import HomePage from "./HomePage";
import MarketPage from "./MarketPage";
import NewsList from "./NewsList";
class Main extends Component {
  state = {
    company: true,
    industry: false,
    news: false
  };
  buttonToggle = word => {
    // console.log("switching", word, this.state.company, this.state.industry)
    if (word === "industry") {
      return this.setState({
        company: false,
        industry: true,
        news: false
      });
    }
    if (word === "news") {
      return this.setState({
        company: false,
        industry: false,
        news: true
      });
    } else {
      return this.setState({
        company: true,
        industry: false,
        news: false
      });
    }
  };

  companyClick = () => {
    this.buttonToggle("company");
    // this.updateProfileData();
  };
  render() {
    return (
      <div>
        {/* <Header as="h2">Welcome</Header> */}
        <Menu>
          <Menu.Item name="company" onClick={() => this.companyClick()}>
            Company Analysis
          </Menu.Item>

          <Menu.Item
            name="industry"
            onClick={() => this.buttonToggle("industry")}
          >
            Market Analysis
          </Menu.Item>
          <Menu.Item name="news" onClick={() => this.buttonToggle("news")}>
            News Feed
          </Menu.Item>
        </Menu>

        <Segment inverted>
          {this.state.industry ? <MarketPage /> : null}
          {this.state.news ? <NewsList /> : null}
          {this.state.company ? (
            <HomePage currentUser={this.props.currentUser} />
          ) : null}
        </Segment>
      </div>
    );
  }
}

export default Main;
