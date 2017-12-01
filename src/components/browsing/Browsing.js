import React, { Component } from 'react';
import './Browsing.css'
import NavBar from '../nav/NavBar'
import { getBooks } from '../../ducks/reducer';
import { connect } from 'react-redux';


class Browsing extends Component {
  constructor(){
    super()
    this.state = {
      books:{},
      details: false
    }
    this.checkDetails = this.checkDetails.bind(this)
  }

  componentWillMount(){
    this.props.getBooks()
    console.log(this.state)
    console.log(this.state.details)
  }

  checkDetails(){
    this.setState({
      details: !this.state.details
    })
    console.log(this.state.details)
  }


  render() {
    return (
      <div className='browsingParent'>
      <NavBar />
        <div className='browseInventory'>
            <div className='browseHeader'>
              <header>
                <h2>Browse Inventory</h2>
                <div className='ul'>
                  <ul>In Stock</ul>
                  <ul>Out of Stock</ul>                  
                </div>
                <h3>Genre</h3>
                <input type="dropdown" id=""/>
              </header>
            </div>

            <div className='displayBook'>
              <img src="" alt="img"/>
              <div className='displayBook'>
                <div>
                  <h1>The Hobbit</h1>
                  <div>
                    <p>by</p>
                    <h2>JRR Tolkien</h2>
                  </div>
                </div>
                <div>
                  <h3>In Stock</h3>
                  <button onClick={() => this.checkDetails()
                  }>Details</button>
                  {/* <button onClick={console.log(this.state.details)}>details</button> */}
                </div>

              </div>
            </div>

        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
      books: state.books
  }
}


export default (connect(mapStatetoProps, {getBooks}))(Browsing)
