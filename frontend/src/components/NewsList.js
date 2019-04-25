import React, { Component } from "react";
import { Table, Segment, Message } from "semantic-ui-react";
import NewsItem from "./NewsItem";
// import moment from "moment";

class NewsList extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    fetch("http://localhost:5000/api/articles")
      .then(response => {
        return response.json();
      })
      .then(articles => {
        return this.setState({
          articles: articles
        });
      });
  }
  render() {
    console.log("News", this.state);
    return (
      // <Segment centered>
      <div>
        {this.state.articles.map((item, index) => {
          return <NewsItem key={item.title} num={index} {...item} />;
        })}
      </div>
    );
  }
}

export default NewsList;
