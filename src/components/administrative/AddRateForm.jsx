import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import CustomerLookup from "./CustomerLookup";
import CustomersDropDown from "./CustomersDropDown";
import { Locations, PrepaidCustomer, Example } from "../reusables/dropdowns";
import RateSelector from "../reusables/RateSelector";

class AddRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseRate: "",
      markupType: "choose",
      fixed: 0,
      pct: 0,
      tax: 0,
      multiplier: 1,
      unitDesc: "per gal.",
      rateDesc: "",
      rateName: "",
      customerID: "0",
      locationID: "",
      fuelType: "choose",

      fixmark: false,
      pctmark: false,
      final: 0,
      isCustomerRate: false,

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

  postNewRate(e) {
    e.preventDefault();

    axios
      .post("http://52.15.62.203:8080/addrate", {
        baseRate: this.state.baseRate,
        markupType: this.state.markupType,
        fixed: this.state.fixed,
        pct: this.state.pct,
        tax: this.state.tax,
        multiplier: this.state.multiplier,
        unitDesc: this.state.unitDesc,
        rateDesc: this.state.rateDesc,
        rateName: this.state.rateName,
        customerID: this.state.customerID,
        locationID: this.state.locationID,
        fuelType: this.state.fuelType,
        companyID: this.state.companyID
      })
      .then(response => {
        console.log(response);
        this.props.onHide();
      })
      .catch(error => {
        console.log(error.response);
      });
    console.log("sent new rate req");
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name == "markupType") {
      if (value == "fixed") {
        this.setState({ fixmark: true, pctmark: false, pct: "0" });
      } else if (value == "pct") {
        this.setState({ fixmark: false, pctmark: true, fixed: "0" });
      } else {
        this.setState({ fixmark: false, pctmark: false, fixed: "0", pct: "0" });
      }
    }
    if (target.type == "checkbox") {
      this.setState({ [name]: target.checked });
    } else {
      this.setState({
        [name]: value
      });
    }
    if (this.state.isCustomerRate == false) {
      this.setState({ customerID: "" });
    }
  }
  calculateFinalRate = event => {
    event.preventDefault();
    let final = 0;
    if (this.state.markupType == "pct") {
      let markup =
        parseFloat(this.state.baseRate) * (parseFloat(this.state.pct) / 100);
      final = parseFloat(this.state.baseRate) + markup;
    } else {
      final = parseFloat(this.state.baseRate) + parseFloat(this.state.fixed);
    }
    final += parseFloat(this.state.tax);

    this.setState({ final: final.toFixed(2) });
  };

  handleCustomer = (value,comid) => {
    this.setState({ customerID: value, companyID: comid });
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
                  <Locations name="locationID" onChange={this.handleChange} />
                </div>
              </div>
            </div>

            <div className="bgc-white bd m-3 pT-4">
              <div className="row">
                <div className="col-2">
                  <label htmlFor="fuelType">Fuel Type</label>
                  <select
                    className="custom-select form-control form-control-lg"
                    name="fuelType"
                    value={this.state.fuelType}
                    onChange={this.handleChange}
                  >
                    <option value="1">Jet A1</option>
                    <option value="2">Diesel</option>
                  </select>
                </div>

                <div className="col-3 form-group ">
                  Rate Type
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input  "
                      name="isCustomerRate"
                      onChange={this.handleChange}
                      placeholder=""
                      id="ratepp"
                    />
                    <label className="form-check-label" htmlFor="ratepp">
                      Apply to Customer
                    </label>
                  </div>
                </div>
                <div className="col">
                  <CustomersDropDown
                    classList="custom-select form-control form-control-lg pB-3 mx-auto my-auto"
                    selectedCustomer={this.handleCustomer}
                    name="customerID"
                    disabled={!this.state.isCustomerRate}
                    
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
                    <option value="1">per gal</option>
                  </select>
                </div>
                <div className="col-3 ">
                  <label htmlFor="markupType">Markup Options </label>
                  <select
                    className="custom-select form-control form-control-lg"
                    name="markupType"
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
                    disabled={!this.state.fixmark}
                    value={this.state.fixed}
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="pct">Percent Rate </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="pct"
                    value={this.state.pct}
                    onChange={this.handleChange}
                    placeholder=""
                    disabled={!this.state.pctmark}
                  />
                </div>
              </div>
              <div className="row mt-1 ">
                <div className="col-2">
                  <label htmlFor="tax">Tax</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="tax"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="storage">Storage Fee</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="storage"
                    onChange={this.handleChange}
                    disabled
                  />
                </div>
                <div className="col-2" />
                <div className="col-2  text-info my-auto ">
                  <button onClick={this.calculateFinalRate}>
                    {" "}
                    Calculate Final Rate
                  </button>
                </div>
                

                <div className="col bg-info my-auto mx-auto">
                  <FinalRate final={this.state.final} />
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg"
              onClick={this.postNewRate}
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

export const FinalRate = props => {
  return <h4 className="text-white">${props.final} per us gal. </h4>;
};
