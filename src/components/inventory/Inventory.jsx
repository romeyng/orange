import React, { Component } from "react";
import InventoryContent from "./InventoryContent";

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: "CIW"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <main className="main-content bgc-grey-100">
        <div className="mainContent">
          <div className="border bgc-white">
            <form className="form-row">
              <div className="form-control form-control-lg col-3 border-0 mx-auto">
                Viewing Inventory for
              </div>
              <div className="col-3 mx-auto">
                <select
                  className="form-control form-control-lg"
                  name="selectedLocation"
                  value={this.state.selectedLocation}
                  onChange={this.handleChange}
                >
                  <option value="CIW">CIW</option>
                  <option value="AIA">AIA</option>
                </select>
              </div>
              <div className="col-3 mx-auto" />
            </form>
          </div>
          <InventoryContent selectedLocation={this.state.selectedLocation} />
        </div>
      </main>
    );
  }
}

export default Inventory;
