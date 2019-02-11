import React, { Component } from 'react';

import './App.css';


import Sidebar from './components/fixed/Sidebar';

import Topbar from './components/fixed/Topbar';








import MainContent from './components/MainContent';




class App extends Component {
  render() {
    return (
      <div>
      
      <Sidebar />
      
      <div className="page-container">
        <Topbar />
       
        <MainContent />
      </div>
      
      
      
      
      </div>
    ); 
  }
}

export default App;
