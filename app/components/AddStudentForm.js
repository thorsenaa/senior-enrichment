import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {getCampusesThunk} from '../reducers/campuses'

export class AllCampuses extends Component {

/*
-Navbar - Home and Students buttons
-boxes for each campus
*/

    render () {

        return (
            <div>
            <h3>All Campuses</h3>
            {
                this.props.campuses.map(campus => (
                    <Link to={`/campuses/${campus.id}`}>
                    <li key={campus.id}>{campus.name}</li>
                    </Link>
                ))
            }
            </div>
        );
    }
};

const mapStateToProps = ({campuses}) => ({campuses});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);