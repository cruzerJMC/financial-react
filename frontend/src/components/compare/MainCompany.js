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

class MainCompany extends Component {
  // handleRender = () => {
  //   if (!this.props === undefined) {
  //     return <Message color="blue">No Company Selected</Message>;
  //   } else {
  //     return (
  //       <Segment attached="top">
  //         <Grid columns="2" divided>
  //           <Grid.Row>
  //             <Grid.Column width={4}>
  //               <Image src={this.props.image} />
  //             </Grid.Column>
  //             <Grid.Column width={6}>
  //               <Message color="blue">
  //                 <Header as="a">{this.props.companyName}</Header>
  //               </Message>
  //             </Grid.Column>
  //           </Grid.Row>
  //         </Grid>
  //       </Segment>
  //     );
  //   }
  // };
  render() {
    console.log("MainCompany", this.props, typeof this.props.revenue);
    return (
      // <Message color="blue">
      <Grid columns="2" divided>
        <Grid.Row>
          <Grid.Column verticalAlign="middle" width={4}>
            <Image size="tiny'" centered boardered src={this.props.image} />
          </Grid.Column>
          <Grid.Column width={8}>
            <Table celled inverted selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell textAlign="center" colSpan="7">
                    <Message color="violet"> {this.props.name} </Message>
                  </Table.HeaderCell>
                </Table.Row>

                <Table.Row>
                  <Table.HeaderCell>Item</Table.HeaderCell>
                  <Table.HeaderCell>2014</Table.HeaderCell>
                  <Table.HeaderCell>2015</Table.HeaderCell>
                  <Table.HeaderCell>2016</Table.HeaderCell>
                  <Table.HeaderCell>2017</Table.HeaderCell>
                  <Table.HeaderCell>2018</Table.HeaderCell>
                  <Table.HeaderCell>TTM</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Revenue</Table.Cell>
                  {/* {this.props.revenue.map(rev => {
                      console.log("Rev", rev);
                      // return (
                      //   <div>
                      //     <Table.Cell textAlign="center">
                      //       {Object.values(rev)}
                      //     </Table.Cell>
                      //   </div>
                      // );
                    })} */}
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      // </Message>
    );
  }
}

export default MainCompany;
