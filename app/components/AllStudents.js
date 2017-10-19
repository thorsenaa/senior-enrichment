import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getStudentsThunk} from '../reducers/students'

export class AllStudents extends Component {

    render () {
        return (
            <div>
            <h3>All Students</h3>
            <div>
            {
                this.props.students.map(student => (
                    <Link to={`/students/${student.id}`}>
                    <li key={student.id}>{student.name}</li>
                    </Link>
                ))
            }
            </div>
            </div>
        );
    }
};

const mapStateToProps = ({students}) => ({students});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);

