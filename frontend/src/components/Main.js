import React, { Component } from "react";

import { Menu, Header, Container, Segment, Message } from "semantic-ui-react";
import HomePage from "./HomePage";
import MarketPage from "./MarketPage";
import NewsList from "./NewsList";
import ModelPage from "./model/ModelPage";
import CompareHome from "./compare/HomePage";
class Main extends Component {
  state = {
    company: true,
    industry: false,
    news: false,
    model: false,
    compare: false,
    tickers: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/tickers")
      .then(response => {
        return response.json();
      })
      .then(tickers => {
        return this.setState({
          tickers: tickers
        });
      });
  }

  buttonToggle = word => {
    // console.log("switching", word, this.state.company, this.state.industry)
    if (word === "industry") {
      return this.setState({
        company: false,
        industry: true,
        news: false,
        model: false,
        compare: false
      });
    }
    if (word === "news") {
      return this.setState({
        company: false,
        industry: false,
        news: true,
        model: false,
        compare: false
      });
    }
    if (word === "compare") {
      return this.setState({
        company: false,
        industry: false,
        news: false,
        model: false,
        compare: true
      });
      // }
      // if (word === "model") {
      //   return this.setState({
      //     company: false,
      //     industry: false,
      //     news: false,
      //     model: true,
      //     compare: false
      //   });
    } else {
      return this.setState({
        company: true,
        industry: false,
        news: false,
        model: false,
        compare: false
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
          {/* <Menu.Item
            style={{ color: "blue" }}
            name="news"
            onClick={() => this.buttonToggle("model")}
          >
            <strong> Financial Model </strong>
          </Menu.Item> */}

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
          <Menu.Item
            style={{ color: "blue" }}
            name="compare"
            onClick={() => this.buttonToggle("compare")}
          >
            <strong> Compare </strong>
          </Menu.Item>
        </Menu>

        <Segment inverted>
          {/* {this.state.model ? <ModelPage /> : null} */}
          {this.state.industry ? <MarketPage /> : null}
          {this.state.news ? <NewsList /> : null}
          {this.state.compare ? (
            <CompareHome tickers={this.state.tickers} />
          ) : null}

          {this.state.company ? (
            <HomePage
              currentUser={this.props.currentUser}
              tickers={this.state.tickers}
            />
          ) : null}
        </Segment>
      </Segment>
    );
  }
}

export default Main;
