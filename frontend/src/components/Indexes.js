import React, { Component } from "react";
import { Table, Segment, Message } from "semantic-ui-react";
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
    // console.log("index", this.state);
    // const indexArray = Object.value(this.state.indexes);
    return (
      <Table striped inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" inverted colSpan="6">
              {/* <Message color="violet"> Sector Performance </Message> */}
              {/* <strong style={{ color: "#F59900" }}>Sector Performance </strong> */}
              <strong style={{ color: "#D3D3D3" }}>Major Indexes </strong>
            </Table.HeaderCell>
          </Table.Row>

          <Table.Row textAlign="center">
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
                #
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
                Index
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
                Ticker
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
                Price
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
                Change
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
                Updated
              </Message>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.indexes.map((item, index) => {
            return <IndexItem key={item.ticker} num={index} {...item} />;
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default Indexes;
