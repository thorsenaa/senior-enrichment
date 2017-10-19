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
                students.map(student => (
                    <div className="col-xs-4" key= { student.id }>
                    <Link className="thumpnail" to={`/students/${student.id}`}>
                    <span>{ student.name }</span>
                    </Link>
                    </div>
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

