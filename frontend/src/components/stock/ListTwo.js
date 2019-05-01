import React, { Component } from "react";

import {
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Responsive,
  Table,
  Container,
  List,
  Tab
} from "semantic-ui-react";
import Stock from "./Stock";

class ListTwo extends Component {
  render() {
    return (
      // prettier-ignore
      <div>
        <Table inverted striped>
        <Table.Header>
        
        <Table.Row>
        <Table.HeaderCell textAlign="center" colSpan='2'>Stock List</Table.HeaderCell>
      </Table.Row>
     
          <Table.Row>
          <Table.HeaderCell colSpan='1' textAlign="center"><Message color="black"> <strong style={{ color: "#8A2BE2" }}>Ticker</strong> </Message></Table.HeaderCell>
            <Table.HeaderCell colSpan='1' textAlign="center"><Message color="black"> <strong style={{ color: "#8A2BE2" }}>Price</strong> </Message></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body> 
        {this.props.stocks.map((stock, index) => {
          return <Stock num={index} key={stock.symbol} {...stock} />;
        })}
       {/* </Grid> */}
         </Table.Body>
         </Table>
      </div>
    );
  }
}

export default ListTwo;
