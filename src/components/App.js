import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router , Route , Link, Routes } from 'react-router-dom';

import { PostsList , NavBar ,PageNotFound, Home , Login } from './';
import { fetchPosts } from '../actions/posts';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <NavBar/>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            {/* <Route 
              path='/'  
              element = {<Home />}
              render = {(props)=>{
                return <Home {...props} posts = {posts}/>
                }} /> */}
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

