import React, { Component } from "react";
import { List, Message } from "semantic-ui-react";

import WatchListItem from "./WatchListItem";

class WatchList extends Component {
  renderWatchList = () => {
    if (this.props.watchlist === undefined) {
      return "NO WATCH LIST";
    } else {
      return (
        <List divided relaxed>
          {this.props.watchlist.map(object => {
            return (
              <WatchListItem
                key={object.id}
                {...object}
                togglePopup={this.props.togglePopup}
                metrics={this.props.metrics}
              />
            );
          })}
        </List>
      );
    }
  };

  render() {
    console.log("WATCH", this.props);
    return (
      <div>
        <Message color="blue">{this.renderWatchList()}</Message>
      </div>
    );
  }
}

export default WatchList;
