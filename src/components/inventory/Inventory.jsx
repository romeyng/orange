import React, { Component } from 'react';
class Inventory extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="container-fluid">
                
                  
                    
                  <div className="row">
                    <div className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
                    <div className="bgc-white bd bdrs-3 p-20 mB-20">
                      <h4 className="c-grey-900 mB-20">Fuel Inventory</h4>
                      <table id="dataTable" className="table table-striped table-bordered" cellSpacing="0" width="90%">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Fuel Type</th>
                              <th>Received</th>
                              <th>Uplifted</th>
                              <th>Balance</th>
                              <th>Ticket ref.</th>
                            </tr>
                          </thead>
                          
                          <tbody>
                            <tr>
                              <td>Jan 10 2019</td>
                              <td>A11</td>
                              <td>2000</td>
                              <td>-</td>
                              <td>4000</td>
                              <td>P2123</td>
                            </tr>
                            <tr>
                                <td>Jan 13 2019</td>
                                <td>A11</td>
                                <td>-</td>
                                <td>1500</td>
                                <td>2500</td>
                                <td>FU1234</td>
                            </tr>
                            <tr>
                                <td>Jan 15 2019</td>
                                <td>A11</td>
                                <td>2000</td>
                                <td>-</td>
                                <td>4500</td>
                                <td>P2123</td>
                              </tr>
                              <tr>
                                  <td>Jan 16 2019</td>
                                  <td>A11</td>
                                  <td>-</td>
                                  <td>1500</td>
                                  <td>3000</td>
                                  <td>FU1234</td>
                              </tr>
                            
                          </tbody>
                        </table>
                    </div>
                    </div>
                  </div>
                </div>
         );
    }
}
 
export default Inventory;