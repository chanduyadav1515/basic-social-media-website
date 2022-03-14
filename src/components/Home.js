import React, { Component } from 'react';
import {PostsList} from './';

class Home extends Component {
    render() {
        const {posts} = this.props;
        console.log('PROPS in home',this.props);
        return (
            <div>
                <PostsList posts = {posts} />
            </div>
        );
    }
}

export default Home;