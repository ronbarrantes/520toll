import { SET_TOLL_INFO, FETCH_TOLL_INFO } from '../constants/action-types'

export const setTollInfo = (payload) => ({
  type: SET_TOLL_INFO, payload,
})

export const fetchTollInfo = () => ({
  type: FETCH_TOLL_INFO,
})