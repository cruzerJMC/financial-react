import React from "react";
import Marquee from "react-smooth-marquee";
import {
  List,
  Message,
  Divider,
  Segment,
  Grid,
  Statistic
} from "semantic-ui-react";

const IndexItem = props => {
  console.log("indexItem", props);
  return (
    <div>
      {/* <List horizontal> */}
      <Marquee>
        <Statistic size="mini" color="yellow">
          <Statistic.Value>
            <List horizontal size="mini">
              <List.Item>
                {props.Name}-{props.Changes}
              </List.Item>
            </List>
          </Statistic.Value>
        </Statistic>
      </Marquee>
      {/* </List> */}
    </div>
  );
};

export default IndexItem;
