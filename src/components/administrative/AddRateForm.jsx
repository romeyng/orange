import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import CustomerLookup from "./CustomerLookup";
import CustomersDropDown from "./CustomersDropDown";

//TODO: Build form input fields, create post request
class AddRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseRate: "",
      markupType: "choose",
      fixedRate: "",
      pctRate: "",
      tax: "",
      multiplier: "",
      unitDesc: "",
      rateDesc: "",
      rateName: "",
      customerID: "0",
      locationID: "",
      fuelType: "choose",
      locOptions: [],
      customerOptions: [],
      showCustomerLookup: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.postNewRate = this.postNewRate.bind(this);
    this.customerLookup = this.customerLookup.bind(this);
  }

  customerLookup(e) {
    e.preventDefault();
    this.setState({
      showCustomerLookup: true
    });
  }

  postNewRate() {}

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    axios.get("http://52.15.62.203:8080/getlocations").then(({ data }) => {
      var arr = [];
      for (var k = 0; k < data.length; k++) {
        arr.push(
          <option key={data[k].locationID} value={data[k].locationID}>
            {" "}
            {data[k].airport_code}{" "}
          </option>
        );
      }
      this.setState({
        locOptions: arr
      });
    });
  }
  handleCustomer = value => {
    this.setState({ customerID: value });
  };

  render() {
    let modalClose = () => this.setState({ showCustomerLookup: false });
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">New Rate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="bgc-white bd m-3 p-4">
              <div className="row">
                <div className="col-4">
                  <label htmlFor="rateName">Rate Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="rateName"
                    onChange={this.handleChange}
                    placeholder=""
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="rateDesc">Rate Description</label>
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    name="rateDesc"
                    onChange={this.handleChange}
                    placeholder=""
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="locationID">Location</label>
                  <select
                    className="custom-select form-control form-control-lg"
                    name="locationID"
                    onChange={this.handleChange}
                  >
                    {this.state.locOptions}
                  </select>
                </div>
              </div>
            </div>

            <div className="bgc-white bd m-3 pT-4">
              <div className="row">
                <div className="col-3">
                  <label htmlFor="fuelType">Fuel Type</label>
                  <select
                    className="custom-select form-control form-control-lg"
                    name="fuelType"
                    value={this.state.fuelType}
                    onChange={this.handleChange}
                  >
                    <option value="Regular">Jet A1</option>
                    <option value="Prepaid">Diesel</option>
                  </select>
                </div>

                <div className="col-3 form-group ">
                  Rate Type
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input  "
                      name="rateType"
                      onChange={this.handleChange}
                      placeholder=""
                      id="ratereg"
                      value="regular"
                    />
                    <label className="form-check-label" htmlFor="ratereg">
                      Regular
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input  "
                      name="rateType"
                      onChange={this.handleChange}
                      placeholder=""
                      id="ratepp"
                      value="prepaid"
                    />
                    <label className="form-check-label" htmlFor="ratepp">
                      Prepaid
                    </label>
                  </div>
                </div>
                <div className="col-5">
                  <CustomersDropDown
                    classList="custom-select form-control form-control-lg pB-3"
                    selectedCustomer={this.handleCustomer}
                  />
                </div>
              </div>
            </div>
            <div className="bgc-white bd m-3 mB-5 pT-4">
              <div className="row">
                <div className="col-2">
                  <label htmlFor="baserate">Base Rate ($)</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="baseRate"
                    onChange={this.handleChange}
                    placeholder=""
                  />
                </div>
                <div className="col-1">
                  <br />
                  <br />
                  per
                </div>
                <div className="col-2">
                  <label htmlFor="unitDesc">Unit</label>
                  <select
                    className="custom-select form-control form-control-lg"
                    name="unitDesc"
                    onChange={this.handleChange}
                  >
                    {this.state.unitDesc}
                  </select>
                </div>
                <div className="col-3 ">
                  <label htmlFor="locationID">Markup Options </label>
                  <select
                    className="custom-select form-control form-control-lg"
                    name="unitDesc"
                    onChange={this.handleChange}
                  >
                    <option value="0">none</option>
                    <option value="fixed">fixed</option>
                    <option value="pct">percent</option>
                  </select>
                </div>
                <div className="col-2">
                  <label htmlFor="fixed">Fixed Rate </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="fixed"
                    onChange={this.handleChange}
                    placeholder=""
                    disabled
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="pct">Percent Rate </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="pct"
                    onChange={this.handleChange}
                    placeholder=""
                    disabled
                  />
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg"
              onClick={this.postNewCustomer}
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default AddRate;
