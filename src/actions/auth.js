import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "./actionTypes";
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
                dispatch(login_success(data.data.user))
            }
            else
            {
                dispatch(login_fail(data.message))
            }
        })
    }
}