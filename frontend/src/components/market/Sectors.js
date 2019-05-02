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
          <Table.Row>
            <Table.HeaderCell textAlign="center" inverted colSpan="3">
              {/* <Message color="violet"> Sector Performance </Message> */}
              {/* <strong style={{ color: "#F59900" }}>Sector Performance </strong> */}
              <strong style={{ color: "#D3D3D3" }}>Sector Performance </strong>
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
                Sector
              </Message>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Message color="black" style={{ color: "#8A2BE2" }}>
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
