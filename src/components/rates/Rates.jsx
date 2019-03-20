import React, { Component } from "react";
import RatesTable from "./RatesTable";
import AddRate from "../administrative/AddRateForm";
import { CompaniesList } from "./CompaniesList";
import axios from "axios";
class Rates extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      formAddRate: false
    };
  }
  showFormAddRate = e => {
    e.preventDefault();
    this.setState({ formAddRate: true });
  };

  async componentDidMount() {
    console.log("getcustomers called");
    axios.post("http://52.15.62.203:8080/getcompanies").then(({ data }) => {
      console.log(data);
      var arr = [];
      for (var k = 0; k < data.length; k++) {
        arr.push(
          <li>
            <a>{data[k].company_name}</a>
          </li>
        );
      }
      this.setState({
        companies: arr
      });
    });
  }

  render() {
    let modalClose = e => this.setState({ formAddRate: false });
    return (
      <main className="main-content bgc-grey-100">
        <button
          className="mX-4 btn btn-lg btn-primary"
          onClick={this.showFormAddRate}
        >
          Add Rate
        </button>
        <AddRate show={this.state.formAddRate} onHide={modalClose} />

        <div className="mainContent row">
          <div className="col-2 p-0">
            <CompaniesList companies={this.state.companies} />
          </div>
          <div className="col-10 p-0">
            <RatesTable />
          </div>
        </div>
      </main>
    );
  }
}

export default Rates;
