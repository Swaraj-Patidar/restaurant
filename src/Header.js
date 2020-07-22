import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Header.css';

export default function Header() {
  return (
        <div className='App-name'>
          <div className='App-symbol'>
            <i className='fa fa-cutlery fa-2x black' aria-hidden='true' />
          </div>
          <div className='App-title'>
          <Link className='App-title__link'to='/'>
            <h1>Restaurant Finder</h1>
          </Link>
          </div>
        </div>          
  )
};