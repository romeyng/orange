import React, { Component } from 'react';

import axios from 'axios';
import { Modal } from 'react-bootstrap';
class AddLocationForm extends Component {
    constructor(props) {
        super(props);
        this.state = { locationName:"",
                        airportCode: "",
                    show: this.props.AddLocationForm };
    
        this.handleChange = this.handleChange.bind(this);
        this.postNewLocation = this.postNewLocation.bind(this);
      }

      postNewLocation(e) {
        // function to send data to api
        e.preventDefault();
    
        axios
          .post(`http://52.15.62.203:8080/createlocation`, {
            locationName: this.state.locationName,
            airportCode: this.state.airportCode,
            
          })
          .then(response => {
            console.log(response);
            this.props.onHide()
            
            
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
                      <label htmlFor="customerName">Location Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="locationName"
                        onChange={this.handleChange}
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputAddress2">Airport Code</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="airportCode"
                        onChange={this.handleChange}
                        placeholder=""
                      />
                    </div>
                   
                    
                  </div>
                </div>
              </div>
            </div>
            <button
              className="btn btn-primary btn-lg"
              onClick={this.postNewLocation}
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
         );
    }
}
 
export default AddLocationForm;