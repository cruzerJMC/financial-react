import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
import HomePage from "./components/HomePage";
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";

class App extends Component {
  state = {
    // consider moving this down
    currentUser: {},
    users: [],
    signup: false,
    login: true,
    username: "",
    password: "",
    loggedIn: false
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/users")
      .then(response => response.json())
      .then(userList =>
        this.setState({
          users: userList
        })
      );
    this.setState({
      currentUser: JSON.parse(sessionStorage.getItem("foundUser"))
    });
  }

  handleLogIn = event => {
    console.log("firing");
    // console.log('users', event.target.value)
    event.preventDefault();
    // if(this.state.users.length > 0 ){
    // let foundUser = this.state.users.find(user => user.username === this.state.logEmail && user.password === this.state.logPassword)
    const foundUser = this.state.users.find(user => {
      return (
        user.email === this.state.username &&
        user.password === this.state.password
      );
    });
    //         console.log("foundUser", foundUser)
    if (foundUser !== undefined) {
      this.setState({
        currentUser: foundUser,
        loggedIn: true
      });
      sessionStorage.setItem("foundUser", JSON.stringify(foundUser));
    } else {
      alert("Invalid Password or Username");
    }
  };

  handleChange = event => {
    // console.log("typing")
    //  console.log(event.target)
    //  console.log(event.target.value)

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  switch = word => {
    // console.log("switching", word, this.state.signup, this.state.login )
    if (word === "signup") {
      return this.setState({
        signup: true,
        login: false
      });
    } else {
      return this.setState({
        signup: false,
        login: true
      });
    }
  };

  renderHeader = () => {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <Header color={"violet"} inverted as="h1">
            Fin-Analyze Dashboard
          </Header>
          <HomePage />
        </div>
      </div>
    );
  };

  render() {
    // console.log("UserContainer", this.state);
    const logIn = (
      <div>
        {/* emailInput={this.state.emailInput}  passwordInput={this.state.passwordInput} confirmInput={this.state.confirmInput} firstInput={this.state.firstInput} lastInput={this.state.lastInput}/> : null} */}
        {this.state.signup ? <Signup /> : null}
        {this.state.login ? (
          <Login
            handleSubmit={this.handleLogIn}
            handleChange={this.handleChange}
            username={this.state.username}
            password={this.state.password}
          />
        ) : null}

        <Button.Group>
          <Button
            fluid
            size="large"
            id="signupButton"
            onClick={() => this.switch("signup")}
            className={this.state.signup ? "yellow" : "blue"}
          >
            Sign Up
          </Button>
          <Button.Or />
          <Button
            fluid
            size="large"
            id="loginButton"
            onClick={() => this.switch("login")}
            className={this.state.login ? "yellow" : "blue"}
          >
            {" "}
            Login
          </Button>
        </Button.Group>
      </div>
    );
    return this.state.loggedIn ? (
      <HomePage currentUser={this.state.currentUser} />
    ) : (
      logIn
    );
  }

  // render() {
  //   return (
  //     <div className="ui raised segment">
  //       <div className="ui segment violet inverted">
  //         <Header color={"violet"} inverted as="h1">
  //           Fin-Analyze Dashboard
  //         </Header>
  //         <HomePage />
  //       </div>
  //     </div>
  //   );
  // }
}

export default App;
