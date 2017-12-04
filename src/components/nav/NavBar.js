import React from 'react';
import './NavBar.css'


export default function NavBar(){ 
    return (
      <div className='NavParent'>
        <div className='NavBar'>
            <div className='Leftside'>
                <p>Logo</p>
                <h3>Browse</h3>
                <h3>Cart</h3>
                <h3>MyShelf</h3>
            </div>
            <h3>Logout</h3>
        </div>
      </div>
    );
}

