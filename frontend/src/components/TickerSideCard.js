import React, { Component } from "react";

import {
  Card,
  Image,
  Icon,
  Message,
  Divider,
  Header,
  Button,
  Input,
  Menu,
  Grid,
  Segment,
  Statistic,
  Label
} from "semantic-ui-react";

class TickerSideCard extends Component {
  renderSideCard = () => {
    if (!this.props.clickedTicker) {
      return <div>CLICK COMPANY</div>;
    } else {
      return (
        <div>
          {/* <Input fluid icon="search" placeholder="Search Company Ticker" /> */}

          <Message color="black" inverted>
            <Segment inverted>
              <Card fluid inverted>
                <Message color="blue">
                  <Card.Content color="black">
                    <Card.Header inverted>
                      <h1>{this.props.clickedTicker.name}</h1>
                    </Card.Header>
                    <Card.Meta inverted>
                      <h2>{this.props.metrics.ticker}</h2>
                    </Card.Meta>
                    <Card.Meta>
                      <h3>{this.props.clickedTicker.exchange}</h3>
                    </Card.Meta>
                  </Card.Content>

                  <Segment raised inverted>
                    <Grid columns={2}>
                      <Grid.Column>
                        <Statistic color="green" size="mini" inverted>
                          <Label as="a" color="violet" ribbon>
                            Enterprise Value
                          </Label>
                          <Statistic.Value>
                            ${this.props.metrics.ev}
                          </Statistic.Value>
                        </Statistic>
                      </Grid.Column>
                      <Grid.Column>
                        <Statistic color="green" size="mini" inverted>
                          <Label as="a" color="violet" ribbon="right">
                            Capitalization
                          </Label>
                          <Statistic.Value>
                            ${this.props.metrics.marketcap}
                          </Statistic.Value>
                        </Statistic>
                      </Grid.Column>
                    </Grid>
                  </Segment>
                </Message>
              </Card>
              <Button onClick={() => this.props.toggleDetails()}>
                Company Page
              </Button>
            </Segment>
          </Message>
        </div>
      );
    }
  };

  render() {
    // const { activeItem } = this.state;
    console.log("details", this.props);

    return (
      <div>
        <Divider horizontal inverted>
          <Header as="h4" inverted>
            <Icon name="bar chart" />
            Summary
          </Header>
        </Divider>
        {this.renderSideCard()}
      </div>
    );
  }
}

export default TickerSideCard;
