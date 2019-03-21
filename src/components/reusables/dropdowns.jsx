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
      var arr = [<option value="0">Select</option>];
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
      <div>
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

class RatesDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRates: []
    };
  }

  getCurrentRates = () => {
    console.log("getcurrentrates called");
    axios
      .post("http://52.15.62.203:8080/getcurrentrates", {
        customerID: this.props.qparams.customerID,
        fuelLocation: this.props.qparams.location,
        fuelType: this.props.qparams.fuelType
      })
      .then(({ data }) => {
        console.log(data);
        var arr = [<option value="0">Choose Rate</option>];
        for (var k = 0; k < data.length; k++) {
          arr.push(
            <option key={data[k].rateID} value={data[k].rateID}>
              {data[k].rateID}-{data[k].rate_name}
            </option>
          );
        }
        this.setState({
          currentRates: arr
        });
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <div className="row">
        <div className="col-9 input-group">
          <select
            className={this.props.classList}
            name={this.props.name}
            onChange={this.props.onChange}
            disabled={this.props.disabled}
          >
            {this.state.currentRates}
          </select>
        </div>

        <div className="input-group-append ">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="refreshRates"
            onClick={this.getCurrentRates}
            disabled={this.props.disabled}
            data-toggle="tooltip"
            title="Add new customer"
          >
            <span className="icon-holder">
              <i className="c-green-500 ti-reload " />
            </span>
          </button>
        </div>
      </div>
    );
  }
}
const CompanySelector = props =>{
  if (props.companystat == "existing"){
return <select className="custom-select form-control form-control-lg" onChange={props.onChange} name={props.name}>
{props.dataset}
</select>
  } else{
    return  <><label className="mr-1" htmlFor={props.name}>
    Company Name
  </label>
  <input
    name={props.name}
    className="form-control form-control-lg"
    type="text"
    onChange={props.onChange}
  /></> 
  }
  
}

export {CompanySelector};
export { RatesDropDown };
export { PrepaidCustomer };
export { Locations };
