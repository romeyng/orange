import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import Axios from "axios";

const Suggestions = props => {
  const options = props.results.map(r => <li key={r.id}>{r.customer_name}</li>);
  return <ul>{options}</ul>;
};

class CustomerLookup extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", results: [] };
  }

  handleChange = () => {
    this.setState({ query: this.search.value }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getCustomers();
        }
      }
    });
  };

  getCustomers = () => {
    Axios.get("http://52.15.62.203:8080/getcustomers").then(({ data }) => {
      this.setState({
        results: data
      });
    });
  };
  render() {
    let modalClose;
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Customer Lookup
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row">
            <div className="search-input input-group mx-5">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Search..."
                ref={input => (this.search = input)}
                onChange={this.handleChange}
              />
              <Suggestions results={this.state.results} />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default CustomerLookup;
