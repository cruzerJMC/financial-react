import React, { Component } from "react";

import {
  Image,
  Button,
  Table,
  Segment,
  Grid,
  List,
  Message
} from "semantic-ui-react";

import Linkify from "react-linkify";

class NewsItem extends Component {
  doubleClickNews = () => {
    console.log("NEWS Firing");
    this.props.togglePopup();
    this.props.showArticle(this.props.id);
  };

  render() {
    console.log("news Props", this.props);
    const source = this.props.source.name.toUpperCase();
    return (
      <Message color="blue">
        <List divided animated verticalAlign="middle">
          <List.Item>
            {/* <List.Content floated='right'> */}
            <Grid columns={2} compact divided>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Image
                    centered
                    bordered
                    // floated="left"
                    size="small"
                    src={this.props.urlToImage}
                    // style={{ margin: "2em 2em 2em -4em" }}
                  />
                </Grid.Column>
                <Grid.Column width={12}>
                  <Message floated="left" size="small" info>
                    <Message.Header>
                      {this.props.title}-{source}
                    </Message.Header>
                    <p>{this.props.description}</p>
                    <Message.Header>
                      <Linkify>Source:{this.props.url}</Linkify>
                    </Message.Header>
                    <br />
                    <div>{this.props.publishedAt}</div>
                  </Message>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </List.Item>
        </List>
      </Message>
    );
  }
}

export default NewsItem;
