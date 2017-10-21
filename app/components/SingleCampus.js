import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingleCampusThunk} from '../reducers/singleCampus'
import AllStudents from './AllStudents'

export class SingleCampus extends Component {

    componentDidMount() {
        const campusId =Number(this.props.match.params.id);
        console.log("ComponentDidMount Campus Id: ",campusId)
        this.props.getSingleCampusThunk(campusId)
    }

    render () {
        const campus = this.props.campuses;
        console.log("campus", campus )
        console.log("this.props", this.props)
        console.log("UASDUASDUASDUAUDS", this.props.students)
        const students = this.props.students
        const filteredstudents = students.filter(function(student) {
            const campusId =Number(this.props.match.params.id)
            console.log("student.campusId", student.campusId)
            console.log("campus.id", campus.id)
            return student.campusId === campusId
        })
        console.log('FILTERED', filteredstudents)
        return (
            <div>
            <h3>Single Campus</h3>

            </div>
        );
    }
}

const mapStateToProps = ({students, campuses}) => ({students, campuses});
const mapDispatchToProps = { getSingleCampusThunk };

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
