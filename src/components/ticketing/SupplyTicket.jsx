import React, { Component } from "react";
import { Modal } from "react-bootstrap";

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
                <label htmlFor="supplier">Supplier</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="supplier"
                  name="supplier"
                  onChange={props.handleChange}
                />
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="quantity"
                  name="quantity"
                  onChange={props.handleChange}
                />
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
