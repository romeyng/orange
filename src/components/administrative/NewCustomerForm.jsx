import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { CompanySelector } from "../reusables/dropdowns";


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
        companyID: this.state.companyID,
        email: this.state.email,
        companystat: this.state.companystat
      })
      .then(response => {
        console.log(response);
        

        this.props.onHide();
        this.props.refreshlist();
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
        size="lg"
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
            
                    <div className="col-6">
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

                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="email"
                        onChange={this.handleChange}
                        placeholder=""
                      />
                    </div>


                    <div className="col-6">
                      <div className="form-group mx-auto">
                      <label htmlFor="accountType">Company Type</label>
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
                      <div className="bd pt-2">Company
                      <div className=" input-group input-group-lg mx-auto pt-2">

                      <div className="form-check mx-1">
                        <input
                          className="form-check-input"
                          type="radio"
                          id=""
                          value="new"
                          name="companystat"
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="companystat">
                          New Company
                        </label>
                      </div>
                      <div className="form-check mx-1">
                        <input
                          className="form-check-input"
                          type="radio"
                          id=""
                          value="existing"
                          name="companystat"
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="companystat">
                          Existing Company
                        </label>
                      </div>
            
                      </div>
                      </div>

                      <CompanySelector name="companyID" onChange={this.handleChange} companystat={this.state.companystat} dataset={this.props.companylist}/>
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
