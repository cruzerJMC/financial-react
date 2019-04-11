import React from "react";
import Marquee from "react-smooth-marquee";
import { List, Message, Divider, Segment, Grid } from "semantic-ui-react";

const IndexItem = props => {
  console.log("indexItem", props);
  return (
    <div>
      <Marquee>
        index:{props.Name}-Change:{props.Changes}
      </Marquee>
    </div>
  );
};

export default IndexItem;
