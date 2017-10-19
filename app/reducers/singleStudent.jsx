import { combineReducers } from 'redux'
import axios from 'axios'

//action types
const GET_SINGLESTUDENT = 'GET_SINGLESTUDENT'


//action creators
const getSingleStudent = (student) => ({ type: GET_SINGLESTUDENT, student })

//thunks
export const getSingleStudentThunk = () => dispatch => {
  return axios.get('/api/students/:id')
  .then(student => {
    dispatch(getSingleStudentThunk(student.data))
  })
}

//reducer
const reducer = function(student = [], action) {
  switch(action.type) {
    case GET_SINGLESTUDENT:
      return action.student;
    default: return student
  }
};

export default reducer
