import React, { Component } from 'react';
class TicketsTable extends Component {
    state = {  }
    render() { 
        return ( 
            
                  
                    
                  <div className="row">
                    <div className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
                    <div className="bgc-white bd bdrs-3 p-20 mB-20">
                      <h4 className="c-grey-900 mB-20">Ticket Requests</h4>
                      <table id="dataTable" className="table table-striped table-bordered" cellspacing="0" width="90%">
                          <thead>
                            <tr>
                              <th>Ticket No</th>
                              <th>Date Created</th>
                              <th>Due Date</th>
                              <th>Client Name</th>
                              <th>Tail Number</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          
                          <tbody>
                            <tr>
                              <td>FU12345</td>
                              <td>Jan 10 2019</td>
                              <td>Jan 10 2019</td>
                              <td>Grenadines Air</td>
                              <td>S5596</td>
                              <td>Completed</td>
                            </tr>
                            <tr>
                              <td>AS54321</td>
                              <td>Jan 1 2019</td>
                              <td>Jan 10 2019</td>
                              <td>Gama Aviation</td>
                              <td>L1564</td>
                              <td>Pending</td>
                            </tr>
                            <tr>
                                <td>FU12345</td>
                                <td>Jan 10 2019</td>
                                <td>Jan 10 2019</td>
                                <td>Grenadines Air</td>
                                <td>S5596</td>
                                <td>Completed</td>
                              </tr>
                              <tr>
                                <td>AS54321</td>
                                <td>Jan 1 2019</td>
                                <td>Jan 10 2019</td>
                                <td>Gama Aviation</td>
                                <td>L1564</td>
                                <td>Pending</td>
                              </tr>
                            
                          </tbody>
                        </table>
                    </div>
                    </div>
                  </div>
         );
    }
}
 
export default TicketsTable;