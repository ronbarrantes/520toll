import { FETCH_TOLL_INFO } from '../constants/action-types'
import { setTollInfo } from '../actions/toll'
const apiURL = process.env.API_URL

const fetchInfo = ({ dispatch, getState }) => next => action => {

  if(action.type !== FETCH_TOLL_INFO)
    next(action)

  fetch(`${apiURL}/api/toll`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      dispatch(setTollInfo(data))
    })
    .catch(err=>console.log('ERROR:',err))
}


export default fetchInfo