import React, { Component } from "react";

import CreateTicket from "./CreateTicket";
class TicketingButtons extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
  }

  createTicketForm = () => {
    this.setState({
      modalShow: true
    });
  };
  render() {
    let modalClose = () => this.setState({ modalShow: false });
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="p-3">
            <button
              className="btn btn-lg btn-primary"
              onClick={this.createTicketForm}
            >
              New Uplift Ticket
            </button>
          </div>
          <div className="p-3">
            <button className="btn btn-lg btn-warning">
              New Supply Ticket
            </button>
          </div>
          <CreateTicket show={this.state.modalShow} onHide={modalClose} />
        </div>
      </div>
    );
  }
}

export default TicketingButtons;
