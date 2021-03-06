import { combineReducers } from 'redux'
import axios from 'axios'

//action types
const GET_STUDENTS = 'GET_STUDENTS'
const ADD_STUDENT = 'ADD_STUDENT'

//action creators
const getStudents = (students) => ({ type: GET_STUDENTS, students })
const addStudent = (student) => ({ type: ADD_STUDENT, student})

//thunks
export const getStudentsThunk = () => dispatch => {
  return axios.get('/api/students')
  .then(students => {
    dispatch(getStudents(students.data))
  })
}

export const addStudentThunk = (student) =>  dispatch => {
  return axios.post('/api/students', student)
  .then(res => res.data)
  // .then(student => {console.log("SNIFSDNSIDNFISDF", student)})
  .then(student => {
    dispatch(addStudent(student))
  })
}

//reducer
const reducer = function(students = [], action) {
  switch(action.type) {
    case GET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return action.student;
    default: return students
  }
};

export default reducer
