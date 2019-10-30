import React from 'react'
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = props => (
    <ul>
        <li>
        <NavLink className="navLink" activeClassName="is-active" to="/" exact>Home</NavLink>
        {/* <NavLink className="navLink" activeClassName="is-active" to="/signup" exact>Sign up</NavLink> */}
        <NavLink className="navLink" activeClassName="is-active" to="/login" exact>Log in</NavLink>
        {/* <NavLink className="navLink" activeClassName="is-active" to="/t" exact>Tasks</NavLink> */}

        </li>
    </ul>
)
export default Header;