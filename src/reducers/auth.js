import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, SIGN_UP_FAIL, SIGN_UP_START, SIGN_UP_SUCCESS,AFTER_REFRESH ,LOGOUT_USER} from "../actions/actionTypes"

const authDetails = {
    user:"",
    isProgress:false,
    islogging:false,
    error:""
}

export default function auth(state = authDetails ,action) 
{
        switch(action.type)
        {
            case LOGIN_FAIL:
            case SIGN_UP_FAIL:
                return{
                    ...state,
                    isProgress:false,
                    error:action.error,
                }
            case LOGIN_START:
            case SIGN_UP_START: 
                return{
                    ...state,
                    isProgress:true,
                }
            case LOGIN_SUCCESS:
            case SIGN_UP_SUCCESS:
                return{
                    ...state,
                    islogging:true,
                    user:action.user,
                    error:null,
                    isProgress:false               
                }
            case AFTER_REFRESH:
                return{
                    ...state,
                    user:action.user,
                    islogging:true
                }  
            case LOGOUT_USER:
                return{
                    ...state,
                    user:action.user,
                    islogging:false,
                    isProgress:false,
                    error:null
                }
            default :
            return state
        }
}