import React, { Component } from "react";

class CompaniesList extends Component {
  constructor(props) {
    super(props);
   
  }
  componentDidUpdate(prevProps, prevState) {
    
  }

  
  render() { 





    return ( 
    <div className="card pr-1">
    <div class="card-body"> 
    <h4 class="card-title">Pick Category</h4>
    <div class="list-group ">
    {this.props.list}
    </div>
    </div>
    </div>
    
    
    );
  }
}
 
export default CompaniesList;


  
 