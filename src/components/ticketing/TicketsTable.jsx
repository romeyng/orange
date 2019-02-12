import React, { Component } from 'react';
const $ = require('jquery')
$.DataTable =  require('datatables.net')
class TicketsTable extends Component {
  constructor(props){
    super(props);
    this.state={
      payload: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json=>{
        this.setState({
          isLoaded: true,
          payload: json
        })
      });

    this.$el = $(this.el)
    this.$el.DataTable({
      data: this.state.payload,
      columns: [
            { title: "Address" },
            { title: "Company" },
            { title: "Email" },
            { title: "id" },
            { title: "Name" },
            { title: "Phone" },
            { title: "username"},
            { title: "website"}
      ]
    })
  }
  componentWillUnmount() {
    this.$el.DataTable.destroy(true)
  }
  shouldComponentUpdate() {
    return false
  }

    

    
    render() { 
        return ( 
            
                  
          <div className="container-fluid">  
                  <div className="row">
                    <div className="table-responsive-sm table-responsive-md table-responsive-lg table-responsive-xl">
                    <div className="bgc-white bd bdrs-3 p-20 mB-20">
                      <h4 className="c-grey-900 mB-20">Ticket Requests</h4>
                      <table id="dataTable" className="table table-striped table-bordered" cellSpacing="0" width="100%" ref={el=>this.el =el}>
                          
                        </table>
                    </div>
                    </div>
                  </div>
                  </div>
         );
    }
}
 
export default TicketsTable;