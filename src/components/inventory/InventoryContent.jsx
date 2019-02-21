import React, { Component } from "react";
const $ = require("jquery");
$.DataTable = require("datatables.net");
class InventoryContent extends Component {
  fillTicketsTable() {
    $(this.refs.tickets).DataTable({
      data: this.state.payload,
      columns: [
        { title: "Ticket No.", data: "fuelrequestID" },
        { title: "Date Created", data: "arrival_date" },
        { title: "Due Date", data: "required_on" },
        { title: "Client Name", data: "customerID" },
        { title: "Tail No", data: "tail_no" },
        { title: "Status", data: "status" }
      ]
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
            <div className="bgc-white bd bdrs-3 p-20 mB-20">
              <h4 className="c-grey-900 mB-20">Inventory </h4>

              <table
                id="inventoryTable"
                className="table table-striped table-bordered"
                cellSpacing="0"
                width="100%"
                ref="tickets"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryContent;
