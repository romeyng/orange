import React, { Component } from 'react';
import axios from "axios";
class CustomersDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = { customerOptions:[],customerID:"0"

                      };
                      
      }

componentDidMount() {
    axios.get("http://52.15.62.203:8080/getcustomers")
      .then(({ data }) => {
        var arr=[];
        for (var k = 0; k < data.length; k++) {
          arr.push(<option key={data[k].customerID} value={data[k].customerID}> {data[k].customer_name} </option>);
      }
        this.setState({
          customerOptions: arr
        });
        this.props.selectedCustomer(this.state.customerID)
      });
}

      handleChange=(event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value

         
        });
        this.props.selectedCustomer(this.state.customerID)
   

      }
    render() { 
        return ( 
            <div>
            <label htmlFor="customerID">Customer</label>
                <select className={this.props.classList} name="customerID"
                          value={this.state.customerID}
                          onChange={this.handleChange}>
                          {this.state.customerOptions}
                          
                          
                  </select>
                  </div>
         );
    }
}
 
export default CustomersDropDown;