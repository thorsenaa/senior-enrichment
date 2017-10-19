import axios from 'axios'

//action types
const GET_SINGLECAMPUS = 'GET_SINGLECAMPUS'


//action creators
const getSingleCampus = (campus) => ({ type: GET_SINGLECAMPUS, campus })

//thunks
export const getSingleCampusThunk = (campusId) => dispatch => {
  console.log("REDUCER CAMPUS ID: ", campusId)
  return axios.get(`/api/campuses/${campusId}`)
  .then(campus => console.log("INSIDE PROMISE campus.data.name", campus.data.name))
  .then(campus => {
    dispatch(getSingleCampus(campus.data))
  })
}

//reducer
const reducer = function(campus = [], action) {
  switch(action.type) {
    case GET_SINGLECAMPUS:
    console.log("action.campus: ", action.campus)
      return action.campus;
    default: return campus
  }
};

export default reducer
