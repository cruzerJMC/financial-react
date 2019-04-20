import React, { Component } from "react";
import {
  Segment,
  Button,
  Message,
  Accordion,
  Icon,
  Table,
  TransitionablePortal,
  Header,
  Modal,
  Container
} from "semantic-ui-react";

import "../App.css";
import { relative } from "path";

class Note extends Component {
  state = { open: false };

  handleClick = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });
  render() {
    const { open } = this.state;
    // console.log("Note", this.props);
    return (
      <div>
        <Table.Row>
          <Table.Cell>
            <Button
              compact
              basic
              circular
              size="tiny"
              color="red"
              icon={<Icon name="delete" />}
              onClick={() => this.props.removeNote(this.props.id)}
            />
          </Table.Cell>
          <Table.Cell>
            <h3>{this.props.title} </h3>
          </Table.Cell>
          <Table.Cell>
            <h5>{this.props.createdAt}</h5>
          </Table.Cell>

          {/* <Table.Cell>
            <Button
              animated="vertical"
              content={open ? "Close Portal" : "Open Portal"}
              negative={open}
              positive={!open}
              onClick={this.handleClick}
            >
              <Button.Content hidden>View Note</Button.Content>
              <Button.Content visible>
                <Icon name="shop" />
              </Button.Content>
            </Button>
          </Table.Cell> */}

          <Table.Cell>
            <Modal trigger={<Button>View Note</Button>}>
              <Modal.Header>Profile Picture</Modal.Header>
              <Segment>
                <Container>
                  <Modal.Content>
                    <Modal.Description>
                      <h3>{this.props.content}</h3>
                    </Modal.Description>
                  </Modal.Content>
                </Container>
                <br />
                <Modal.Actions>
                  <Button primary>
                    Edit <Icon name="right chevron" />
                  </Button>
                </Modal.Actions>
              </Segment>
            </Modal>
          </Table.Cell>
        </Table.Row>
        {/* <TransitionablePortal onClose={this.handleClose} open={open}>
          <Segment
            style={{
              left: "40%",
              position: "fixed",
              top: "50%",
              zIndex: 1000
            }}
          >
            <Header>This is a controlled portal</Header>
            <Message color="blue">
              <p>{this.props.content}</p>
            </Message>
          </Segment>
        </TransitionablePortal> */}
      </div>
    );
  }
}

export default Note;
