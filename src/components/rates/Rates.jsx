import React, { Component } from 'react';
import RatesTable from './RatesTable';
import AddRate from '../administrative/AddRateForm';
class Rates extends Component {
  constructor(...args) {
    super(...args);
    this.state = { 
                    formAddRate: false 
                  };
  }
  showFormAddRate=(e)=>{
    e.preventDefault();
    this.setState({formAddRate: true})

  }
    render() { 
      let modalClose = (e) => this.setState({ formAddRate:false});
        return ( 
            <main className="main-content bgc-grey-100">
        <div className="mainContent">
        <button className="mX-4 btn btn-lg btn-primary"
            onClick={this.showFormAddRate} >
            Add Rate</button>
        <AddRate  show={this.state.formAddRate} onHide={modalClose}/>
          <RatesTable/>
        </div>
      </main>
        );
    }
}
 
export default Rates;