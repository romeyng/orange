import React, { Component } from 'react';
//TODO: Build form input fields, create post request
class AddRate extends Component {
    constructor(props) {
        super(props);
        this.state = { baseRate:"", markupType: "choose", fixedRate: "",
         pctRate: "", tax: "", multiplier: "", unitDesc: "", rateDesc: "", rateName: "" };
    
        this.handleChange = this.handleChange.bind(this);
        this.postNewCustomer = this.postNewCustomer.bind(this);
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
            New Rate
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="bgc-white bd col">
                <div className="">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="customerName">Rate Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="customerName"
                        onChange={this.handleChange}
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress2">Rate Description</label>
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
 
export default AddRate;