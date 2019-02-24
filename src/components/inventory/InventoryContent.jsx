import React, { Component } from "react";
import Axios from "axios";

const $ = require("jquery");
$.DataTable = require("datatables.net");
class InventoryContent extends Component {
  constructor(props) {
    super(props);
    this.state={payload:[]}
    this.fillReconTable = this.fillReconTable.bind(this);
  }

  async componentDidMount() {
    Axios.get("http://52.15.62.203:8080/getfuelrecon", {
      location: this.props.selectedLocation
    })
      .then(response => {
        console.log(response);
        this.setState({payload:response.data})
        this.fillReconTable();
      })
      .catch(error => {
        console.log(error.response);
      });

    console.log("sentpost req"); 
    
   
  }
  componentWillUnmount() {
    $(this.refs.fuelTable)
      .DataTable()
      .destroy(true);
  }

  fillReconTable() {
    $(this.refs.fuelTable).DataTable({
      data: this.state.payload,
      columns: [
        { title: "Date", data: "date_updated" },
        { title: "Customer", data: "customer_name" }, //sql join tickets on customerid table for name
        { title: "Company", data: "company_name" },
        { title: "Tail No", data: "tail_no" }, //sql join tickets for tail no
        
        { title: "Fuel Added", data: "added" },
        { title: "Fuel Uplifted", data: "uplifted" },
        { title: "Balance (USG)", data: "usg_balance" },
        { title: "Airport", data: "airport_code" },
        { title: "Ticket Ref", data: "fuelrequestID" }
      ]
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
            <div className="bgc-white bd bdrs-3 p-20 mB-20">
              <h4 className="c-grey-900 mB-20">
                
                Fuel Recon 
              </h4>

              <table
                id="fuelTable"
                className="table table-striped table-bordered"
                cellSpacing="0"
                width="100%"
                ref="fuelTable"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InventoryContent;
