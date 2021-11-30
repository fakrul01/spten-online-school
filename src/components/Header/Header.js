import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        color: "red"
    }
    const style = {
        textDecoration: "none",
        fontWeight: "bold",
        padding: "10px"
    }
    return (
        <div>
            <nav className="bg-light py-3">
                <NavLink activeStyle={activeStyle} style={style} to="/home">Home</NavLink>
                <NavLink activeStyle={activeStyle} style={style} to="/services">Services</NavLink>
                <NavLink activeStyle={activeStyle} style={style} to="/about">About</NavLink>
                <NavLink activeStyle={activeStyle} style={style} to="/contact">Contact us</NavLink>
            </nav>
        </div>
    );
};

export default Header;