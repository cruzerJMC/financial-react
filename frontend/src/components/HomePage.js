import React, { Component } from "react";

import {
  Menu,
  Icon,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

import TickerSideCard from "./TickerSideCard";
// import TickerDash from "./TickerDash";
import TickerList from "./TickerList";
import Search from "./Search";
import WatchList from "./WatchList";
import PopUp from "./PopUp";
import TickerDetails from "./TickerDetails";

class HomePage extends Component {
  state = {
    inputValue: "",
    showPopup: false,
    tickers: [],
    clickedTicker: null,
    response: "",
    post: "",
    metrics: [],
    watchList: [],
    fins: [],
    favorites: [],
    userFavs: [],
    detailsPage: false,
    clickedFavorite: null,
    notes: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/tickers")
      .then(response => {
        return response.json();
      })
      .then(tickers => {
        return this.setState({
          tickers: tickers
        });
      });

    // fetch("http://localhost:5000/api/notes")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(notes => {
    //     return this.setState({ notes: notes });
    //   });

    const setWatchList = async () => {
      this.setState({ watchList: this.props.currentUser.favorites });
    };

    setWatchList();
  }

  handleChange = event => {
    // console.log("Changing")
    // console.log (event.target.name)
    this.setState({
      inputValue: event.target.value
    });
  };

  filterTickers = () =>
    this.state.tickers.filter(item => {
      return (
        item.name.toLowerCase().includes(this.state.inputValue.toLowerCase()) ||
        item.ticker
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.exchange
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.sector
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase()) ||
        item.industry
          .toLowerCase()
          .includes(this.state.inputValue.toLowerCase())
      );
    });

  toggleDetails = () => {
    console.log("dhowing Details page");
    this.setState({
      detailsPage: !this.state.detailsPage
    });
  };

  showDetails = itemId => {
    const clickedTicker = this.state.tickers.find(item => item.id === itemId);
    // console.log("showing", clickedTicker);
    this.setState({
      clickedTicker: clickedTicker
    });
  };

  togglePopup = itemId => {
    const clickedFavorite = this.state.watchList.find(
      item => item.id === itemId
    );
    console.log("showing Favorite", clickedFavorite);
    this.setState({
      showPopup: !this.state.showPopup,
      clickedFavorite: clickedFavorite
    });
  };

  addNewNoteToNotes = newNote => {
    this.setState({
      notes: [...this.state.notes, newNote]
    });
  };

  handleMetricPost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/metrics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      metrics: body
    });
  };
  handleFinPost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/financials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      fins: body
    });
  };

  // fetchUserWishlist = async () => {
  //   const response = await fetch(`http://localhost:5000/api/usersfav`);
  //   console.log("Respons", response);
  //   const json = await response.json();
  //   console.log("JSON", json);
  // };

  addToWishlist = itemId => {
    const userId = this.props.currentUser.id;
    const foundTicker = this.state.tickers.find(item => item.id === itemId);
    console.log("firing", foundTicker);
    const preventDoubles = this.state.watchlist.find(
      item => item.id === itemId
    );
    if (!preventDoubles) {
      this.setState({
        watchlist: [...this.state.watchlist, foundTicker]
      });
    }
    fetch("http://localhost:5000/api/user_favorite/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        foundTicker,
        userId
      })
    });
  };
  render() {
    console.log("HomePage", this.state);

    return (
      <div>
        {!this.state.detailsPage ? (
          <div>
            <Search
              handleChange={this.handleChange}
              inputValue={this.state.inputValue}
            />
            <Segment responsive raised>
              <Grid color="black" columns={2} textAlign="center">
                <Grid.Row color="black">
                  <Grid.Column width={11} color="black" floated="left">
                    <TickerList
                      tickers={this.filterTickers()}
                      showDetails={this.showDetails}
                      handleMetricPost={this.handleMetricPost}
                      addToWishlist={this.addToWishlist}
                      handleFinPost={this.handleFinPost}
                      // filterFavorites={this.filterFavorites()}
                    />
                  </Grid.Column>
                  <Grid.Column width={5} color="black">
                    <TickerSideCard
                      toggleDetails={this.toggleDetails}
                      clickedTicker={this.state.clickedTicker}
                      metrics={this.state.metrics}
                    />
                    <Divider inverted horizontal>
                      <Header inverted as="h4">
                        <Icon inverted name="tag" />
                        Watch List
                      </Header>
                    </Divider>
                    <WatchList
                      togglePopup={this.togglePopup}
                      watchlist={this.state.watchList}
                    />
                  </Grid.Column>
                  {/* </Segment> */}
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        ) : (
          <div>
            <TickerDetails
              text="Close Me"
              closeDetails={this.toggleDetails}
              fins={this.state.fins}
              metrics={this.state.metrics}
            />
          </div>
        )}
        {this.state.showPopup ? (
          <PopUp
            text="Close Me"
            closePopup={this.togglePopup}
            clickedFavorite={this.state.clickedFavorite}
            addNewNoteToNotes={this.addNewNoteToNotes}
          />
        ) : null}
      </div>
    );
  }
}

export default HomePage;
