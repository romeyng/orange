import React, { Component } from "react";
import Axios from "axios";
import { Button, ButtonToolbar } from "react-bootstrap";
import moment from "moment";

const $ = require("jquery");
$.DataTable = require("datatables.net");
class RatesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { payload: [] };
    this.fillRatesTable = this.fillRatesTable.bind(this);
  }

  async componentDidMount() {
    Axios.get("http://52.15.62.203:8080/getrates")
      .then(response => {
        console.log(response);
        this.setState({ payload: response.data });
        this.fillRatesTable();
      })
      .catch(error => {
        console.log(error.response);
      });

    console.log("sentpost req");
  }
  componentWillUnmount() {
    $(this.refs.ratesTable)
      .DataTable()
      .destroy(true);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("scu");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getderv");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("cdu");
  }

  fillRatesTable() {
    $(this.refs.ratesTable).DataTable({
      data: this.state.payload,

      columns: [
        {
          title: "Date",
          data: "date_created",
          render: () => moment(this.data).format("MM-DD-YYYY")
        },
        { title: "Rate Name", data: "rate_name" },
        { title: "Airport", data: "airport_code" },
        { title: "Base Rate", data: "base_rate" },
        { title: "Final Rate", data: "final_rate"},
        { title: "Description", data: "rate_desc" },

        { title: "Unit", data: "unit_desc" }
      ]
    });
  }
  render() {
    console.log("rendering");
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
            <div className="bgc-white bd bdrs-3 p-20 mB-20">
              <RateTableActions showForm={this.props.showForm}/>

              <table
                id="ratesTable"
                className="table table-striped table-bordered"
                cellSpacing="0"
                width="100%"
                ref="ratesTable"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RatesTable;

const RateTableActions = props => {
  return (
    <div className="row">
      <div className="col-6">
        <h4 className="c-grey-900 mB-20">Active Rates - March 2019</h4>
      </div>
      <div className="col-6" >
        <Button
          className="mx-2"
          name="formAddRate"
          variant="outline-success"
          type="button"
          onClick={props.showForm}
          
        >
          <span className="icon-holder mx-1">
            <i className="ti-plus " />
          </span>
          Add
        </Button>
        <Button
          className="mx-2"
          name="editRate"
          variant="outline-warning"
          type="button"
        >
          <span className="icon-holder mx-1">
            <i className="ti-write " />
          </span>
          Edit
        </Button>
        <Button
          className="mx-2"
          name="sendRate"
          variant="outline-info"
          type="button"
        >
          <span className="icon-holder mx-1">
            <i className="ti-email " />
          </span>
          Send
        </Button>
      </div>
    </div>
  );
};
