import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Navbar extends Component {

    render() {
        var navStyle = {
            backgroundColor: "#221F1F",
            color: "#fff",
            verticalAlign: 'baseline',
            ':hover': {
                color: "#564d4d",
            }
        }

        return (
            <nav className="navbar navbar-dafault navbar-fixed-top" style={navStyle}>    
                <div className= "navbar-header">
                    <Link style={{color: "#db0000", marginLeft: '50px'}} className="navbar-brand" to="/" >Totally Not Netflix</Link>
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