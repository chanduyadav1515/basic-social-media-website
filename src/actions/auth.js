import { LOGIN_START } from "./actionTypes";
import {ApiUrls} from '../helpers/url';
import {formBody} from '../helpers/utils'

export function login_start(){
    return{
        type: LOGIN_START,
    }
    
}

export function login(email,password)
{
    return(dispatch)=>{
        const url = ApiUrls.login()

        fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':"Application/x-www-form-urlencoded",
            },
            body:formBody(email,password),
        })
    }
}