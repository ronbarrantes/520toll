import { createSelector } from 'reselect'

const initialState = {
  tollInfo: 'Hello',
}

const tollReducer = (toll = initialState, action) => {
  return toll
}

export default tollReducer