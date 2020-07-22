import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';

class About extends Component {

   listView(data, index){
        
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name}
          </li>
          <li key={index} className="list-group-item clearfix">
            {data.email}
          </li>
          <li key={index} className="list-group-item clearfix">
            {data.number}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div> 
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Registered Details</h1>
            <hr />
      <div>
       <ul className="list-group">
        {this.props.contacts.map((contact, i) => this.listView(contact, i))}
      </ul> 
      </div>
    </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  // console.log("chala"+state.contacts)
    return {
      contacts: state.contacts
    }
  };
  
  /* const mapDispatchToProps = (dispatch) => {
    return {
       createContact: contact => dispatch(contactAction.createContact(contact)),
       deleteContact: index =>dispatch(contactAction.deleteContact(index))
     }
   }; */
  
  export default connect(mapStateToProps)(About);

