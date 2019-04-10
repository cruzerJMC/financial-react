import React, { Component } from "react";
import { Segment, Button, Message, Accordion, Icon } from "semantic-ui-react";

import "../App.css";

class Note extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    const index = this.props.index;
    console.log("Note", this.props);
    return (
      <div>
        <Accordion.Title
          active={activeIndex === index}
          index={index}
          onClick={this.handleClick}
        >
          <Icon
            name="remove"
            onClick={() => this.props.removeNote(this.props.id)}
          />
          <h3>{this.props.title} </h3>
          <h5>{this.props.createdAt}</h5>
          <Icon name="dropdown" />
        </Accordion.Title>

        <Accordion.Content active={activeIndex === index}>
          <Message color="blue">
            <p>{this.props.content}</p>
          </Message>
        </Accordion.Content>
      </div>
    );
  }
}

export default Note;
