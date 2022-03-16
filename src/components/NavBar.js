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
              <img
                src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1647077941~hmac=b2874e79363ad3f7ef50292db67fd578"
                alt="user-dp"
                id="user-dp"
              />
              <span>John Doe</span>
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