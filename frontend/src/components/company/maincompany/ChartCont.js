import React, { Component } from "react";
import {
  Input,
  Segment,
  Button,
  Grid,
  Image,
  List,
  Message,
  Header,
  Table,
  Item
} from "semantic-ui-react";
import MCRev from "./MCRev";
import MCEbitda from "./MCEbitda";

class ChartCont extends Component {
  render() {
    // console.log("CC Cont", this.props, typeof this.props);
    return (
      <Segment inverted>
        <Message color="black" size="tiny">
          <Grid columns="equal" textAlign="center">
            {/* <Message color="blue"> */}
            <Grid.Row>
              <Grid.Column>
                {this.props.comps.map((item, index) => {
                  // console.log("Ratios", item);
                  // console.log("ITEM", item[1]);
                  return <MCRev key={index} {...item} />;
                })}
              </Grid.Column>
              <Grid.Column>
                {" "}
                {this.props.comps.map((item, index) => {
                  // console.log("Ratios", item);
                  // console.log("ITEM", item[1]);
                  return <MCEbitda key={index} {...item} />;
                })}
              </Grid.Column>
            </Grid.Row>
            {/* </Message> */}
          </Grid>
        </Message>
      </Segment>
    );
  }
}

export default ChartCont;
