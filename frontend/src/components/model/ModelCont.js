import React, { Component } from "react";

import {
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Responsive,
  Table,
  Container,
  List,
  Tab
} from "semantic-ui-react";
// import ModelItem from "./ModelItem";
import ModelRow from "./ModelRow";
import ModelFRow from "./ModelFRow";

class ModelCont extends Component {
  render() {
    console.log("ModelCont", this.props);

    const labels = [
      "Revenue",
      "EBITDA",
      "EBITDA Margin",
      "Operating Cashflow",
      "Cash Conversion Ratio",
      "Free Cashflow",
      "Capex % OCF"
    ];

    return (
      // prettier-ignore
      // <div>
      <Table inverted striped>
      
        <Table.Header>
        
        <Table.Row>
        <Table.HeaderCell textAlign="center" colSpan='9' ><Message color="violet">Model </Message></Table.HeaderCell>
      </Table.Row> 
     
          <Table.Row>
            <Table.HeaderCell colSpan='1' >Item</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2014A</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2015A</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2016A</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2017A</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2018A</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2019E</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2020E</Table.HeaderCell>
            <Table.HeaderCell  textAlign="center"  colSpan='1' >2021E</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body> 
        {/* <Table.Row> */}
       <Table.Cell>
        {labels.map((item, index) => {
        return <Message color="blue"><Table.Row><strong style={{color:"#6666ff"}}>{item}</strong> </Table.Row></Message>
        })}
       </Table.Cell>
      <Table.Cell textAlign="center">
        {this.props.one.map((item, index) => {
        return <ModelRow key={index} {...item}/>;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.two.map((item, index) => {
        return <ModelRow key={index} {...item}/>;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.three.map((item, index) => {
        return <ModelRow key={index} {...item}/>;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.four.map((item, index) => {
        return <ModelRow key={index} {...item}/>;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.five.map((item, index) => {
        return <ModelRow key={index} {...item}/>;
        })}
       </Table.Cell>
       
       <Table.Cell>
        {this.props.five.map((item, index) => {
        return <ModelFRow key={index} {...item} getRevFY1={this.props.getRevFY1}  ocfConv={parseFloat(this.props.yr1Cash)}  EMargin={parseInt(this.props.yr1Margin)} EGrowth={parseInt(this.props.yr1Growth)/100} ECapex ={parseFloat(this.props.yr1CapEx)/100}
        />;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.five.map((item, index) => {
        return <ModelFRow key={index} {...item}  ocfConv={parseFloat(this.props.yr2Cash)} numRev={item.numRev *(1+(parseInt(this.props.yr1Growth)/100))} EMargin={parseInt(this.props.yr2Margin)} EGrowth={parseInt(this.props.yr2Growth)/100} ECapex ={parseFloat(this.props.yr2CapEx)/100}
        />;
        })}
       </Table.Cell>
       <Table.Cell>
        {this.props.five.map((item, index) => {
        return <ModelFRow key={index} {...item}  ocfConv={parseFloat(this.props.yr3Cash)} numRev={((item.numRev *(1+(parseInt(this.props.yr1Growth)/100)))* (1+(parseInt(this.props.yr2Growth)/100)))} EMargin={parseInt(this.props.yr3Margin)} EGrowth={parseInt(this.props.yr3Growth)/100} ECapex ={parseFloat(this.props.yr3CapEx)/100}
        />;
        })}
       </Table.Cell>
       {/* </Table.Row> */}
         </Table.Body>
         
         </Table>
    );
  }
}

export default ModelCont;
