import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

import "../../App.css";

import NoteContainer from "./NoteContainer";
// import Metrics from "./Metrics";
// import Financials from "./Financials";
// import EbitdaChart from "./EbitdaChart";
// import PriceChart from "./PriceChart";

class PopUp extends Component {
  render() {
    console.log("Popup", this.props);
    return (
      <div>
        <div className="popup">
          <div className="popup_inner">
            <div>
              <Segment inverted>
                <Button onClick={this.props.closePopup}>close me</Button>
                <br />
                <br />
                <NoteContainer
                  user={this.props.user}
                  addNewNoteToNotes={this.props.addNewNoteToNotes}
                  clickedFavorite={this.props.clickedFavorite}
                />
              </Segment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUp;
