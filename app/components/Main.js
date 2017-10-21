import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCampuses from './AllCampuses'; //lists all campuses - can click on campus to take you to single campus
import AllStudents from './AllStudents'; //lists all students - can add student (form render)/ - can remove student from campus
import SingleStudent from './SingleStudent'; //lists student, pic, email, id
import SingleCampus from './SingleCampus'; //lists all students in campus - can also link to single student
import AddStudentForm from './AddStudentForm' //contains form for student name and select dropdown with campuses
import Navbar from './Navbar';
import { connect } from 'react-redux'
import { getCampusesThunk } from '../reducers/campuses'
import { getStudentsThunk } from '../reducers/students'
//import Home from './Home'

export class Main extends Component {

  componentDidMount() {
    console.log('in Main.js, this.props: ', this.props)
    this.props.getCampusesThunk()
    this.props.getStudentsThunk()
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="col-xs-10">
          <h5>UNIVERSITY OF CODE</h5>
          <Navbar />
            <Switch>
              <Route exact path='/campuses' component={AllCampuses} />
              <Route path='/campuses/:id' component={SingleCampus} />
              <Route exact path='/students' component={AllStudents} />
              <Route path='/students/:id' component={SingleStudent} />
              <Route path='/add-student-form' component={AddStudentForm} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { getCampusesThunk, getStudentsThunk };

export default connect(mapStateToProps, mapDispatchToProps)(Main)
