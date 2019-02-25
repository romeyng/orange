import React, { Component } from 'react';
import Axios from "axios";

const $ = require("jquery");
$.DataTable = require("datatables.net");
class RatesTable extends Component {
    constructor(props) {
        super(props);
        this.state={payload:[]}
        this.fillRatesTable = this.fillRatesTable.bind(this);
      }


    async componentDidMount() {
        Axios.get("http://52.15.62.203:8080/getrates")
          .then(response => {
            console.log(response);
            this.setState({payload:response.data})
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
    fillRatesTable() {
        $(this.refs.ratesTable).DataTable({
          data: this.state.payload,
          columns: [
            { title: "Airport", data: "airport_code" },
            { title: "Fuel Type", data: "name" },
            { title: "Rate Name", data: "rate_name" }, 
            
             
            
            { title: "Description", data: "rate_desc" },
            { title: "Rate", data: "base_rate" },
            { title: "Unit", data: "unit_desc" }
            
            
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
                
                Rates Table 
              </h4>

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