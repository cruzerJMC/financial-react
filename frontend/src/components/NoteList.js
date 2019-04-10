import React from "react";
import { Accordion, Icon, Segment } from "semantic-ui-react";
import Note from "./Note";
const NoteList = props => {
  console.log("Props in NoteList", props);
  return (
    <div>
      <Segment color="violet">
        <Accordion>
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
        </Accordion>
      </Segment>
    </div>
  );
};

export default NoteList;
