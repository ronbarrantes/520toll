import React from 'react'

const CurrentTime = props => {

  const {
    dayName, goodToGo, holidayName,
    payByMail, schedule,
  } = props.currentTimeInfo

  return (
    <div>
      <p>{holidayName}</p>
      <p>{dayName}</p>
      <p>{schedule}</p>
      <p>{goodToGo}</p>
      <p>{payByMail}</p>
    </div>
  )
}

export default CurrentTime