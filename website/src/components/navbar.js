import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Navbar extends Component {

    render() {
        var navStyle = {
            backgroundColor: "#1E90FF",
            color: "#fff",
            verticalAlign: 'baseline',
            ':hover': {
                color: "#564d4d",
            }
        }

        return (
            <nav className="navbar navbar-dafault navbar-fixed-top" style={navStyle}>    
                <div className= "navbar-header">
                    <Link className ="navebar" style={{ color: "#db0000"}} className="navbar-brand" to="/" >Pawsome</Link>
                </div>
                
                <ul className="nav navbar-nav" style={navStyle}>
                    <li style={navStyle}>
                        <Link to="/" style={navStyle}>Home</Link>
                    </li>  
                    <li style={navStyle}>
                        <Link to="/my_list" style={navStyle}>My List</Link>
                    </li>
                </ul>
            </nav>
        );
    }
 }

 export default Navbar;