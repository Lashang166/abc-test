const initialState = {
    user: {
        info: null,
        isAuthenticated: false
    }
}

export const userReducer = (state = initialState, actions => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return {...state,
                loading: true
            }
        case "USER_LOGIN_SUCCESS":
            return {...state,
                loading: false
            }
        case "USER_LOGIN_FAIL":
            return {...state,
                loading: false
            }
            
    
        default:
            return state
    }
}