import React from 'react';
import Login from './Login';
import Navbar from './navbar';

class LoginScreen extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>
                <div className="component">
                    <Login/>
                </div>
            </div>
        )
    }
}

export default LoginScreen;
