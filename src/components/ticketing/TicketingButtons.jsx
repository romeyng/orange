import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

import CreateTicket from './CreateTicket';
class TicketingButtons extends Component {
    constructor(...args) {
        super(...args);
    
        this.state = { modalShow: false };
      }
    
    
    createTicketForm=() =>{
        this.setState({
            modalClose: true
        });
    }
    render() { 
        let modalClose = () => this.setState({ modalShow: false });
        return (
            
            <div className="container-fluid">
            <div className="row">
                <div className="p-3"><button className="btn btn-lg btn-primary" onClick={this.createTicketForm}>Create Request Ticket</button></div>
                <div className="p-3"><button className="btn btn-lg btn-warning">Edit Ticket</button></div>
            <CreateTicket
                show={this.state.modalShow}
                onHide={modalClose}
            />
                
            </div>
            </div>
            
          
       
              
         );
    }
}
 
export default TicketingButtons;