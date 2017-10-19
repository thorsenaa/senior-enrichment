import { combineReducers } from 'redux'
import campuses from './campuses'
import students from './students'
import singleCampus from './singleCampus'
import singleStudent from './singleStudent'

const rootReducer = combineReducers({campuses, students, singleStudent, singleCampus})
export default rootReducer
