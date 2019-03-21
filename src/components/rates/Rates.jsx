import React, { Component } from "react";
import RatesTable from "./RatesTable";
import AddRate from "../administrative/AddRateForm";
import CompaniesList from "./CompaniesList";
import axios from "axios";
class Rates extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      formAddRate: false,
      selectedCompany: null
    };
  }
  showFormAddRate = e => {
    e.preventDefault();
    this.setState({ formAddRate: true });
  };
  reloadRates= async ()=>{
    console.log("called reload rates");
    
    let res = await axios.get("http://52.15.62.203:8080/getrates")
      let data = await res.data;
      this.setState({ ratesList: data });
        
    
    
     
    

    
  }

  async componentDidMount() {
    console.log("getcompanies called");
    try {
      let res = await axios.get("http://52.15.62.203:8080/getcompanies")
      let data = await res.data;
          console.log(data);
          var arr = [<button type="button"
          name="selectedCompany"
          value="all"
          className="list-group-item list-group-item-action"
          onClick={this.handleClick}>All</button>,
          <button type="button"
          name="selectedCompany"
          value="0"
          className="list-group-item list-group-item-action"
          onClick={this.handleClick}>General</button>,<hr/>];
          for (var k = 0; k < data.length; k++) {
            arr.push(
              <button
              type="button"
                name="selectedCompany"
                value={data[k].companyID}
                className="list-group-item list-group-item-action"
                onClick={this.handleClick}
              >
                {data[k].company_name}
              </button>
            );
          }
          this.reloadRates();
          this.setState({
            companies: arr
          });
        
        
    } catch {
      console.log("there was an error");
    }
  }

  handleClick = event => {
    
    event.preventDefault();
    console.log("clciked");
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]:value})

    
  };
  showForm =event =>{
    event.preventDefault();
    this.setState({[event.target.name]: true})
  }

  render() {
    let modalClose = e => this.setState({ formAddRate: false });
    return (
      <main className="main-content bgc-grey-100">
        
        <AddRate show={this.state.formAddRate} onHide={modalClose} reloadRates={this.reloadRates} />

        <div className="mainContent row">
          <div className="col-2 p-0">
            <CompaniesList list={this.state.companies} handleClick={this.handleClick}/>
          </div>
          <div className="col-10 p-0">
            <RatesTable selectedCompany={this.state.selectedCompany} showForm={this.showForm} ratesList={this.state.ratesList}/>
          </div>
        </div>
      </main>
    );
  }
}

export default Rates;
