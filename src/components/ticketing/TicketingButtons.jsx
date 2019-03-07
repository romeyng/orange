import React, { Component } from "react";

import CreateTicket from "./CreateTicket";
import { SupplyTicket } from "./SupplyTicket";
class TicketingButtons extends Component {
  constructor(...args) {
    super(...args);

    this.state = { modalShow: false };
    this.state = { showSupplyForm: false };
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

  showSupplyForm = () => {
    this.setState({ showSupplyForm: true });
  };
  render() {
    let modalClose = () =>
      this.setState({ modalShow: false, showSupplyForm: false });
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
            <button
              className="btn btn-lg btn-warning"
              onClick={this.showSupplyForm}
            >
              New Supply Ticket
            </button>
          </div>
          <CreateTicket show={this.state.modalShow} onHide={modalClose} />
          <SupplyTicket
            show={this.state.showSupplyForm}
            onChange={this.handleChange}
            onHide={modalClose}
          />
        </div>
      </div>
    );
  }
}

export default TicketingButtons;
