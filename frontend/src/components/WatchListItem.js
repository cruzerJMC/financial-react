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
  Button,
  List
} from "semantic-ui-react";

class WatchListItem extends Component {
  render() {
    return (
      <div>
        <Message color="blue">
          <Divider inverted horizontal>
            <Header as="h4">
              <Icon
                name="remove"
                onClick={() => this.props.removeFromWatchList(this.props.id)}
              />
              Company
            </Header>
          </Divider>

          <List.Item>
            <List.Icon
              float="left"
              name="archive"
              size="large"
              verticalAlign="middle"
            />
            <List.Content onClick={() => this.props.togglePopup(this.props.id)}>
              <List.Header as="a">{this.props.name}</List.Header>
              <List.Description as="a">{this.props.ticker}</List.Description>
            </List.Content>
          </List.Item>
        </Message>
        <br />
      </div>
    );
  }
}

export default WatchListItem;
