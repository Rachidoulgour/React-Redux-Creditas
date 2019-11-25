import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {login} from '../redux/actions/Users';
//import { createBrowserHistory } from 'history'
import './Login.css'


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            email:"",
            password:"" 
        }
    }
    handlenInputUserame = e => {
    this.setState({ username: e.target.value });
  };
    handlenInputEmail = e => {
    this.setState({ email: e.target.value });
  };
  handlenInputPassword = e => {
    this.setState({ password: e.target.value });
  };
  
    
    submitLogin = async event => {
    event.preventDefault();
    try{
        await this.props.dispatch(login(this.state));
    }catch(error){
        console.log(error)
    }  
  };

    render(){
        return(
            <div className="container-login">
                <form className="login" onSubmit={this.submitLogin}>
                    <input type="text"  name="username" placeholder="Username" value={this.state.username}
              onChange={this.handlenInputUserame} required/>
                    <input type="email"  name="email" placeholder="Email" value={this.state.email}
              onChange={this.handlenInputEmail} required/>
                    <input type="password"  name="password" placeholder="Password" value={this.state.password}
              onChange={this.handlenInputPassword} required/>
                    <Link to={'/cart'}> 
                    <button type="submit">Log in</button> 
                    </Link>
                </form>
            </div>
        )
    }

}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(Login);