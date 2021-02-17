const initialState = {
    user: null,
    isAuthenticated: false,
    message: "",
    loading: false
}
 
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return {...state,
                loading: true
            }
        case "USER_LOGIN_SUCCESS":
            return {...state,
                loading: false,
                user: action.payload.user,
                isAuthenticated: action.payload.isAuthenticated,
                message: action.payload.message
            }
        case "USER_LOGIN_FAIL":
            return {...state,
                loading: false
            }
        //auth
        case "USER_AUTH_REQUEST":
            return {...state,
                loading: true
            }
        case "USER_AUTH_SUCCESS":
            return {...state,
                loading: false,
                user: action.payload.user,
                isAuthenticated: action.payload.isAuthenticated,
                message: action.payload.message
            }
        case "USER_AUTH_FAIL":
            return {...state,
                loading: false
            }
        case "USER_LOGOUT_REQUEST":
            return {...state,
                loading: true
            }
        case "USER_LOGOUT_SUCCESS":
            return {...state,
                loading: false
            }
        case "USER_LOGOUT_FAIL":
            return {...state,
                loading: false
            }
        case "USER_REGISTER_REQUEST":
            return {...state, loading: true };
        case "USER_REGISTER_SUCCESS":
            return {...state, loading: false, message: action.payload.message, userInfo: action.payload.newUser };
        case "USER_REGISTER_FAIL": 
            return {...state, loading: false, message: action.payload.message };
    
        default:
            return state
    }
}