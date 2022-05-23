import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import {logoutId} from '../actions/auth'

class NavBar extends React.Component {
 
  logOut = ()=>{
    localStorage.removeItem('token')
    this.props.dispatch(logoutId({name:'',email:'',_id:''}))
  }
  render() { 
    const {islogging} = this.props.auth
    return (
      <nav className="nav">
          <div className="left-div">         
          <Link to="/"  >
            <img 
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
            </Link>
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://cdn-icons-png.flaticon.com/512/64/64673.png"
              alt="search-icon"
            />
            <input placeholder="Search" />

            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <Link to='/settings'>
                <img
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80'
                  alt="user-dp"
                  id="user-dp"
                />
                <span>{this.props.auth.user.name}</span>
              </Link>
            </div>
            <div className="nav-links">
              {!islogging ?
              (<ul>
              <Link to="/login"  ><li> LOG IN </li></Link>
              <Link to="/signup"  ><li> Register </li></Link>
              </ul>):(<ul><li onClick={this.logOut}> LOG OUT </li></ul>)}
            </div>
          </div>
        </nav>
    );
  }
}

function porpsToState(state){
  return{
    auth:state.auth,
  };
}
export default connect(porpsToState)(NavBar);