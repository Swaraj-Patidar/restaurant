import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';


class Home extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          fname: '',
          email:'',
          number:''
        
        }
      }
    
      handleChange(e){
        e.preventDefault();
          this.setState({ [e.target.name]: e.target.value });
      }
    
      handleSubmit(e){
       e.preventDefault();
       let count;

        let contact = {
            name: this.state.fname,
            email: this.state.email,
            number: this.state.number
          }
          this.props.createContact(contact);  
         ++count
        }

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
  
      deleteContact(e, index){
        e.preventDefault();
        this.props.deleteContact(index);
      }

    
      


      render() {
        //let name;
        // if(this.props.contacts[0]!=undefined)
        // {
        //   this.state.fname=this.props.contacts[0].name
        // }
        
        return(
            <div className="container">
            <h1>Registration Form</h1>
            <hr />
            <div>
              
              <form onSubmit={this.handleSubmit}>
               <label>Name</label><input type="text" name="fname" onChange={this.handleChange} className="form-control" value={this.state.fname}/><br />
               <label>Email</label><input type="email" name="email" onChange={this.handleChange} className="form-control" value={this.state.email}/><br />
               <label>Number</label><input type="number" name="number" onChange={this.handleChange} className="form-control" value={this.state.number}/><br /> 
                <input type="submit" className="btn btn-success" value="Submit"/>
              </form>
              <hr />
             {/* <ul className="list-group">
              {this.props.contacts.map((contact, i) => this.listView(contact, i))}
            </ul>  */}
            </div>
          </div>
        );
        
      }
}

const mapStateToProps = (state, ownProps) => {
  //console.log("chala"+state.contacts)
    return {
      contacts: state.contacts
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      createContact: contact => dispatch(contactAction.createContact(contact)),
      deleteContact: index =>dispatch(contactAction.deleteContact(index))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);