import { createSelector } from 'reselect'
import { SET_TOLL_INFO } from '../constants/action-types'

const initialState = {
  todayInfo:{},
  todaySchedule:{},
}

const tollReducer = (toll = initialState, action) => {
  switch (action.type) {
    case SET_TOLL_INFO:
      return action.payload
    default:
      return toll
  }
}

export const todayInfo = state => state.toll.todayInfo
export const todaySchedule = state => state.toll.todaySchedule

export const currentTimeInfo = createSelector(
  todayInfo,
  todaySchedule,
  (info, schedule) => {
    for(let i = info.hour; i >= 0; i--){
      if(schedule[i]){
        return{
          dayName: info.dayName,
          holidayName: info.holidayName,
          ...schedule[i],
        }
      }
    }
  }
)

export default tollReducer