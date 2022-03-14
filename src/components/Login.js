import React, { Component } from 'react';

class Login extends Component {

    constructor(props){
        super();
        this.state={
            email:"",
            password:"",
        }
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
        console.log(this.state)
    })
  render() {
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          <input onChange={this.emailUpdateInState} type="email" placeholder="Email" required />
        </div>
        <div className="field">
          <input onChange={this.passwordUpdateInState} type="password" placeholder="Password" required />
        </div>
        <div className="field">
          <button onClick={this.buttonHandled}>Log In</button>
        </div>
      </form>
    );
  }
}

export default Login;
