import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-date-picker";

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
            <div className="row">
              <div className="col">
                
                <input
                  type="text"
                  className="form-control form-control-lg mB-1"
                  id="supplier"
                  name="supplier"
                  onChange={props.handleChange}
                />
                <label htmlFor="supplier">Supplier</label>
                
                <input
                  type="text"
                  className="form-control form-control-lg mB-1"
                  id="quantity"
                  name="quantity"
                  onChange={props.handleChange}
                />
                <label htmlFor="quantity">Quantity</label>
                
                <DatePicker 
                      onChange={props.dateChange}
                      value={props.receiveDate}
                      name="receiveDate"
                      className="mt-1 form-control form-control-lg mB-1" />
                      <label htmlFor="receiveDate">Date Received</label>
              </div>
            </div>
          </div>

          <button className="btn btn-primary btn-lg">Submit</button>
        </form>
      </Modal.Body>
    </Modal>
  );
  return supplyForm;
};
