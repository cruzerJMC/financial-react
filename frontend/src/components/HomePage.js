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
  Segment,
  Responsive,
  List
} from "semantic-ui-react";

import TickerSideCard from "./TickerSideCard";
import Indexes from "./Indexes";
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
    notes: [],
    profiles: [],
    income: [],
    ratio: [],
    cashflow: [],
    balance: [],
    annualIS: [],
    annualCF: []
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

    // const setArticles = async () => {
    //   let response = fetch("http://localhost:5000/api/notes");
    //   console.log("Response", response);
    // };

    // setArticles();
    fetch("http://localhost:5000/api/notes")
      .then(response => {
        return response.json();
      })
      .then(notes => {
        const userNotes = notes.filter(note => {
          return note.userId === this.props.currentUser.id;
        });
        return this.setState({ notes: userNotes });
      });

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
    // console.log("dhowing Details page");
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

  handleAnnualIncome = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/annual-income", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      annualIS: body
    });
  };
  handleAnnualCF = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/annual-cashflow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      annualCF: body
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

  handleIncomePost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/incomestatement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      income: body
    });
  };

  handleCashflowPost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/cashflow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      cashflow: body
    });
  };

  handleBalancePost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/balancesheet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      balance: body
    });
  };
  handleRatioPost = async () => {
    // e.preventDefault();
    const response = await fetch("http://localhost:5000/api/ratios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.clickedTicker.ticker })
    });
    const body = await response.json();
    // console.log(body);
    this.setState({
      ratio: body.financialRatios
    });
  };

  addToWatchList = itemId => {
    const userId = this.props.currentUser.id;
    const foundTicker = this.state.tickers.find(item => item.id === itemId);

    // console.log("firing Wishlist", foundTicker);
    const preventDoubles = this.state.watchList.find(
      item => item.companyId === itemId
    );
    // if (!preventDoubles) {
    //   this.setState({
    //     watchlist: [...this.state.watchList, foundTicker]
    //   });
    // }
    if (!preventDoubles) {
      fetch("http://localhost:5000/api/user_favorite/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          foundTicker,
          userId
        })
      })
        .then(response => response.json())
        .then(newFav => this.addNewItemToWatchList(newFav));
    }
  };

  addNewItemToWatchList = newFav => {
    this.setState({
      watchList: [...this.state.watchList, newFav]
    });
  };

  removeFromWatchList = favId => {
    const deleteFavorite = this.state.watchList.find(item => item.id === favId);
    console.log("delete Favorite", deleteFavorite);
    const updateWatchList = this.state.watchList.filter(item => {
      return item.id !== favId;
    });
    if (deleteFavorite) {
      this.setState({
        watchList: updateWatchList
      });
    }

    fetch(`http://localhost:5000/api/delete_favorite/${favId}`, {
      method: "DELETE"
    });
  };

  removeNote = noteId => {
    const deleteNote = this.state.notes.find(item => item.id === noteId);
    console.log("delete Note", deleteNote, noteId);
    const updateNote = this.state.notes.filter(item => {
      return item.id !== noteId;
    });
    if (deleteNote) {
      this.setState({
        notes: updateNote
      });

      fetch(`http://localhost:5000/api/delete_note/${noteId}`, {
        method: "DELETE"
      });
    }
  };
  render() {
    console.log("HomePage", this.state);

    return (
      <div>
        {!this.state.detailsPage ? (
          <div>
            <Segment attached="top" inverted>
              <Search
                handleChange={this.handleChange}
                inputValue={this.state.inputValue}
              />
            </Segment>
            {/* <Segment responsive raised> */}
            <Segment attached="bottom" inverted>
              <Grid color="black" columns={2} textAlign="center">
                <Grid.Row color="black">
                  {/* <Container> */}
                  <Grid.Column width={6} color="black" floated="left">
                    <TickerList
                      tickers={this.filterTickers()}
                      showDetails={this.showDetails}
                      handleMetricPost={this.handleMetricPost}
                      addToWatchList={this.addToWatchList}
                      handleFinPost={this.handleFinPost}
                      handleIncomePost={this.handleIncomePost}
                      handleRatioPost={this.handleRatioPost}
                      handleBalancePost={this.handleBalancePost}
                      handleCashflowPost={this.handleCashflowPost}
                      handleAnnualIncome={this.handleAnnualIncome}
                      handleAnnualCF={this.handleAnnualCF}
                      // filterFavorites={this.filterFavorites()}
                    />
                  </Grid.Column>

                  <Grid.Column width={5} color="black">
                    <div>
                      <TickerSideCard
                        toggleDetails={this.toggleDetails}
                        clickedTicker={this.state.clickedTicker}
                        metrics={this.state.metrics}
                      />
                    </div>

                    <Divider inverted horizontal>
                      <Header inverted as="h4">
                        <Icon inverted name="tag" />
                        Watch List
                      </Header>
                    </Divider>

                    <WatchList
                      togglePopup={this.togglePopup}
                      watchlist={this.state.watchList}
                      removeFromWatchList={this.removeFromWatchList}
                    />
                    <Divider inverted horizontal>
                      <Header inverted as="h4">
                        <Icon inverted name="tag" />
                        Major Indexes
                      </Header>
                    </Divider>

                    <Indexes />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        ) : (
          <div>
            <TickerDetails
              text="Close Me"
              notes={this.state.notes}
              closeDetails={this.toggleDetails}
              clickedTicker={this.state.clickedTicker}
              fins={this.state.fins}
              metrics={this.state.metrics}
              removeNote={this.removeNote}
              income={this.state.income}
              cashflow={this.state.cashflow}
              balance={this.state.balance}
              annualIS={this.state.annualIS}
              annualCF={this.state.annualCF}
            />
          </div>
        )}
        {this.state.showPopup ? (
          <PopUp
            text="Close Me"
            user={this.props.currentUser}
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
