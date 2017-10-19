import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getCampusesThunk} from '../reducers/campuses'

export class AllCampuses extends Component {

    render () {
        console.log("AllCampuses MMMMM this.props: ", this.props)
        //why are there two - do i need to componentdidmount
        console.log("AllCampuses MMMMMM this.props.campuses.name: ", this.props.campuses.name)
        return (
            <div>
            <h3>All Campuses</h3>
            </div>
        );
    }
};

const mapStateToProps = ({campuses}) => ({campuses});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
