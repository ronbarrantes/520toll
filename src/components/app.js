import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTollInfo } from '../actions/toll'
import { todayInfo, todaySchedule, currentTimeInfo } from '../reducers'


const App = ({ fetchTollInfo, todaySchedule, todayInfo, currentTimeInfo }) => {

  console.log('Current time -->',currentTimeInfo)

  useEffect(()=> {
    fetchTollInfo()
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{`Today is ${todayInfo.dayName || ''}`}</p>
      <ul>
        {Object.keys(todaySchedule).map((spot, i) =>
          <li key={i}>
            {todaySchedule[spot].schedule}
          </li>
        )}
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  todayInfo: todayInfo(state),
  todaySchedule: todaySchedule(state),
  currentTimeInfo: currentTimeInfo(state),
})

const mapDispatchToProps = {
  fetchTollInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)