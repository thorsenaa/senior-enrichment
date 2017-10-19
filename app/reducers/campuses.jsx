import { combineReducers } from 'redux'
import axios from 'axios'

//action types
const GET_CAMPUSES = 'GET_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS'

//action creators
const getCampuses = (campuses) => ({ type: GET_CAMPUSES, campuses })
const addCampus = (campus) => ({ type: ADD_CAMPUS, addedCampus})

//thunks
export const getCampusesThunk = () => dispatch => {
  return axios.get('/api/campuses')
  .then(campuses => {
    dispatch(getCampuses(campuses.data))
  })
}

export const addCampusThunk = () => dispatch => {
  return axios.post('/api/campuses')
  .then(campus => {
    dispatch(addCampusThunk(campus.data))
  })
}

//reducer
const reducer = function(campuses = [], action) {
  switch(action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      return action.addedCampus;
    default: return campuses
  }
};

export default reducer
