import React, { Component } from 'react'

// Dependencies
import axios from 'axios'
import { State } from '@store'
import { connect } from 'react-redux'
import { Authorized } from '@navigation/routes/Authorized'
import { Unauthorized } from '@navigation/routes/Unauthorized'
import { NavigationContainer } from '@react-navigation/native'

export default class AppContainer extends Component { 
  render() {
    // const Routes = () =>   false ? (<Authorized/>) : (<Unauthorized/>)

    // return (
    //   <NavigationContainer>
    //     <Routes />
    //   </NavigationContainer>
    // )
  }
}
