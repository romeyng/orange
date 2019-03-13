import React, { Component } from "react";
import axios from "axios";
import NewCustomerForm from "./NewCustomerForm";

class CustomersDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerOptions: [],

      addCustomer: false
    };
  }
  addCustomer = () => {
    this.setState({ addCustomer: true });
  };

  getCustomers = () => {
    console.log("getcustomers called");
    axios.post("http://52.15.62.203:8080/getcustomers").then(({ data }) => {
      console.log(data);
      var arr = [<option value="0">Select Customer</option>];
      for (var k = 0; k < data.length; k++) {
        arr.push(
          <option key={data[k].customerID} value={data[k].customerID}>
            {data[k].customer_name} ({data[k].account_type})
          </option>
        );
      }
      this.setState({
        customerOptions: arr
      });
    });
  };
  handleAdd = value => {
    this.setState({ customerID: value });
    this.getCustomers();
  };

  componentDidMount() {
    this.getCustomers();
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value
    });
    this.props.selectedCustomer(value);
  };
  render() {
    let modalClose = () => this.setState({ addCustomer: false });
    return (
      <div className="row">
        <div className="col-8 input-group">
          <select
            className={this.props.classList}
            name={this.props.name}
            onChange={this.handleChange}
            disabled={this.props.disabled}
          >
            {this.state.customerOptions}
          </select>
        </div>

        <div className="col input-group-append ">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="addButton"
            onClick={this.addCustomer}
            disabled={this.props.disabled}
            data-toggle="tooltip"
            title="Add new customer"
          >
            <span className="icon-holder">
              <i className="c-green-500 ti-plus " />
            </span>
          </button>
        </div>
        <NewCustomerForm
          show={this.state.addCustomer}
          onHide={modalClose}
          refreshlist={this.handleAdd}
        />
      </div>
    );
  }
}

export default CustomersDropDown;
