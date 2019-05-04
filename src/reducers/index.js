import { combineReducers } from 'redux'

import tollReducer, * as fromTollReducer from './toll'

const rootReducer = combineReducers({
  toll: tollReducer,
})

export const tollData = (state) => fromTollReducer.tollData(state)

export default rootReducer