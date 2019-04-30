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

import MCHeader from "./maincompany/MCHeader";
import MCTable from "./maincompany/MCTable";
import CompanyRatio from "./CompanyRatio";

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
    console.log("MainCompany", this.props.ratios, typeof this.props.ratios);
    return (
      <div>
        <Segment attached="top" inverted>
          {this.props.comps.map((item, index) => {
            return <MCHeader key={index} {...item.profile} />;
          })}
        </Segment>
        <Segment attached="middle" inverted>
          {this.props.comps.map((item, index) => {
            return <MCTable key={index} {...item} />;
          })}
        </Segment>
        <Segment attached="bottom" inverted>
          {this.props.ratios.map((item, index) => {
            // console.log("Ratios", item);
            return <CompanyRatio key={index} {...item} />;
          })}
        </Segment>
      </div>
    );
  }
}

export default MainCompany;
