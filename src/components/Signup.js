import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {signupStart} from '../actions/signup'

class signup extends Component {

    constructor(props)
    {
        super();
        this.state = {
            email:"",
            name:"",
            password:"",
            confirmPassword:"",
            passwordDoesntMatch:false
        }
    }
    setName = (e)=>{
        this.setState({
            name:e.target.value,
        })
    }
    setEmail = (e)=>{
        this.setState({
            email:e.target.value,
        })
    }
    setpassword = (e)=>{
        this.setState({
            password:e.target.value,
        })
    }
    setConfirmPassword = (e)=>{
        this.setState({
            confirmPassword:e.target.value,
        })
    }
    buttonHandled=(e)=>{
        const {email,password,name,confirmPassword} = this.state
        e.preventDefault();
        if(this.state.password === this.state.confirmPassword)
        {
            this.props.dispatch(signupStart(email,name,password,confirmPassword))
        }
        else{
            this.setState({
                passwordDoesntMatch:true
            })
        }
    }

    render() {
        const {error,isProgress,islogging} = this.props.auth
        if (islogging) {
          return <Navigate to='/' />;
        }
        return (
            <div>
                <form className="login-form">
                    <span className="login-signup-header">Sign Up</span>
                    {error && <div className="alert error-dailog">{error}</div>}
                    <div className="field">
                    <input onChange={this.setName} type="text" placeholder="Name" required />
                    </div>
                    <div className="field">
                    <input onChange={this.setEmail} type="email" placeholder="Email" required />
                    </div>
                    <div className="field">
                    <input onChange={this.setpassword} type="password" placeholder="Password" required />
                    </div>
                    <div className="field">
                    <input onChange={this.setConfirmPassword} type="password" placeholder="Confirm Password" required />
                    </div>
                    {this.state.passwordDoesntMatch && <div className='alert error-dailog'>Password Doesn't Match</div>}
                    <div className="field">
                    <button onClick={this.buttonHandled} >Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

function stateToProps(state){
    return{
        auth:state.auth,
    }
}

export default connect(stateToProps)(signup);