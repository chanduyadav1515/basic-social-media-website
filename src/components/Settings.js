import React, { Component } from 'react';

class settings extends Component {

    render() {
        return (
            <div className='edit-box'>
                <div>
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' />
                    
                    <span>Update Picture</span>
                </div>
                <div>
                    <label for="name">Name</label>
                    <input name='name'></input>
                    <label for="password">Name</label>
                    <input name='password'></input>
                </div>
                <div>
                    <button>Edit Profile</button>
                    <button>Save</button>
                </div>
                
            </div>
        );
    }
}

export default settings;