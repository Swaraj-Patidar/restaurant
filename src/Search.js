import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setCity} from './actions/city';
import { resetState } from './actions/city';
import {thunkRestaurants} from './actions/restaurant';
import './styles/Summary.css';

 
class Search extends Component
{

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      city:'' 
    }
  }

  handleChange(e){
     e.preventDefault();
       this.setState({ city: e.target.value });
  }

  handleSubmit(e){
   e.preventDefault();
  //  console.log(this.state.city);
   this.props.dispatch(resetState());
   this.props.dispatch(setCity(this.state.city));
   this.props.dispatch(thunkRestaurants(this.state.city, 1));
   this.props.history.push('/listing');
  }


  render() {  
  return (
    <div className='content-container content'>
      <div className='page-header'>
        <h2 className="page-header__title">Find your perfect restaurant</h2>
      </div>
     
      <div class="search-container">
       <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search by city" name="city" onChange={this.handleChange} value={this.state.city} required/>
        <button type="submit"><i class="fa fa-search"></i></button>
       </form>
      </div>
    </div>
  )
  }
}

export default connect()(Search);