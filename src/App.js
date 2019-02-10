import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Sidebar from './components/Sidebar';

import Topbar from './components/Topbar';
import MasonryWidget from './components/MasonryWidget';
import TicketsTable from './components/TicketsTable';




class App extends Component {
  render() {
    return (
      <div>
      
      <Sidebar />
      
      <div className="page-container"><Topbar />
      <main className='main-content bgc-grey-100'>
        <div className="mainContent">
          <MasonryWidget />
          <div class="container-fluid">
          <TicketsTable />
          </div>
        </div>

      </main>
      
      </div>
      
      
      </div>
    ); 
  }
}

export default App;
