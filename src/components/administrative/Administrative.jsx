//Page with buttons to modify database tables though api

import React, { Component } from 'react';
import NewCustomerForm from './NewCustomerForm';
class Administrative extends Component {
    constructor(...args){
        super(...args);
        this.state = {newCustomerModal: false};
    }
    

    showFormNewCustomer=()=>{
        this.setState({
            newCustomerModal: true
        });

    };

    render() { 
        let modalClose = () => this.setState({ newCustomerModal: false });
        return ( 
            <main className="main-content bgc-grey-100">
        <div className="mainContent">
        <button
              className="btn btn-lg btn-primary" 
              onClick={this.showFormNewCustomer}
              
            >
              Create Customer
            </button>
            <NewCustomerForm show={this.state.newCustomerModal} onHide={modalClose}/>
            
        </div>
      </main>
         );
    }
}
 
export default Administrative; 