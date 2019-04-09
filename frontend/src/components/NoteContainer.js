import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

class NoteContainer extends Component {
  state = {
    title: "",
    body: ""
  };

  addNote = (event, favTicker) => {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    event.preventDefault();
    // console.log(event.target)
    fetch("http://localhost:5000/api/user_note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        favId: this.props.clickedFavorite.id,
        title: this.refs.title.value,
        content: this.refs.body.value
      })
    })
      .then(response => response.json())
      .then(newNote => this.props.addNewNoteToNotes(newNote))
      .then(
        this.setState({
          title: "",
          body: ""
        })
      );
  };

  handleInputChange = event => {
    // console.log("typing")
    //  console.log(event.target)
    //  console.log(event.target.value)

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };
  render() {
    // console.log("Form", this.props);
    return (
      <div>
        <form onSubmit={this.addNote}>
          {/* <input
            name="favId"
            value={this.props.clickedFavorite.id}
            ref="favId"
          /> */}
          <input
            name="title"
            placeholder="Enter Title"
            value={this.state.title}
            onChange={this.handleInputChange}
            ref="title"
          />
          <textArea
            name="body"
            placeholder="Write Note ...."
            value={this.state.body}
            onChange={this.handleInputChange}
            ref="body"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NoteContainer;
