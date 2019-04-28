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
  List,
  Label
} from "semantic-ui-react";

import WatchListNote from "./WatchListNote";
class WatchListItem extends Component {
  state = {
    currentNotes: [],
    WatchListNote: null
  };
  renderNotes = () => {
    const foundNotes = this.props.notes.filter(note => {
      return note.favTicker === this.props.ticker;
    });
    return this.setState({
      currentNotes: foundNotes
    });
  };

  toggleNotes = () => {
    console.log("dhowing Notes List");
    this.setState({
      WatchListNote: !this.state.WatchListNote
    });
  };

  handleClick = () => {
    this.toggleNotes();
    this.renderNotes();
  };
  render() {
    // console.log("watchitem", this.props, this.state);
    return (
      <div>
        {/* {() => this.renderNotes()} */}
        <Segment color="violet" attached="top">
          <Label as="a" corner="right" color="red">
            <Icon
              name="remove"
              onClick={() => this.props.removeFromWatchList(this.props.id)}
            />
          </Label>
          <Divider style={{ color: "blue" }} inverted horizontal>
            <Header style={{ color: "blue" }} as="h4">
              {this.props.name}
            </Header>
          </Divider>
        </Segment>
        <Message attached="bottom" color="blue">
          <List.Item>
            <List.Content>
              {/* <List.Header as="a">{this.props.ticker}</List.Header> */}
              {/* <List.Description as="a">{this.props.ticker}</List.Description> */}
            </List.Content>
            <br />
            <Label as="a" onClick={() => this.props.togglePopup(this.props.id)}>
              <Icon name="archive" />
              New Note
            </Label>
            <Label as="a" onClick={() => this.handleClick()}>
              <Icon name="tasks" />
              Notes
              {/* <Label.Detail color="red" floating>
                {this.state.currentNotes.length}
              </Label.Detail> */}
            </Label>
          </List.Item>
          <br />
          {this.state.WatchListNote ? (
            <WatchListNote
              removeNote={this.props.removeNote}
              notes={this.state.currentNotes}
            />
          ) : null}
        </Message>
        <br />
      </div>
    );
  }
}

export default WatchListItem;
