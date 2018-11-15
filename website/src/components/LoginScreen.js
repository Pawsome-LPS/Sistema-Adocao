import React from 'react';
import Login from './Login';
import NavbarPage from './navbar';

class LoginScreen extends React.Component {
    render(){
        return(
            <div>
                <NavbarPage />
                <div className="component">
                    <Login />
                </div>
            </div>
        )
    }
}

export default LoginScreen;
