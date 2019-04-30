import React from "react";
import {
  Table,
  Dropdown,
  List,
  Message,
  Segment,
  Icon,
  Divider,
  Header,
  Grid
} from "semantic-ui-react";

const Company = props => {
  // console.log("Company Props", props, typeof props);

  // console.log("Liquidity", liquidity, typeof liquidity);
  // prettier-ignore
  return (
   <Segment inverted>
  {/* // <Message color="black"> */}
  {/* <List horizontal> */}
  <Message color="black">
  <Message.Header>Valuation Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>
   {Object.values(props.valuation).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return ( 
      <List  celled horizontal>
      <List.Item as='a'>{parseFloat(item.enterpriseValueMultiple).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.priceEarningsRatio).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.priceEarningsToGrowthRatio).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.priceCashFlowRatio).toFixed(2)+'x'}</List.Item>
      <List.Item as='a'>{parseFloat(item.priceSalesRatio).toFixed(2)+'x'}</List.Item>
       <List.Item as='a'>{parseFloat(item.priceBookValueRatio).toFixed(2)+'x'}</List.Item> 
       </List>
   )})}
   </Message>
   <Message color="black">
   <Message.Header>Profitability Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>
    {Object.values(props.profitability).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return ( 
      <List celled  horizontal>
      <List.Item as='a'>{parseFloat(item.returnOnAssets).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.returnOnCapitalEmployed).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.returnOnEquity).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.grossProfitMargin).toFixed(2)+'x'}</List.Item>
      <List.Item as='a'>{parseFloat(item.operatingProfitMargin).toFixed(2)+'x'}</List.Item>
       <List.Item as='a'>{parseFloat(item.netProfitMargin).toFixed(2)+'x'}</List.Item> 
       </List>
   )})}
 </Message>
 <Message color="black">
 <Message.Header>Cashflow Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>
    {Object.values(props.cashflow).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return ( 
      <List celled  horizontal>
      
      <List.Item as='a'>{parseFloat(item.operatingCashFlowSalesRatio).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.dividendpaidAndCapexCoverageRatios).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.cashFlowCoverageRatios).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.capitalExpenditureCoverageRatios).toFixed(2)+'x'}</List.Item>
       </List>
   )})}
 </Message>
 <Message color="black">
 <Message.Header>Financing Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>

    {Object.values(props.debt).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return ( 
      <List celled  horizontal>
      <List.Item as='a'>{parseFloat(item.cashFlowToDebtRatio).toFixed(2)+'x'+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.interestCoverageRatio).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.companyEquityMultiplier).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(item.debtEquityRatio).toFixed(2)+'x'}</List.Item>
      <List.Item as='a'>{parseFloat(item.debtRatio).toFixed(2)+'x'}</List.Item>
       <List.Item as='a'>{parseFloat(item.totalDebtToCapitalization).toFixed(2)+'x'}</List.Item> 
       </List>
   )})}
 </Message>
  
   {/* </List> */}
   {/* </Message> */}
       
  
   
  </Segment>
  
  );
};

export default Company;
