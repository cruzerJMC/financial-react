import React, { Component } from "react";
import { List, Message } from "semantic-ui-react";

import WatchListItem from "./WatchListItem";

class WatchList extends Component {
  renderWatchList = () => {
    if (this.props.watchlist === undefined) {
      return "NO WATCH LIST";
    } else {
      return (
        <div>
          <List divided relaxed>
            {this.props.watchlist.map(object => {
              return (
                <WatchListItem
                  key={object.id}
                  {...object}
                  togglePopup={this.props.togglePopup}
                  metrics={this.props.metrics}
                  removeFromWatchList={this.props.removeFromWatchList}
                  notes={this.props.notes}
                  toggleDetails={this.props.toggleDetails}
                  removeNote={this.props.removeNote}
                />
              );
            })}
          </List>
        </div>
      );
    }
  };

  render() {
    console.log("WATCH", this.props);
    return <div>{this.renderWatchList()}</div>;
  }
}

export default WatchList;
