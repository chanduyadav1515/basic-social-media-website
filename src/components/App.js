import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';

import { BrowserRouter as Router , Route , Link, Routes } from 'react-router-dom';

import { PostsList , NavBar ,PageNotFound, Home , Login ,Signup} from './';
import { fetchPosts} from '../actions/posts';
import {afterRefresh} from '../actions/auth'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = localStorage.getItem('token');
    if(token)
    {
        const user = jwtDecode(token);
        this.props.dispatch(afterRefresh({name:user.name,email:user.email,_id:user._id}))
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <NavBar/>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route 
              path='/'  
              element = {<Home posts = {posts}/>} />
            <Route path="*" element= {<PageNotFound/>}/> 
        </Routes>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);

