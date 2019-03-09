import React, { Component } from "react";

import "./App.css";

import Sidebar from "./components/fixed/Sidebar";

import Topbar from "./components/fixed/Topbar";

import MainContent from "./components/MainContent";
import CamProvider from "./CamContext";
class App extends Component {
  render() {
    return (
      <CamProvider>
        <div>
          <Sidebar />

          <div className="page-container">
            <Topbar />

            <MainContent />
          </div>
        </div>
      </CamProvider>
    );
  }
}

export default App;
