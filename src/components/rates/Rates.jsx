import React, { Component } from 'react';
import RatesTable from './RatesTable';
class Rates extends Component {
    state = {  }
    render() { 
        return ( 
            <main className="main-content bgc-grey-100">
        <div className="mainContent">
          <RatesTable/>
        </div>
      </main>
        );
    }
}
 
export default Rates;