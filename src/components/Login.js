import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import React, { Component } from 'react';
import {login,clearErrorState} from '../actions/auth'

class Login extends Component {

    constructor(props){
        super();
        this.state={
            email:"",
            password:"",
        }
    }
    componentWillUnmount(){
      this.props.dispatch(clearErrorState())
    }
    emailUpdateInState = ((e)=>{
        this.setState({
            email: e.target.value,
        })
    })
    passwordUpdateInState = ((e)=>{
        this.setState({
            password: e.target.value,
            
        })
    })

    buttonHandled=((e)=>{
      const {email,password} = this.state
        e.preventDefault();
          this.props.dispatch(login(email,password))
    })
  render() {
    const {error,isProgress,islogging} = this.props.auth
    if (islogging) {
      return <Navigate to='/' />;
    }
    else
    {
    return ( 
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input onChange={this.emailUpdateInState} type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input onChange={this.passwordUpdateInState} type="password" placeholder="Password" required />
        </div>
        <div className="field">
        { isProgress ? (
            <button onClick={this.buttonHandled} disabled={isProgress}>
              Logging in...
            </button>
          ) : (
            <button onClick={this.buttonHandled} disabled={isProgress}>
              Log In
            </button>)}
        </div>
      </form>
    );}
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
