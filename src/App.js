import React, { Component } from 'react';
import { connect } from 'react-redux'
import router from './utils/routes'
import { add, remove } from './ducks/cart'

import Navbar from './comps/Navbar'



class App extends Component {
  render() {

    const {
      cart,
      add,
      remove
    } = this.props

    return (
      <div className="App">
         <Navbar 
          add={add}
          remove={remove}/> 
        {router}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return state
}

export default connect(mapStateToProps, { add, remove })(App);

