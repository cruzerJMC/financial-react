import React from "react";
import { Accordion, Icon, Segment, Table, Message } from "semantic-ui-react";
import Note from "./Note";
const NoteList = props => {
  // console.log("Props in NoteList", props);
  return (
    // <Segment inverted>
    <Table striped celled inverted selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center" colSpan="4">
            <Message color="violet">Company Note List </Message>
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell textAlign="center">
            <strong style={{ color: "#6600FA" }}>Delete</strong>
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">
            <strong style={{ color: "#6600FA" }}>Title</strong>
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">
            <strong style={{ color: "#6600FA" }}>Created</strong>
          </Table.HeaderCell>
          <Table.HeaderCell textAlign="center">
            <strong style={{ color: "#6600FA" }}>View Note</strong>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.notes.map((note, index) => {
          return (
            <Note
              key={note.id}
              {...note}
              index={index}
              removeNote={props.removeNote}
            />
          );
        })}
      </Table.Body>
    </Table>
    // </Segment>
  );
};

export default NoteList;
