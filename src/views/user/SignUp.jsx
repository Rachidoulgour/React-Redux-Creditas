import React from 'react';


import {isEmail} from 'validator'
class SignUp extends React.Component { //componente de clase

    constructor(props) {
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            validForm:true,
            errorEmail:"",
            errorPassword:"",
        }
        this.emailInput=React.createRef()
    }  

    // handleSubmit =  event => {
    //     event.preventDefault();
    //     this.validateForm();
    //     if(this.state.validForm){
    //     axios.post('http://localhost:3001/users/register',{
    //             name:event.target.name.value,
    //             email:event.target.email.value,
    //             password:event.target.password.value,
    //         },)
    //         .then(res=>console.log(res.data)) 
    //         .catch(error=>console.log(error.response.data)) 
    //     }
    // }
    validateForm=()=>{
        // this.validateName();
        this.validateEmail();
        this.validatePassword();
    }
    validatePassword=()=>{
        console.log(this.state.password)
        const password=this.state.password
        if(password.length===0)  this.setState({validForm:false, errorPassword:"password is required"})
        else if ( password.length<8 ){
            this.setState({validForm:false, errorPassword:"password must be at least 8 characters"})
        }
    }
    validateEmail=()=>{
        if(this.state.email.length===0) this.setState({validForm:false, errorEmail:"Email is required"});
        else if(!isEmail(this.state.email)) this.setState({validForm:false,errorEmail:"must be an email"});
    }

    handleChange=event=> this.setState({[event.target.name]:event.target.value})
    
    render() {

        if(this.props.history.location.hash==="#email" && this.emailInput.current )this.emailInput.current.focus()
        return (
        <div>
            
            <form className="signUp" onSubmit={this.handleSubmit}>

                <input type="text" name="firstname" placeholder="Your Firstname" 
                 onChange={this.handleChange} value={this.state.name}/>

                <input type="text" name="laststname" placeholder="Your Lastname" 
                 onChange={this.handleChange} value={this.state.name}/>

                <input type="text" name="email" placeholder="ex@exemple.com"
                 onChange={this.handleChange} value={this.state.email} ref={this.emailInput}/>

                <div className="error"> {this.state.errorEmail} </div>

                <input type="password" name="password" placeholder="Password"
                 onChange={this.handleChange}/>
                 
                <div className="error"> {this.state.errorPassword} </div>

                 <button type="submit">Sign up</button>
            </form>
        
            </div>
        )

    }
}
export default SignUp;