import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sidebar from './components/Sidebar';

import Topbar from './components/Topbar';

class App extends Component {
  render() {
    return (
      <div>
      <Sidebar />
      <Topbar />
      </div>
    ); 
  }
}

export default App;
