import React, { Component } from "react";
import moment from "moment";
const $ = require("jquery");
$.DataTable = require("datatables.net");
class TicketsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: [],
      isLoaded: false
    };
    this.fillTicketsTable = this.fillTicketsTable.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://52.15.62.203:8080/");
      const json = await response.json();
      this.setState({ payload: json });
    } catch {}
    console.log("async done");
    this.fillTicketsTable();
  }
  componentWillUnmount() {
    $(this.refs.tickets)
      .DataTable()
      .destroy(true);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  fillTicketsTable() {
    $(this.refs.tickets).DataTable({
      data: this.state.payload,
      columns: [
        { title: "Ticket No.", data: "fuelrequestID" },
        {
          title: "Date Created",
          data: "arrival_date",
          render: () => moment(this.data).format("MM-DD-YYYY")
        },
        {
          title: "Due Date",
          data: "required_on",
          render: () => moment(this.data).format("MM-DD-YYYY")
        },
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
              <h4 className="c-grey-900 mB-20">Ticket Requests</h4>

              <table
                id="dataTable"
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

export default TicketsTable;
