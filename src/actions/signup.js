import { ApiUrls } from "../helpers/url"
import { bodyForm } from "../helpers/utils";
import { SIGN_UP_SUCCESS ,SIGN_UP_FAIL,SIGN_UP_START} from "./actionTypes";

export function signup_start(user){
    return{
        type:SIGN_UP_START,
    }
}
export function signup_fail(message){
    return{
        type:SIGN_UP_FAIL,
        error:message
    }
}
export function signup_success(user){
    return{
        type:SIGN_UP_SUCCESS,
        user:user,

    }
}

export function signupStart(email,name,password,confirmPassword)
{
    return(dispatch)=>{
        dispatch(signup_start());
        const url = ApiUrls.signin();
        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"Application/x-www-form-urlencoded"
            },
            body: bodyForm({email,name,password,confirm_password:confirmPassword})
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data.success){
                dispatch(signup_success((data.data.user)))
            }
            else{
                dispatch(signup_fail(data.message))
            }
        })
    }
}