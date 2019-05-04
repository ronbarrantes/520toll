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

export const tollData = state => {
  return state.toll.todaySchedule
}

export default tollReducer