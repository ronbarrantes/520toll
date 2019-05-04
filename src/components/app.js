import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTollInfo } from '../actions/toll'
import { tollData } from '../reducers/toll'


const App = ({ fetchTollInfo, toll }) => {
  useEffect(()=> {
    fetchTollInfo()
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <ul>
        {Object.keys(toll).map((spot, i) =>
          <li key={i}>
            {toll[spot].schedule}
          </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  toll: tollData(state),
})

const mapDispatchToProps = {
  fetchTollInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)