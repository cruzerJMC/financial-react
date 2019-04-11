import React, { Component } from "react";
import { List, Message, Divider, Segment, Grid } from "semantic-ui-react";
// import Marquee from "react-smooth-marquee";
import IndexItem from "./IndexItem";
class Indexes extends Component {
  state = {
    indexes: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/indexes")
      .then(response => {
        return response.json();
      })
      .then(indexes => {
        return this.setState({
          indexes: Object.values(indexes)
        });
      });
  }

  // renderIndexItem = async () => {
  //   const indexArray = await this.state.indexes.map(item => {
  //     return <IndexItem key={item.ticker} {...item} />;
  //   });
  //   return indexArray;
  // };
  render() {
    console.log("index", this.state);
    // const indexArray = Object.value(this.state.indexes);
    return (
      <div>
        <List horizontal size="mini">
          {this.state.indexes.map(item => {
            return <IndexItem key={item.ticker} {...item} />;
          })}
        </List>
      </div>
    );
  }
}

export default Indexes;
