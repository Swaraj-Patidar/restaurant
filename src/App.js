//import logo from './logo.svg';
import './styles/App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Search from './Search';


const App = (props) => (
  <div className="App">  
    <Search {...props}/>
  </div>
)

export default App;
