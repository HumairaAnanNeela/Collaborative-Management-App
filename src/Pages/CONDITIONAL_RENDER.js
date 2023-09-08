import React, { Component } from 'react'
import HomePage from './HomePage'
import LoginSingIn from './LoginSingIn'

export default class CONDITIONAL_RENDER extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn :false
        }
      }
  render() {
    
    if(this.state.isLoggedIn){
        return < HomePage/>
    }
    else{
        return <LoginSingIn/>
    }
  }
}
