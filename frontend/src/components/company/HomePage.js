// import React, { Component } from "react";
// import { Input, Segment, Button, Grid } from "semantic-ui-react";
// import DetailsPage from "./DetailsPage";
// import CompanyList from "./CompanyList";

// export default class HomePage extends Component {
//   state = {
//     detailsPage: false,
//     // clickedCompany: []
//   };
//   viewCompanySummary = () => {
//     return this.setState({
//       detailsPage: !this.state.detailsPage
//     });
//   };
//   compareDetails = itemId => {
//     const clickedCompany = this.props.tickers.find(item => item.id === itemId);
//     // console.log("showing", clickedCompany);
//     this.setState({
//       clickedCompany: clickedCompany
//       // compareItems: clickedCompare,
//       // compsPage: false
//     });
//   };
//   render() {
//     return (
//       <div>
//         {!this.state.detailsPage ? (
//           <CompanyList
//             tickers={this.props.tickers}
//             viewCompanySummary={this.viewCompanySummary}
//           />
//         ) : (
//           <DetailsPage tickers={this.props.tickers} />
//         )}
//       </div>
//     );
//   }
// }
