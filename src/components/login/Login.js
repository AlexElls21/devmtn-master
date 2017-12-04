import React, { Component } from 'react';
import book from './MaroonBook.svg'
import './Login.css'


export default class Login extends Component {
  render() {
    return (
      <div className='LoginParent'>
          <div className='LoginHome'>
            <img className='bookLogin' src={book} alt=""/>
            <h3>Book Exchange</h3>
            <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a>
            <button>Login / Register</button>
          </div>
      </div>
    );
  }
}
