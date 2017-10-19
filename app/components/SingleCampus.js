import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getSingleCampusThunk} from '../reducers/singleCampus'

export class SingleCampus extends Component {


    componentDidMount() {
        const campusId = this.props.match.params.id;
        console.log("ComponentDidMount Campus Id: ",campusId)
        this.props.getSingleCampusThunk(campusId)
    }

    render () {
        const campus = this.props.campus;
        console.log("CAMPUS", campus)
        return (
            <div>
            <h3>Single Campus</h3>
            </div>
        );
    }
}

const mapStateToProps = ({singleCampus}) => ({singleCampus});
const mapDispatchToProps = { getSingleCampusThunk };

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
