import axios from 'axios'

//action types
const GET_SINGLESTUDENT = 'GET_SINGLESTUDENT'


//action creators
const getSingleStudent = (student) => ({ type: GET_SINGLESTUDENT, student })

//thunks
export const getSingleStudentThunk = (studentId) => dispatch => {
  console.log('STUDENT ID IN REDUCERS: ', studentId)
  return axios.get(`/api/students/${studentId}`)
  .then(student => console.log("INSIDE PROMISE student.data.name", student.data.name))
  .then(student => {
    dispatch(getSingleStudent(student.data))
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
