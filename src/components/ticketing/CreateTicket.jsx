import React, { Component } from "react";
import Button from "react-bootstrap/Button";

//TODO: calculate meter actual within the form
//TODO: fields to add: Status, start time, finish time, mtow
//TODO: Lookup fields: customer name predictive,fuel,location, select customer by id

import { Modal } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-date-picker";

import CustomersDropDown from "../administrative/CustomersDropDown";
import { RatesDropDown, Locations } from "../reusables/dropdowns";

class CreateTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",

      fuelLocation: "Fuel Location",
      fuelType: "Fuel Type",
      meterActual: 0,
      meterBefore: 0,
      meterAfter: 0,
      requestQuantity: 0,
      paymentMethod: "",
      supervisor: "",
      mtow: 0,
      dateCreated: new Date(),
      dateComplete: new Date(),
      userID: 1,
      status: "",
      prepaid: false,
      showCustomerLookup: false,
      paidstatus: false,
      paidstyle: "btn btn-lg btn-block btn-secondary",
      paidtext: "OUTSTANDING"
    };
    this.postNewFuelTicket = this.postNewFuelTicket.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getFormattedDate = this.getFormattedDate.bind(this);
    this.customerLookup = this.customerLookup.bind(this);
    this.paidToggle = this.paidToggle.bind(this);
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
      .post(`http://52.15.62.203:8080/createuplift`, {
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
        dateCreated: this.getFormattedDate(this.state.dateCreated),
        dateComplete: this.getFormattedDate(this.state.dateComplete),
        ticketStatus: this.state.ticketstatus,
        paymentStatus: this.state.paymentStatus,
        rateID: this.state.rateID
      })
      .then(response => {
        console.log(response);
        this.props.onHide();
      })
      .catch(error => {
        console.log(error.response);
      });
    console.log("sentpost req");
  }

  componentDidMount() {
    axios
      .get("http://52.15.62.203:8080/genreconbalance")
      .then(({ data }) => {
        console.log(data[0].balance);
        this.setState({ balance: data[0].balance });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    //function changes state as form values are editted

    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (target.type == "checkbox") {
      this.setState({ [name]: target.checked });
    } else {
      this.setState({
        [name]: value
      });
    }
    if (target.name == "meterBefore" || target.name == "meterAfter") {
      this.calcMeter();
    }
  }
  getFormattedDate(rawdate) {
    let year = rawdate.getFullYear();

    let month = (1 + rawdate.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;

    let day = rawdate.getDate().toString();
    day = day.length > 1 ? day : "0" + day;

    return year + "/" + month + "/" + day;
  }

  handleCustomer = value => this.setState({ customerID: value });

  dateCreate = dateCreated => this.setState({ dateCreated });

  dateComplete = dateComplete => this.setState({ dateComplete });

  componentDidUpdate(prevProps, prevState) {}
  paidToggle(e, prevState) {
    e.preventDefault();
    this.setState({ paidstatus: !this.state.paidstatus });
    if (!this.state.paidstatus == true) {
      this.setState({
        paidstyle: "btn btn-lg btn-block btn-success",
        paidtext: "PAID"
      });
    } else {
      this.setState({
        paidstyle: "btn btn-lg btn-block btn-secondary",
        paidtext: "OUTSTANDING"
      });
    }
  }
  calcMeter = () =>
    parseFloat(this.state.meterBefore) - parseFloat(this.state.meterAfter);

  render() {
    let modalClose = () => this.setState({ showCustomerLookup: false });
    const qparams = {
      customerID: this.state.customerID,

      location: this.state.fuelLocation,
      fuelType: this.state.fuelType
    };
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
                      name="customerID"
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
                      onChange={this.dateCreate}
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
                      <Locations
                        name="fuelLocation"
                        onChange={this.handleChange}
                      />
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
                        onChange={this.handleChange}
                      >
                        {this.calcMeter()}
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
              <div className=" col-3 p-2 mL-4">
                <h6 className="text-body">Ticket Status</h6>
                <div className="form-check  form-control-lg">
                  <input
                    className="form-check-input "
                    type="checkbox"
                    name="paymentstatus"
                    id="paymentstatus"
                    onClick={this.handleChange}
                  />
                  <label className="form-check-label" htmlFor="paymentstatus">
                    Paid
                  </label>
                </div>
                <div className="form-check  form-control-lg">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="ticketstatus"
                    name="ticketstatus"
                    onClick={this.handleChange}
                  />
                  <label className="form-check-label" htmlFor="ticketstatus">
                    Complete
                  </label>
                </div>
              </div>
              <div className="bgc-white col-2">
                <h6 className="">Payment Info</h6>
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
              <div className="col- 4 px-4">
                <BillingDetail
                  payment_type={this.state.payment_type}
                  handleChange={this.handleChange}
                />
                <RatesDropDown
                  onChange={this.handleChange}
                  classList="custom-select"
                  name="rateID"
                  qparams={qparams}
                />
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
    <div className="row form-group">
      <label className="mr-1" htmlFor="invoice_no">
        Invoice No
      </label>
      <input
        name="invoiceno"
        id="form-control invoice_no form-control-sm"
        type="text"
        onChange={props.handleChange}
      />
    </div>
  );

  let card = (
    <div>
      <select
        className="custom-select form-control form-control-sm"
        name="card_type"
        onChange={props.handleChange}
      >
        <option value="0">Card Type</option>
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="amex">AMEX</option>
      </select>
    </div>
  );
  if (props.payment_type == "card") {
    return card;
  } else {
    return invoice;
  }
};
