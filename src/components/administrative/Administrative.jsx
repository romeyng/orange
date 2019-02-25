//Page with buttons to modify database tables though api

import React, { Component } from "react";
import NewCustomerForm from "./NewCustomerForm";
import AddLocationForm from "./AddLocationForm";
import { flexibleCompare } from "fullcalendar";
import AddRate from "./AddRateForm";
class Administrative extends Component {
  constructor(...args) {
    super(...args);
    this.state = { formCustomerModal: false,
                    formAddLocation: false,
                    formAddRate: false 
                  };
  }

  showFormNewCustomer = (e) => {
    e.preventDefault();
    this.setState({
      formCustomerModal: true
    });
  };

  showFormAddLocation =(e)=>{
    e.preventDefault();
    this.setState({formAddLocation:true});

  }

  showFormAddRate=(e)=>{
    e.preventDefault();
    this.setState({formAddRate: true})

  }

  render() {
    let modalClose = (e) => this.setState({ formCustomerModal: false, formAddLocation: false, formAddRate:false
     });
    return (
      <main className="main-content bgc-grey-100">
        <div className="mainContent">
          <button
            className="mX-4 btn btn-lg btn-primary"
            onClick={this.showFormNewCustomer}
          >
            Create Customer
          </button>

          <button className="mX-4 btn btn-lg btn-primary"
            onClick={this.showFormAddLocation} >
            Add Location</button>

            <button className="mX-4 btn btn-lg btn-primary"
            onClick={this.showFormAddRate} >
            Add Rate</button>
          <NewCustomerForm
            show={this.state.formCustomerModal}
            onHide={modalClose}
          />
          <AddLocationForm show={this.state.formAddLocation} onHide={modalClose}/>
          <AddRate show={this.state.formAddRate} onHide={modalClose}/>
        </div>
      </main>
    );
  }
}

export default Administrative;
