import React, { Component } from "react";
import { Table, Segment, Message } from "semantic-ui-react";
// // import Marquee from "react-smooth-marquee";
import Sector from "./Sector";

class Sectors extends Component {
  state = {
    sectors: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/sectors")
      .then(response => {
        return response.json();
      })
      .then(sectors => {
        return this.setState({
          sectors: Object.values(sectors)
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
          <Table.Row textAlign="center">
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#7FFF00" }}>
                #
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#7FFF00" }}>
                Sector
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#7FFF00" }}>
                Change
              </Message>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.sectors.map((item, index) => {
            return <Sector key={item.Name} num={index} {...item} />;
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default Sectors;
