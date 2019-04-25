import React, { Component } from "react";
import { Menu, Table, Segment } from "semantic-ui-react";
import Financials from "./Financials";
import IncomeList from "./IncomeList";
import CashflowList from "./CashflowList";
import BalanceList from "./BalanceList";
import ISList from "./annual/ISList";
import CFList from "./annual/CFList";
import BSList from "./annual/BSList";

export default class CompanyMenu extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => {
    console.log("tabling", name);
    this.setState({ activeItem: name });
    // this.switchFunc(name);
  };
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
    } else {
      return this.renderSummary();
    }
  };

  renderSummary = () => {
    return <Financials fins={this.props.fins} />;
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
  renderIncome = () => {
    return (
      <IncomeList
        income={this.props.income.filter((item, index) => {
          return index > 26;
        })}
        labels={Object.keys(this.props.income[0])}
        // lablels={this.props.income.map(item => {
        //   const key = Object.keys(item);
        //   return key[0];
        // })}
      />
    );
    // const incomeArray = this.props.income.reverse();
    // return incomeArray.map((item, index) => {
    //   return <IncomeList key={index} {...item} />;
    // });
  };
  // renderRatio = () => {
  //   return "Ratios";
  // };
  renderBalance = () => {
    return (
      <BalanceList
        balance={this.props.balance.filter((item, index) => {
          return index > 26;
        })}
        labels={Object.keys(this.props.balance[0])}
        // lablels={this.props.income.map(item => {
        //   const key = Object.keys(item);
        //   return key[0];
        // })}
      />
    );
  };
  renderCashflow = () => {
    return (
      <CashflowList
        cashflow={this.props.cashflow.filter((item, index) => {
          return index > 26;
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

    return (
      <div>
        <Menu>
          <Menu.Item
            name="summary"
            active={activeItem === "summary"}
            onClick={this.handleItemClick}
          >
            Summary
          </Menu.Item>
          <Menu.Item
            name="incomeYR"
            active={activeItem === "incomeYR"}
            onClick={this.handleItemClick}
          >
            Income Statement (YR)
          </Menu.Item>
          <Menu.Item
            inverted
            name="cashflowYR"
            active={activeItem === "cashflowYR"}
            onClick={this.handleItemClick}
          >
            Cashflow Statement (YR)
          </Menu.Item>
          <Menu.Item
            name="balanceYR"
            active={activeItem === "balanceYR"}
            onClick={this.handleItemClick}
          >
            Balance Sheet (YR)
          </Menu.Item>
          <Menu.Item
            name="income"
            active={activeItem === "income"}
            onClick={this.handleItemClick}
          >
            Income Statement (QTR)
          </Menu.Item>
          <Menu.Item
            name="balance"
            active={activeItem === "balance"}
            onClick={this.handleItemClick}
          >
            Balance Sheet (QTR)
          </Menu.Item>

          <Menu.Item
            name="cashflow"
            active={activeItem === "cashflow"}
            onClick={this.handleItemClick}
          >
            Cashflow Statement (QTR)
          </Menu.Item>
          {/* <Menu.Item
            name="ratio"
            active={activeItem === "ratio"}
            onClick={this.handleItemClick}
          >
            Ratios
          </Menu.Item> */}
        </Menu>

        <Segment>{this.renderToggle()}</Segment>
      </div>
    );
  }
}
