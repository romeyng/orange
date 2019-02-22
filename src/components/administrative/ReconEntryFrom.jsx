import React, { Component } from 'react';
class ReconEntryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    
        this.handleChange = this.handleChange.bind(this);
        
      }
      postReconEntry =(e)=>{
          e.preventDefault();
          //TODO post request
      }
    render() { 
        return ( 
            <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Fuel Recon Entry
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
           
            <button
              className="btn btn-primary btn-lg"
              onClick={this.postReconEntry}
            >
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
         );
    }
}
 
export default ReconEntryForm;