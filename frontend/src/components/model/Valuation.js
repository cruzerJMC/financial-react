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

class Valuation extends Component {
  render() {
    // console.log("Valuation Cont", this.props, typeof this.props);
    return (
      <Segment inverted>
        <Message color="blue" size="tiny">
          <Grid columns="equal" textAlign="center">
            {/* <Message color="blue"> */}
            <Grid.Row>
              <Grid.Column>test</Grid.Column>
              <Grid.Column>test</Grid.Column>
            </Grid.Row>
            {/* </Message> */}
          </Grid>
        </Message>
      </Segment>
    );
  }
}

export default Valuation;
