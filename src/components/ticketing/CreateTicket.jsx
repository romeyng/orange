import React, { Component } from "react";
import Button from "react-bootstrap/Button";

import { Modal } from "react-bootstrap";
class CreateTicket extends Component {
  state = {};
  render() {
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
                <div className="mT-30">
                  <div className="form-row">
                    <div className="form-group input-group input-group-lg col">
                      <input
                        type="text"
                        className="form-control"
                        id="customerName"
                        placeholder="Flight/ Customer Name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-2">
                      <input
                        type="text"
                        className="form-control"
                        id="customerID"
                        placeholder="ID"
                      />
                    </div>
                    <div className="form-group col">
                      <input
                        type="text"
                        className="form-control"
                        id="tailNumnber"
                        placeholder="Tail #"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress">Origin</label>
                    <input
                      type="text"
                      className="form-control"
                      id="origin"
                      placeholder="Origin"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">Destination</label>
                    <input
                      type="text"
                      className="form-control"
                      id="destination"
                      placeholder="Destination"
                    />
                  </div>
                </div>
              </div>

              <div className="bgc-white bd col-6">
                <h6 className="c-grey-900">Request Details</h6>
                <div className="mT-30">
                  <div className="form-row ">
                    <div className="form-group input-group input-group-lg col-6 mx-auto">
                      <input
                        type="text"
                        className="form-control"
                        id="quantity"
                        placeholder="Quantity"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-6 mx-auto">
                      <select
                        className="custom-select form-control form-control-lg"
                        id="fuelType"
                      >
                        <option selected>Fuel Type</option>
                        <option value="1">Jet A-1</option>
                        <option value="2">AvGas 100</option>
                        <option value="3">Diesel</option>
                      </select>
                    </div>
                  </div>
                  <div className="bgc-white bd col">
                    <h6 className="c-grey-900 mx-auto">Meter Reading</h6>
                    <div className="form-row">
                      <div className="form-group col-8 mx-auto">
                        <input
                          className="form-control "
                          type="text"
                          placeholder="Before"
                        />
                        <input
                          className="form-control "
                          type="text"
                          placeholder="After"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="bgc-white bd col">
                <h6 className="c-grey-900">Billing</h6>
                <div className="mT-30">
                  <div className="form-row ">
                    <div className="form-group input-group input-group-lg mx-auto">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkCash"
                          value="cash"
                        />
                        <label htmlFor="chkCash">Cash</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkCheque"
                          value="cheque"
                        />
                        <label htmlFor="chkCheque">Cheque</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="chkCard"
                          value="card"
                        />
                        <label htmlFor="chkCard">Card</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateTicket;
