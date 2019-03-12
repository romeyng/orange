import React, { Component } from "react";
import axios from "axios";
class PrepaidCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prepaidCustomers: []
    };
  }

  getPrepaidCustomers = () => {
    axios
      .post("http://52.15.62.203:8080/getcustomers", { type: "prepaid" })
      .then(({ data }) => {
        console.log(data);
        var arr = [];
        for (var k = 0; k < data.length; k++) {
          arr.push(
            <option key={data[k].customerID} value={data[k].customerID}>
              {data[k].customer_name}
            </option>
          );
        }
        this.setState({
          prepaidCustomers: arr
        });
      });
  };
  componentDidMount() {
    this.getPrepaidCustomers();
  }

  render() {
    console.log(this.props.disabled);
    return (
      <div className="col input-group">
        <select
          className={this.props.classList}
          name={this.props.name}
          onChange={this.props.onChange}
          disabled={this.props.disabled}
        >
          {this.state.prepaidCustomers}
        </select>
      </div>
    );
  }
}

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  getLocations = () => {
    axios.get("http://52.15.62.203:8080/getlocations").then(({ data }) => {
      var arr = [];
      for (var k = 0; k < data.length; k++) {
        arr.push(
          <option key={data[k].locationID} value={data[k].locationID}>
            {data[k].airport_code}
          </option>
        );
      }
      this.setState({
        locations: arr
      });
    });
  };
  componentDidMount() {
    this.getLocations();
  }
  render() {
    return (
      <div className="col-2">
        <label htmlFor="locationID">Location</label>
        <select
          className="custom-select form-control form-control-lg"
          name={this.props.name}
          onChange={this.props.onChange}
        >
          {this.state.locations}
        </select>
      </div>
    );
  }
}
export { PrepaidCustomer };
export { Locations };
