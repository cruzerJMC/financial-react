import React from "react";

import {
  Divider,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Table
} from "semantic-ui-react";

const Financials = props => {
  // const margin1 = props.fins[4].ebitdamargin;
  // const margin2 = props.fins[3].ebitdamargin;
  // const margin3 = props.fins[2].ebitdamargin;
  // const margin4 = props.fins[1].ebitdamargin;
  // const margin5 = props.fins[0].ebitdamargin;
  // const margin11 = margin1.slice(0, 5);
  // const margin21 = margin2.slice(0, 5);
  // const margin31 = margin3.slice(0, 5);
  // const margin41 = margin4.slice(0, 5);
  // const margin51 = margin5.slice(0, 5);
  // console.log("Financials", props);
  return (
    <div>
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center" colSpan="6">
              Financials
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell textAlign="center">$(000's)</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              {props.fins[4].date}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              {props.fins[3].date}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              {props.fins[2].date}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              {props.fins[1].date}
            </Table.HeaderCell>
            <Table.HeaderCell textAlign="center">
              {props.fins[0].date}
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Revenue</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[4].revenue}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[3].revenue}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[2].revenue}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[1].revenue}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[0].revenue}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>EBITDA</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[4].ebitda}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[3].ebitda}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[2].ebitda}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[1].ebitda}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[0].ebitda}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>EBITDA Margin(%)</Table.Cell>
            <Table.Cell textAlign="center">
              {props.fins[4].ebitdaMargin}%
            </Table.Cell>
            <Table.Cell textAlign="center">
              {props.fins[3].ebitdaMargin}%
            </Table.Cell>
            <Table.Cell textAlign="center">
              {props.fins[2].ebitdaMargin}%
            </Table.Cell>
            <Table.Cell textAlign="center">
              {props.fins[1].ebitdaMargin}%
            </Table.Cell>
            <Table.Cell textAlign="center">
              {props.fins[0].ebitdaMargin}%
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>EBIT</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[4].ebit}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[3].ebit}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[2].ebit}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[1].ebit}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[0].ebit}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>EBIT Margin(%)</Table.Cell>
            <Table.Cell textAlign="center">
              {props.fins[4].ebitMargin}%
            </Table.Cell>
            <Table.Cell textAlign="center">
              {props.fins[3].ebitMargin}%
            </Table.Cell>
            <Table.Cell textAlign="center">
              {props.fins[2].ebitMargin}%
            </Table.Cell>
            <Table.Cell textAlign="center">
              {props.fins[1].ebitMargin}%
            </Table.Cell>
            <Table.Cell textAlign="center">
              {props.fins[0].ebitMargin}%
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Net Income</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[4].ni}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[3].ni}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[2].ni}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[1].ni}</Table.Cell>
            <Table.Cell textAlign="center">{props.fins[0].ni}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>EPS</Table.Cell>
            <Table.Cell textAlign="center">${props.fins[4].eps}</Table.Cell>
            <Table.Cell textAlign="center">${props.fins[3].eps}</Table.Cell>
            <Table.Cell textAlign="center">${props.fins[2].eps}</Table.Cell>
            <Table.Cell textAlign="center">${props.fins[1].eps}</Table.Cell>
            <Table.Cell textAlign="center">${props.fins[0].eps}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default Financials;
