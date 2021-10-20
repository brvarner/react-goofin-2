import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', borderBottom: '1px solid black' }}>
            <NavLink exact to="/" className="nav-link" activeClassName="alert alert-success">Home</NavLink>
            <NavLink exact to="/about" className="nav-link" activeClassName="alert alert-success">About</NavLink>
            <NavLink exact to="/users" className="nav-link" activeClassName="alert alert-success">Users</NavLink>
            <NavLink exact to="/projects" className="nav-link" activeClassName="alert alert-success">Projects</NavLink>
        </nav>
    )
}

export default Navbar