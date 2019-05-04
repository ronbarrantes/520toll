import React from 'react'

const TodaySchedule = ({ todaySchedule }) => {

  return (
    <ul>
      {Object.keys(todaySchedule).map((spot, i) =>
        <li key={i}>
          {todaySchedule[spot].schedule}
        </li>
      )}
    </ul>

  )
}

export default TodaySchedule