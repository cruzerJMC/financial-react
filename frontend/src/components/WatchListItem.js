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
      <List.Item onClick={() => this.props.togglePopup(this.props.id)}>
        <List.Icon name="github" size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a">{this.props.name}</List.Header>
          <List.Description as="a">{this.props.ticker}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}

export default WatchListItem;
