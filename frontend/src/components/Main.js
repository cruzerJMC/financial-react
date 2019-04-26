import React, { Component } from "react";

import { Menu, Header, Container, Segment, Message } from "semantic-ui-react";
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
      <Segment inverted>
        <Message info />
        {/* <Segment placeholder> */}
        {/* <Header icon>
      <Icon name='pdf file outline' />
      No documents are listed for this customer.
    </Header>
    <Button primary>Add Document</Button> */}
        {/* </Segment> */}
        <Menu>
          <Menu.Item
            style={{ color: "blue" }}
            name="company"
            onClick={() => this.companyClick()}
          >
            <strong> Company Analysis </strong>
          </Menu.Item>

          <Menu.Item
            style={{ color: "blue" }}
            name="industry"
            onClick={() => this.buttonToggle("industry")}
          >
            <strong> Market Analysis </strong>
          </Menu.Item>
          <Menu.Item
            style={{ color: "blue" }}
            name="news"
            onClick={() => this.buttonToggle("news")}
          >
            <strong> News Feed </strong>
          </Menu.Item>
        </Menu>

        <Segment inverted>
          {this.state.industry ? <MarketPage /> : null}
          {this.state.news ? <NewsList /> : null}
          {this.state.company ? (
            <HomePage currentUser={this.props.currentUser} />
          ) : null}
        </Segment>
      </Segment>
    );
  }
}

export default Main;
