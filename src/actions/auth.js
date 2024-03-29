import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS ,AFTER_REFRESH,LOGOUT_USER,CLEAR_ERROR_STATE} from "./actionTypes";
import {ApiUrls} from '../helpers/url';
import {bodyForm} from '../helpers/utils'

export function login_start(){
    return{
        type: LOGIN_START,

    }
    
}
export function login_success(user){
    return{
        type: LOGIN_SUCCESS,
        user,
    }
    
}
export function login_fail(message){
    return{
        type: LOGIN_FAIL,
        error:message
    }
    
}
export function login(email,password)
{
    return(dispatch)=>{
         dispatch(login_start());
        const url = ApiUrls.login()

        fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':"Application/x-www-form-urlencoded",
            },
            body:bodyForm({email,password}),
        })
        .then((response) => response.json() )
        .then((data) =>{
            if(data.success){
                localStorage.setItem('token',data.data.token)
                dispatch(login_success(data.data.user))
            }
            else
            {
                dispatch(login_fail(data.message))
            }
        })
    }
}

export function afterRefresh(user){

    return{
        type:AFTER_REFRESH,
        user,
    }
}

export function logoutId(user){
    return{
        type:LOGOUT_USER,
        user,
    }
}

export function clearErrorState(){
    return{
        type:CLEAR_ERROR_STATE,
    }
}