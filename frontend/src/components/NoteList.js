import React from "react";
import { Accordion, Icon, Segment, Table } from "semantic-ui-react";
import Note from "./Note";
const NoteList = props => {
  // console.log("Props in NoteList", props);
  return (
    <div>
      <Segment color="violet">
        <Table fixed singleLine striped>
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
      </Segment>
    </div>
  );
};

export default NoteList;
