import { combineReducers } from 'redux'
import axios from 'axios'

//action types
const GET_SINGLECAMPUS = 'GET_SINGLECAMPUS'


//action creators
const getSingleCampus = (campus) => ({ type: GET_SINGLECAMPUS, campus })

//thunks
export const getSingleCampusThunk = () => dispatch => {
  return axios.get('/api/campuses/:id')
  .then(campus => {
    dispatch(getSingleCampusThunk(campus.data))
  })
}

//reducer
const reducer = function(campus = [], action) {
  switch(action.type) {
    case GET_SINGLECAMPUS:
      return action.campus;
    default: return campus
  }
};

export default reducer
