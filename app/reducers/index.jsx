import { combineReducers } from 'redux'
import campuses from './campuses'
import students from './students'

const rootReducer = combineReducers({campuses, students})
//const rootReducer = combineReducers({campuses, students, singleStudent, singleCampus})
export default rootReducer
