import React, { Component } from "react";
import { Menu, Table, Segment } from "semantic-ui-react";
import Financials from "./Financials";
import IncomeList from "./IncomeList";
import CashflowList from "./CashflowList";
import BalanceList from "./BalanceList";
import ISList from "./annual/ISList";
import CFList from "./annual/CFList";
import BSList from "./annual/BSList";
import Metrics from "./Metrics";
import ModelPage from "./model/ModelPage";

export default class CompanyMenu extends Component {
  state = {
    activeItem: ""
    // historicals: []
  };

  handleItemClick = (e, { name }) => {
    console.log("tabling", name);
    this.setState({ activeItem: name });
    // this.switchFunc(name);
  };

  // handleForcastFetch = async () => {
  //   // e.preventDefault();
  //   const response = await fetch("http://localhost:5000/api/historicals", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ post: this.props.clickedTicker.ticker })
  //   });
  //   const body = await response.json();
  //   // console.log(body);
  //   this.setState({
  //     historicals: body
  //   });
  // };
  renderToggle = () => {
    // if (this.state.activeItem === "ratio") {
    //   return this.renderRatio();
    // }
    if (this.state.activeItem === "income") {
      return this.renderIncome();
    }
    if (this.state.activeItem === "incomeYR") {
      return this.renderAnnualIncome();
    }
    if (this.state.activeItem === "cashflowYR") {
      return this.renderAnnualCF();
    }
    if (this.state.activeItem === "balanceYR") {
      return this.renderAnnualBS();
    }
    if (this.state.activeItem === "balance") {
      return this.renderBalance();
    }
    if (this.state.activeItem === "cashflow") {
      return this.renderCashflow();
    }
    if (this.state.activeItem === "model") {
      return this.renderModelPage();
    } else {
      return this.renderSummary();
    }
  };

  renderSummary = () => {
    return (
      <div>
        <Financials fins={this.props.fins} />
        <Metrics metrics={this.props.metrics} />
      </div>
    );
  };

  renderAnnualIncome = () => {
    return <ISList income={this.props.annualIS} />;
  };
  renderAnnualCF = () => {
    return <CFList cashflow={this.props.annualCF} />;
  };
  renderAnnualBS = () => {
    return <BSList balance={this.props.annualBS} />;
  };

  // renderModel = async () => {
  //   await this.handleForcastFetch();
  //   await this.renderModelPage();
  // };

  renderModelPage = () => {
    return <ModelPage historicals={[this.props.historicals]} />;
  };

  renderBalance = () => {
    return (
      <BalanceList
        balance={this.props.balance.filter((item, index) => {
          return index > 30;
        })}
        labels={Object.keys(this.props.balance[0])}
      />
    );
  };
  renderCashflow = () => {
    return (
      <CashflowList
        cashflow={this.props.cashflow.filter((item, index) => {
          return index > 30;
        })}
        labels={Object.keys(this.props.cashflow[0])}
        // lablels={this.props.income.map(item => {
        //   const key = Object.keys(item);
        //   return key[0];
        // })}
      />
    );
  };
  render() {
    const { activeItem } = this.state;

    // console.log("CompanyMenu", this.props);

    return (
      // <div>
      <Segment inverted>
        <Menu>
          <Menu.Item
            name="summary"
            active={activeItem === "summary"}
            onClick={this.handleItemClick}
          >
            <strong> Summary</strong>
          </Menu.Item>
          <Menu.Item
            name="incomeYR"
            active={activeItem === "incomeYR"}
            onClick={this.handleItemClick}
          >
            <strong> Income Statement (Annual)</strong>
          </Menu.Item>

          <Menu.Item
            name="balanceYR"
            active={activeItem === "balanceYR"}
            onClick={this.handleItemClick}
          >
            <strong> Balance Sheet (Annual)</strong>
          </Menu.Item>
          <Menu.Item
            inverted
            name="cashflowYR"
            active={activeItem === "cashflowYR"}
            onClick={this.handleItemClick}
          >
            <strong> Cashflow Statement (Annual)</strong>
          </Menu.Item>
          <Menu.Item
            name="income"
            active={activeItem === "income"}
            onClick={this.handleItemClick}
          >
            <strong>Income Statement (QTR)</strong>
          </Menu.Item>
          <Menu.Item
            name="balance"
            active={activeItem === "balance"}
            onClick={this.handleItemClick}
          >
            <strong> Balance Sheet (QTR) </strong>
          </Menu.Item>

          <Menu.Item
            name="cashflow"
            active={activeItem === "cashflow"}
            onClick={this.handleItemClick}
          >
            <strong> Cashflow Statement (QTR) </strong>
          </Menu.Item>
          <Menu.Item
            name="model"
            active={activeItem === "model"}
            onClick={this.handleItemClick}
          >
            <strong> Financial Models </strong>
          </Menu.Item>
        </Menu>

        <Segment>{this.renderToggle()}</Segment>
      </Segment>
      // </div>
    );
  }
}
