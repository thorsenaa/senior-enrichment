import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <navbar>
            <section>
                <Link to="/campuses">Campuses</Link>
            </section>
            <section>
                <Link to="/students">Students</Link>
            </section>
            <section>
            <Link to="/add-student-form">Add Student</Link>
        </section>
        </navbar>
    )
}

export default Navbar;