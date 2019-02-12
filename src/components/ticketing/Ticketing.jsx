import React, { Component } from "react";

import TicketsTable from "./TicketsTable";
import MasonryWidget from "./MasonryWidget";

import TicketingButtons from "./TicketingButtons";
import ErrorBoundary from "./ErrorBoundary";

class Ticketing extends Component {
  state = {};
  render() {
    return (
      <main className="main-content bgc-grey-100">
        <div className="mainContent">
          <ErrorBoundary>
            <TicketingButtons />
          </ErrorBoundary>
          <MasonryWidget />
          <TicketsTable />
        </div>
      </main>
    );
  }
}

export default Ticketing;
