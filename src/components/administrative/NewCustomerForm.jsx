import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Axios from "axios";


class NewCustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {customerName: '',
                  fuelCompany: '',
                  accountType: 'Regular'};

    this.handleChange = this.handleChange.bind(this);
    this.postNewCustomer = this.postNewCustomer.bind(this);
    
  }

  postNewCustomer(){
    //function to send data to api
    Axios.post('http://192.168.1.50:8080/administrative',
      {customerName: this.state.customerName,
      accountType: this.state.accountType,
      fuelCompany: this.state.fuelCompany
    })
    .then(response => { 
      console.log(response)
    })
    .catch(error => {
        console.log(error.response)
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
              <div className="bgc-white bd col-6">
                <div className="c-grey-900"> Cutomer Details</div>
                <div className="mT-30">
                  <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="customerName">Customer Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="customerName"
                      onChange={this.handleChange}
                      placeholder=""
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">Fuel Company</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fuelCompany"
                      onChange={this.handleChange}
                      placeholder=""
                    /> 
                  </div>
                  <div className="form-row">
                    <div className="form-group col-8 mx-auto">
                      <select
                        className="custom-select form-control form-control-lg"
                        name="accountType" value={this.state.accountType} onChange={this.handleChange}
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
            <button className="btn btn-primary btn-lg" onClick={this.postNewCustomer}>Submit</button>
          </form>
        </Modal.Body>
        
      </Modal>
    );
  }
}
export default NewCustomerForm;

