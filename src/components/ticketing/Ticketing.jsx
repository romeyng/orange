import React, { Component } from 'react';

import TicketsTable from './TicketsTable';
import MasonryWidget from './MasonryWidget';

import TicketingButtons from './TicketingButtons';

import CreateTicket from './CreateTicket';

class Ticketing extends Component {
  state = {  }
  render() { 
    return ( 
    <main className='main-content bgc-grey-100'>
    <div className="mainContent">
      <TicketingButtons />
      <MasonryWidget />
      <TicketsTable />
     
      
    </div>

  </main> );
  }
}
 
export default Ticketing;
