import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTollInfo } from '../actions/toll'


const App = ({ fetchTollInfo }) => {

  // TODO: fix the fetching function

  /*
  useEffect(()=> {
    fetchTollInfo()
  }, [])
  */

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  fetchTollInfo,
}

export default connect(null, mapDispatchToProps)(App)