import React from 'react';
import './Login.css'


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"" 
        }
    }
    render(){
        return(
            <div className="container-login">
                <form className="login">
                    <input type="email"  name="email" placeholder="Email" />
                    <input type="password"  name="password" placeholder="Password" />
                    <button type="submit">Log in</button>
                </form>
            </div>
        )
    }

}
export default Login;