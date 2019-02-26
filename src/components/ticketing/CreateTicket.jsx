import React, { Component } from "react";
import Button from "react-bootstrap/Button";

//TODO: calculate meter actual within the form
//TODO: fields to add: Status, start time, finish time, mtow
//TODO: Lookup fields: customer name predictive,fuel,location, select customer by id

import { Modal } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-date-picker";
import NewCustomerForm from "../administrative/NewCustomerForm";
import CustomerLookup from "../administrative/CustomerLookup";
import CustomersDropDown from "../administrative/CustomersDropDown";

class CreateTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      dateCreated: new Date(),
      dateComplete: new Date(),
      fuelLocation: "Fuel Location",
      fuelType: "Fuel Type",
      meterActual: 0,
      meterBefore: 0,
      meterAfter: 0,
      requestQuantity: 0,
      paymentMethod: "",
      supervisor: "",
      mtow: "",
      customerID: 1,
      userID: 1,
      status: "",
      prepaid: false,
      showCustomerLookup: false
    };
    this.postNewFuelTicket = this.postNewFuelTicket.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dateCreated = this.dateCreated.bind(this);
    this.dateComplete = this.dateComplete.bind(this);
    this.customerLookup = this.customerLookup.bind(this);
  }
  customerLookup(e) {
    e.preventDefault();
    this.setState({
      showCustomerLookup: true
    });
  }
  postNewFuelTicket(e) {
    e.preventDefault();
    axios
      .post(`http://52.15.62.203:8080/newticket/fuelticket`, {
        fuelType: this.state.fuelType,
        fuelLocation: this.state.fuelLocation,
        userID: this.state.userID,
        customerID: this.state.customerID,
        tailNo: this.state.tailNo,
        arrival: this.state.dateCreated,
        required: this.state.dateComplete,
        origin: this.state.origin,
        destination: this.state.destination,
        mtow: this.state.mtow,
        request: this.state.requestQuantity,
        pilot: this.state.pilot,
        supervisor: this.state.supervisor,
        paymentMethod: this.state.paymentMethod,
        meterBefore: this.state.meterBefore,
        meterAfter: this.state.meterAfter,
        status: this.state.status
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
    console.log("sentpost req");
  }

  handleChange(event) {
    //function changes state as form values are editted
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleCustomer = value => {
    this.setState({ customerID: value });
  };
  dateCreated(date) {
    this.setState({ dateCreated: date });
  }
  dateComplete(date) {
    this.setState({ dateComplete: date });
  }
  componentDidUpdate(prevProps, prevState) {}

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
          <Modal.Title id="contained-modal-title-vcenter">
            FBO Fuel Request/ Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="bgc-white bd col-6">
                <h6 className="c-grey-900">Customer Details</h6>
                <div className="my-2 py-2">
                  <div className="col">
                    <CustomersDropDown
                      classList="custom-select form-control form-control-lg p-5"
                      selectedcustomer={this.handleCustomer}
                    />
                  </div>
                </div>
                <div className="row my-2 py-2">
                  <div className="form-group col-4 pl-4">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="tailNumnber"
                      placeholder="Tail #"
                      name="tailNo"
                      onChange={this.handleChange}
                      value={this.tailNo}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-4 p-2">
                    <input
                      type="text"
                      className="form-control"
                      id="origin"
                      placeholder="Origin"
                      name="origin"
                      onChange={this.handleChange}
                    />

                    <input
                      type="text"
                      className="form-control"
                      id="destination"
                      placeholder="Destination"
                      name="destination"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="form-group col-7 p-2 ">
                    <DatePicker
                      onChange={this.dateCreated}
                      value={this.state.dateCreated}
                      name="dateCreated"
                      className="mb-1"
                    />

                    <DatePicker
                      onChange={this.dateComplete}
                      value={this.state.dateComplete}
                      name="dateComplete"
                      className="mt-1"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-control col-3 border-0">Pilot Name</div>
                  <div className="form-group col-9">
                    <input
                      type="text"
                      className="form-control"
                      id="pilot"
                      placeholder=""
                      name="pilot"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="bgc-white bd col-6">
                <h6 className="c-grey-900">Request Details</h6>
                <div className="mT-30">
                  <div className="form-row">
                    <div className="form-group col-6 mx-auto">
                      <select
                        className="custom-select form-control form-control-lg"
                        name="fuelLocation"
                        value={this.state.fuelLocation}
                        onChange={this.handleChange}
                      >
                        <option value="0">Fuel Location</option>
                        <option value="1">CIW</option>
                        <option value="2">SVD</option>
                        <option value="3">BGI</option>
                        <option value="4">UVF</option>
                      </select>
                    </div>
                    <div className="form-group col-6 mx-auto">
                      <select
                        className="custom-select form-control form-control-lg"
                        name="fuelType"
                        value={this.state.fuelType}
                        onChange={this.handleChange}
                      >
                        <option value="0">Fuel Type</option>
                        <option value="1">Jet A-1</option>
                        <option value="2">AvGas 100</option>
                        <option value="3">Diesel</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row ">
                    <div className="form-control form-control-lg col-6 border-0">
                      Quantity Requested:
                    </div>
                    <div className="form-group input-group col-6 ">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="requestQuantity"
                        placeholder="0"
                        name="requestQuantity"
                        onChange={this.handleChange}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">us. gal</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-row" />

                  <div className="form-row">
                    <div className="form-group col-6 input-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Before"
                        name="meterBefore"
                        onChange={this.handleChange}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">us. gal</span>
                      </div>
                    </div>

                    <div className="form-group col-6 input-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="After"
                        name="meterAfter"
                        onChange={this.handleChange}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">us. gal</span>
                      </div>
                    </div>
                  </div>
                  <div className=" form-row">
                    <div className="form-control form-control-lg col-6 border-0 ">
                      Actual Uplift:
                    </div>

                    <div className="form-group col-6 input-group">
                      <div
                        className="form-control form-control-lg bg-info"
                        type="text"
                        placeholder="0"
                        name="meterActual"
                        id="meterActual"
                      >
                        {this.state.meterActual}
                      </div>
                      <div className="input-group-append">
                        <span className="input-group-text">us. gal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="bgc-white border-right col-2">
                <h6 className="c-grey-900">Billing</h6>
                <div className="mT-10">
                  <div className="col-4 p-5">
                    <div className="form-group input-group input-group-lg mx-auto">
                      <div className="form-check mx-1">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkCash"
                          value="cash"
                          name="payment_type"
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="chkCash">
                          Cash
                        </label>
                      </div>
                      <div className="form-check mx-1">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkCheque"
                          value="cheque"
                          name="payment_type"
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="chkCheque">
                          Cheque
                        </label>
                      </div>
                      <div className="form-check mx-1">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkCard"
                          value="card"
                          name="payment_type"
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="chkCard">
                          Card
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col- 4 px-2">
                <h6 className="c-grey-900">Payment Status</h6>
                <BillingDetail payment_type={this.state.payment_type} />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-lg btn-primary "
            onClick={this.postNewFuelTicket}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateTicket;

export const BillingDetail = props => {
  let invoice = (
    <div className="form-group">
      <label className="mr-1" htmlFor="invoice_no">
        Invoice No
      </label>
      <input id="form-control invoice_no form-" type="text" />
    </div>
  );

  let card = <div />;

  return invoice;
};
