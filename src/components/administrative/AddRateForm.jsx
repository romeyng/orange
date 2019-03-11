import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import CustomerLookup from "./CustomerLookup";
import CustomersDropDown from "./CustomersDropDown";
import {Locations} from "../reusables/dropdowns";


//TODO: Build form input fields, create post request
class AddRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseRate: "",
      markupType: "choose",
      fixed: 0,
      pct:0,
      tax: 0,
      multiplier: "",
      unitDesc: "",
      rateDesc: "",
      rateName: "",
      customerID: "0",
      locationID: "",
      fuelType: "choose",
      locOptions: [],
      fixmark: true,
      pctmark: true,
      final: 0,
      
      showCustomerLookup: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.postNewRate = this.postNewRate.bind(this);
    this.customerLookup = this.customerLookup.bind(this);
  }

  customerLookup(e) {
    e.preventDefault();
    this.setState({
      showCustomerLookup: true
    });
  }

  postNewRate() {}

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name=="markupType"){
      if (value=="fixed"){
        this.setState({fixmark: false, pctmark: true, pct: '0'})
        
      }else{
        this.setState({fixmark: true, pctmark: false, fixed: '0'})
      }
      
    
    }

    this.setState({
      [name]: value
    });
  }
  calculateFinalRate=(event)=>{
    event.preventDefault();
    let final = 0;
    if (this.state.markupType=="pct"){
      
      let markup= parseFloat(this.state.baseRate)*(parseFloat(this.state.pct)/100)
      final = parseFloat(this.state.baseRate) + markup
      
    }else{
      
      final = parseFloat(this.state.baseRate)+parseFloat(this.state.fixed);
    }
    final+=parseFloat(this.state.tax);
   
    
    this.setState({final: final.toFixed(2)})
  }

  componentDidMount() {
    axios.get("http://52.15.62.203:8080/getlocations").then(({ data }) => {
      var arr = [];
      for (var k = 0; k < data.length; k++) {
        arr.push(
          <option key={data[k].locationID} value={data[k].locationID}>
            {" "}
            {data[k].airport_code}{" "}
          </option>
        );
      }
      this.setState({
        locOptions: arr
      });
    });
  }
  handleCustomer = value => {
    this.setState({ customerID: value });
  };

  render() {
    let modalClose = () => this.setState({ showCustomerLookup: false });
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">New Rate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="bgc-white bd m-3 p-4">
              <div className="row">
                <div className="col-4">
                  <label htmlFor="rateName">Rate Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="rateName"
                    onChange={this.handleChange}
                    placeholder=""
                  />
                </div>

                <div className="col-6">
                  <label htmlFor="rateDesc">Rate Description</label>
                  <input
                    type="text"
                    className="form-control form-control-lg "
                    name="rateDesc"
                    onChange={this.handleChange}
                    placeholder=""
                  />
                </div>
                <Locations />
              </div>
            </div>

            <div className="bgc-white bd m-3 pT-4">
              <div className="row">
                <div className="col-3">
                  <label htmlFor="fuelType">Fuel Type</label>
                  <select
                    className="custom-select form-control form-control-lg"
                    name="fuelType"
                    value={this.state.fuelType}
                    onChange={this.handleChange}
                  >
                    <option value="Regular">Jet A1</option>
                    <option value="Prepaid">Diesel</option>
                  </select>
                </div>

                <div className="col-3 form-group ">
                  Rate Type
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input  "
                      name="rateType"
                      onChange={this.handleChange}
                      placeholder=""
                      id="ratereg"
                      value="regular"
                    />
                    <label className="form-check-label" htmlFor="ratereg">
                      Regular
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input  "
                      name="rateType"
                      onChange={this.handleChange}
                      placeholder=""
                      id="ratepp"
                      value="prepaid"
                    />
                    <label className="form-check-label" htmlFor="ratepp">
                      Prepaid
                    </label>
                  </div>
                </div>
                <div className="col-5">
                  <CustomersDropDown
                    classList="custom-select form-control form-control-lg pB-3"
                    selectedCustomer={this.handleCustomer}
                  />
                </div>
              </div>
            </div>
            <div className="bgc-white bd m-3 mB-5 pT-4">
              <div className="row">
                <div className="col-2">
                  <label htmlFor="baserate">Base Rate ($)</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="baseRate"
                    onChange={this.handleChange}
                    placeholder=""
                  />
                </div>
                <div className="col-1">
                  <br />
                  <br />
                  per
                </div>
                <div className="col-2">
                  <label htmlFor="unitDesc">Unit</label>
                  <select
                    className="custom-select form-control form-control-lg"
                    name="unitDesc"
                    onChange={this.handleChange}
                  >
                    <option value="1">per gal</option>
                  </select>
                </div>
                <div className="col-3 ">
                  <label htmlFor="markupType">Markup Options </label>
                  <select
                    className="custom-select form-control form-control-lg"
                    name="markupType"
                    onChange={this.handleChange}
                  >
                    <option value="0">none</option>
                    <option value="fixed">fixed</option>
                    <option value="pct">percent</option>
                  </select>
                </div>
                <div className="col-2">
                  <label htmlFor="fixed">Fixed Rate </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    name="fixed"
                    onChange={this.handleChange}
                    placeholder=""
                    disabled= {this.state.fixmark}
                    value = {this.state.fixed}
                    
                  />
                </div>
                <div className="col-2">
                  <label htmlFor="pct">Percent Rate </label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    name="pct"
                    value={this.state.pct}
                    onChange={this.handleChange}
                    placeholder=""
                    disabled= {this.state.pctmark}
                    
                  />
                </div>
              </div>
              <div className="row mt-1 ">
              <div className="col-2">
              <label htmlFor="tax">Tax</label>
              <input 
                type="number" 
                className="form-control form-control-lg"
                name="tax"
                onChange={this.handleChange}
                />
              </div>
              <div className="col-2">
              <label htmlFor="storage">Storage Fee</label>
              <input 
                type="number" 
                className="form-control form-control-lg"
                name="storage"
                onChange={this.handleChange}
                />
              </div>
              <div className="col-2"></div>
              <div className="col-2  text-info my-auto ">
                  <button onClick={this.calculateFinalRate}> Calculate Final Rate</button>
                </div>
                
                <div className="col bg-info my-auto mx-auto">
                  <FinalRate final={this.state.final} />
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

export const FinalRate =props=>{
  return <h4 className="text-white">${props.final} per us gal. </h4>;
}