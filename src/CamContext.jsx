import React, { Component } from "react";
const CamContext = React.createContext();
class CamProvider extends Component {
  state = {};

  render() {
    return (
      <CamContext.Provider value="testvalue">
        {this.props.children}
      </CamContext.Provider>
    );
  }
}
export default CamProvider;
