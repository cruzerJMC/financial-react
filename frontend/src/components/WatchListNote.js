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
  Table,
  Modal,
  List,
  Button
} from "semantic-ui-react";
import WatchNote from "./WatchNote";

class WatchListNote extends Component {
  state = {
    watchNote: null,
    clickedNote: []
  };

  renderClickedNote = noteId => {
    const clickedNote = this.props.notes.find(note => {
      return note.id === noteId;
    });
    console.log("showing", clickedNote);
    return this.setState({
      clickedNote: clickedNote
      // watchNote: !this.state.watchNote
    });
  };
  // viewTickerNote = () => {
  //   console.log("NOTING");
  //   return this.setState({
  //     watchNote: !this.state.watchNote
  //   });
  // };
  // listTickerNotes = () => {
  //   if (this.props.notes.length === 0) {
  //     return "Currently there are no notes for this company";
  //   } else {
  //     return this.props.notes.map(note => {
  //       return (
  //         <List divided relaxed>
  //           {/* <List.Item onClick={() => this.renderClickedNote(note.id)}> */}
  //           <List.Item onClick={() => this.renderClickedNote(note.id)}>
  //             <List.Icon
  //               name="crosshairs"
  //               size="large"
  //               verticalAlign="middle"
  //             />
  //             <List.Content>
  //               <List.Header as="a">{note.title}</List.Header>
  //             </List.Content>
  //           </List.Item>
  //         </List>
  //       );
  //     });
  //   }
  // };
  listTickerNotes = () => {
    if (this.props.notes.length === 0) {
      return "Currently there are no notes for this company";
    } else {
      return this.props.notes.map(note => {
        return (
          <List divided relaxed>
            {/* <List.Item onClick={() => this.renderClickedNote(note.id)}> */}
            <List.Item onClick={() => this.renderClickedNote(note.id)}>
              <List.Icon
                name="crosshairs"
                size="large"
                verticalAlign="middle"
              />
              <List.Content>
                <List.Header as="a">{note.title}</List.Header>
              </List.Content>
            </List.Item>
          </List>
        );
      });
    }
  };

  handleNoteClick = noteId => {
    this.renderClickedNote(noteId);
    this.viewTickerNote();
  };

  render() {
    console.log("WatchNote", this.props, this.state);
    return (
      <div>
        {this.listTickerNotes()}
        {this.state.watchNote ? (
          <WatchListNote clickedNote={this.state.clickedNote} />
        ) : null}
      </div>
      //   // <List divided relaxed>
      //   //   <List.Item>
      //   //     <List.Icon name="crosshairs" size="large" verticalAlign="middle" />
      //   //     <List.Content>
      //   //       <List.Header as="a">Firepower</List.Header>
      //   //     </List.Content>
      //   //   </List.Item>
      //   // </List>
    );
  }
}

export default WatchListNote;
