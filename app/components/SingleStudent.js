import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingleStudentThunk} from '../reducers/singleStudent'

export class SingleStudent extends Component {

    componentDidMount() {
        const studentId = this.props.match.params.id;
        console.log("ComponentDidMount Student Id: ",studentId)
        this.props.getSingleStudentThunk(studentId)
    }

    render () {
        console.log("SingleStudent this.props: ", this.props)
        return (
            <div>
            <h3>Single Student</h3>
            </div>
        );
    }
};

const mapStateToProps = ({student}) => ({student});
const mapDispatchToProps = { getSingleStudentThunk };

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
