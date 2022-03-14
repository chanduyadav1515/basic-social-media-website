import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from "../actions/actionTypes"

const authDetails = {
    user:"",
    isProgress:false,
    islogging:false,
    error:""
}

export default function authenticate(state = authDetails ,action) 
{
        switch(action.type)
        {
            case LOGIN_FAIL:
                return{
                    ...state,
                    isProgress:false,
                    error:action.error,
                }
            case LOGIN_START:
                return{
                    ...state,
                    islogging:true,
                    isProgress:true,
                }
            case LOGIN_SUCCESS:
                return{
                    ...state,
                    islogging:false,
                    user:action.user,
                    error:null,
                    isProgress:false               
                }
            default :
            return state
        }
}