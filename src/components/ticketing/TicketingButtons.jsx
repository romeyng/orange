import React, { Component } from "react";

import CreateTicket from "./CreateTicket";
import { SupplyTicket } from "./SupplyTicket";
class TicketingButtons extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      modalShow: false,

      receiveDate: new Date()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //function changes state as form values are editted

    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (target.type == "checkbox") {
      this.setState({ [name]: target.checked });
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  createTicketForm = () => {
    this.setState({
      modalShow: true
    });
  };
  dateChange = receiveDate => this.setState({ receiveDate });

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
        </div>
        <CreateTicket show={this.state.modalShow} onHide={modalClose} />
      </div>
    );
  }
}

export default TicketingButtons;
