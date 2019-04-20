import React, { Component } from "react";

import { Image, Card, Statistic, Segment } from "semantic-ui-react";

class CompanyCard extends Component {
  render() {
    // console.log("CompanyCars", this.props);
    return (
      <div>
        {/* <Segment attached="top"> */}
        <Card centered>
          <Image src={this.props.image} size="medium" circular />
          <Card.Content>
            <Card.Header>
              {/* <h1>{this.props.companyName}</h1> */}
              <Statistic horizontal color="green" size="mini">
                <Statistic.Value>PRICE:${this.props.Price}</Statistic.Value>
              </Statistic>
            </Card.Header>
          </Card.Content>
        </Card>
        {/* </Segment> */}
        {/* <Segment attached="bottom">
          <div class="card text-white bg-primary text-xs-center">
            <div class="card-body">
              <blockquote class="card-bodyquote">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer>
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </Segment> */}
        {/* <Card.Content extra>
            <Statistic horizontal color="green" size="mini">
              <Statistic.Value>PRICE:${this.props.Price}</Statistic.Value>
            </Statistic>
          </Card.Content> */}
      </div>
    );
  }
}

export default CompanyCard;
