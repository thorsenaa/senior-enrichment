import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import AllStudents from './AllStudents'
import {addStudentThunk} from '../reducers/students'

export class AddStudentForm extends Component {

    // constructor(props) {
    //     super(props)
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleSubmit(event) {
    //     event.preventDefault();
    //     const newStudent = {
    //         name: event.target.studentname.value,
    //         campusId: 1
    //     }
    //     console.log(newStudent, this.props)
    //     addStudentThunk(newStudent)
    // }

    render () {
        const {handleSubmit, campus} = this.props
        console.log(this.props)
        
        return (
            <div>
            <h3>Add Student</h3>
            <form onSubmit={handleSubmit}>


              <input
                name="studentname"
                type="text"
                placeholder="Type Name"
                 />

            <br />


          </form>
            </div>
        );
    }
};

const mapStateToProps = ({campus}) => ({campus});
// const mapDispatchToProps = dispatch => { addStudentThunk };

const mapDispatchToProps = (dispatch) => {
    return{
        handleSubmit(event) {
            event.preventDefault();
            const newStudent = {
                name: event.target.studentname.value,
                campusId: 1
            }
            console.log(newStudent)
            dispatch(addStudentThunk(newStudent))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddStudentForm);