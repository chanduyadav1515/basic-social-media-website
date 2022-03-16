import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

class PrivateComponents extends React.Component {
    render() {
        return (
            this.props.auth.islogging? <Outlet/>: < Navigate to='/login'/>
        );
    }
}

function stateToProps(state){
    return{
        auth:state.auth,
    }
}
export default connect(stateToProps)(PrivateComponents);