import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

class NewCustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { customerName: "", company: "", accountType: "Regular" };

    this.handleChange = this.handleChange.bind(this);
    this.postNewCustomer = this.postNewCustomer.bind(this);
  }

  postNewCustomer(e) {
    // function to send data to api
    e.preventDefault();

    axios
      .post(`http://52.15.62.203:8080/createcustomer`, {
        customerName: this.state.customerName,
        accountType: this.state.accountType,
        company: this.state.company,
        email: "email@email.com"
      })
      .then(response => {
        console.log(response);
        this.props.refreshlist();

        this.props.onHide();
      })
      .catch(error => {
        console.log(error.response);
      });
    console.log("sentpost req");
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New Customer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="bgc-white bd col">
                <div className="">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="customerName">Customer Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="customerName"
                        onChange={this.handleChange}
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress2">Company Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="company"
                        onChange={this.handleChange}
                        placeholder=""
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col mx-auto">
                        <select
                          className="custom-select form-control form-control-lg"
                          name="accountType"
                          value={this.state.accountType}
                          onChange={this.handleChange}
                        >
                          <option value="Regular">Regular</option>
                          <option value="Prepaid">Pre-Paid</option>
                        </select>
                      </div>
                    </div>
                  </div>
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
export default NewCustomerForm;
