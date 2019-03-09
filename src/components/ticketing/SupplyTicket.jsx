import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-date-picker";
import { PrepaidCustomer } from "../lookups/dropdowns";

export const SupplyTicket = props => {
  let supplyForm = (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Supply Ticket
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="bgc-white bd m-3 p-4">
            <div className="form-row">
              <div className="col">
                <DatePicker
                  onChange={props.dateChange}
                  value={props.receiveDate}
                  name="receiveDate"
                  className="mt-1 form-control form-control-lg mB-1 border-0"
                />
                <label htmlFor="receiveDate">Date Received</label>
                <input
                  type="text"
                  className="form-control form-control-lg mB-1"
                  id="supplier"
                  name="supplier"
                  onChange={props.onChange}
                />
                <label htmlFor="supplier">Supplier</label>

                <input
                  type="text"
                  className="form-control form-control-lg mB-1"
                  id="quantity"
                  name="quantity"
                  onChange={props.onChange}
                />
                <label htmlFor="quantity">Quantity</label>
              </div>

              <div className=" col-7 mx-auto">
                <select
                  className="custom-select form-control form-control-lg mb-1"
                  name="fuelLocation"
                  onChange={props.onChange}
                >
                  <option value="0">Location</option>
                  <option value="1">CIW</option>
                  <option value="2">SVD</option>
                  <option value="3">BGI</option>
                  <option value="4">UVF</option>
                </select>

                <select
                  className="custom-select form-control form-control-lg mt-1"
                  name="fuelType"
                  onChange={props.onChange}
                >
                  <option value="0">Fuel Type</option>
                  <option value="1">Jet A-1</option>
                  <option value="2">AvGas 100</option>
                  <option value="3">Diesel</option>
                </select>
              </div>
              <div className="form-group col-9" />
            </div>
          </div>

          <button
            className="btn btn-primary btn-lg"
            onClick={props.submitSupply}
          >
            Submit
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
  return supplyForm;
};
