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
          <div className="masonry-item col-md-6">
            <div className="bgc-white p-20 bd">
              <h6 className="c-grey-900">Complex Form Layout</h6>
              <div className="mT-30">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputPassword4">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputCity">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label for="inputState">State</label>
                      <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label for="inputZip">Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label className="fw-500">Birthdate</label>
                      <div className="timepicker-input input-icon form-group">
                        <div className="input-group">
                          <div className="input-group-addon bgc-white bd bdwR-0">
                            <i className="ti-calendar" />
                          </div>
                          <input
                            type="text"
                            className="form-control bdc-grey-200 start-date"
                            placeholder="Datepicker"
                            data-provide="datepicker"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                      <input
                        type="checkbox"
                        id="inputCall2"
                        name="inputCheckboxesCall"
                        className="peer"
                      />
                      <label
                        for="inputCall2"
                        className=" peers peer-greed js-sb ai-c"
                      >
                        <span className="peer peer-greed">
                          Call John for Dinner
                        </span>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CreateTicket;
