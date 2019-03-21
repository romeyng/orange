import React, { Component } from "react";

class CompaniesList extends Component {
  constructor(props) {
    super(props);
   
  }
  
  handleClick = event => {
this.props.handleClick(event);

  }
  render() { 





    return ( 
    <div className="card pr-1">
    <div className="card-body"> 
    <h4 className="card-title">Rates</h4>
    <div className="list-group ">
    {this.props.list}
    </div>
    </div>
    </div>
    
    
    );
  }
}
 
export default CompaniesList;


  
 