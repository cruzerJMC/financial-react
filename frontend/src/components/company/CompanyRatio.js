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

const CompanyRatio = props => {
  console.log("CompanyRatio Props", props, typeof props);

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
   {/* {Object.values(props.valuation).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return (  */}
      <List  celled horizontal>
      <List.Item as='a'>{parseFloat(props.enterpriseValueMultiple).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.priceEarningsRatio).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.priceEarningsToGrowthRatio).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.priceCashFlowRatio).toFixed(2)+'x'}</List.Item>
      <List.Item as='a'>{parseFloat(props.priceSalesRatio).toFixed(2)+'x'}</List.Item>
       <List.Item as='a'>{parseFloat(props.priceBookValueRatio).toFixed(2)+'x'}</List.Item> 
       </List>
   {/* )})} */}
   </Message>
   <Message color="black">
   <Message.Header>Profitability Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>
    {/* {Object.values(props.profitability).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return (  */}
      <List celled  horizontal>
      <List.Item as='a'>{parseFloat(props.returnOnAssets).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.returnOnCapitalEmployed).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.returnOnEquity).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.grossProfitMargin).toFixed(2)+'x'}</List.Item>
      <List.Item as='a'>{parseFloat(props.operatingProfitMargin).toFixed(2)+'x'}</List.Item>
       <List.Item as='a'>{parseFloat(props.netProfitMargin).toFixed(2)+'x'}</List.Item> 
       </List>
   {/* )})} */}
 </Message>
 <Message color="black">
 <Message.Header>Cashflow Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>
    {/* {Object.values(props.cashflow).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return (  */}
      <List celled  horizontal>
      
      <List.Item as='a'>{parseFloat(props.operatingCashFlowSalesRatio).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.dividendpaidAndCapexCoverageRatios).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.cashFlowCoverageRatios).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.capitalExpenditureCoverageRatios).toFixed(2)+'x'}</List.Item>
       </List>
   {/* )})} */}
 </Message>
 <Message color="black">
 <Message.Header>Financing Metrics</Message.Header>
  <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
      </Header>
    </Divider>

    {/* {Object.values(props.debt).map(item =>{ 
     console.log("TYPE", typeof item[0])
     return (  */}
      <List celled  horizontal>
      <List.Item as='a'>{parseFloat(props.cashFlowToDebtRatio).toFixed(2)+'x'+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.interestCoverageRatio).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.companyEquityMultiplier).toFixed(2)+'x'}</List.Item> 
      <List.Item as='a'>{parseFloat(props.debtEquityRatio).toFixed(2)+'x'}</List.Item>
      <List.Item as='a'>{parseFloat(props.debtRatio).toFixed(2)+'x'}</List.Item>
       <List.Item as='a'>{parseFloat(props.totalDebtToCapitalization).toFixed(2)+'x'}</List.Item> 
       </List>
   {/* )})} */}
 </Message>
  
   {/* </List> */}
   {/* </Message> */}
       
  
   
  </Segment>
  
  );
};

export default CompanyRatio;
