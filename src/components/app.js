import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTollInfo } from '../actions/toll'
import { todaySchedule, currentTimeInfo } from '../reducers'

import CurrentTime from './current-time'
import TodaySchedule from './today-schedule'


const App = ({ fetchTollInfo, todaySchedule, currentTimeInfo }) => {

  useEffect(()=> {
    fetchTollInfo()
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      { currentTimeInfo && <CurrentTime currentTimeInfo={currentTimeInfo}  />}
      <TodaySchedule todaySchedule={todaySchedule}  />
    </div>
  )
}

const mapStateToProps = state => ({
  todaySchedule: todaySchedule(state),
  currentTimeInfo: currentTimeInfo(state),
})

const mapDispatchToProps = {
  fetchTollInfo,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)