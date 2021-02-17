import axios from 'axios'

const userActions = {
    login: (username, password) => async (dispatch) => {
        dispatch({ type: "USER_LOGIN_REQUEST" })
        try {
            const { data } = await axios.post("api/user/login", { username, password})
            console.log(data);
            dispatch({ type: "USER_LOGIN_SUCCESS", payload: data})
        } catch (error) {
            console.log(error);
            dispatch({ type: "USER_LOGIN_FAIL"})
        }
    },
    auth: () => async (dispatch) => {
        dispatch({ type: "USER_AUTH_REQUEST"})
        try {
            const {data} = await axios.get("api/user/authenticated")
            console.log(data);
            dispatch({ type: "USER_AUTH_SUCCESS", payload: data})
        } catch (error) {
            console.log(error);
            dispatch({ type: "USER_AUTH_FAIL"})
        }
    },
    logout: () => async (dispatch) => {
        dispatch({ type: "USER_LOGOUT_REQUEST"})
        try {
            const {data} = await axios.get("api/user/logout")
            console.log(data);
            dispatch({ type: "USER_LOGOUT_SUCCESS", payload: data})
        } catch (error) {
            console.log(error);
            dispatch({ type: "USER_LOGOUT_FAIL"})
        }
    },
    register: (username, email, password) => async (dispatch) => {
        dispatch({ type: "USER_REGISTER_REQUEST" })
        console.log(username, email, password)
        try {
            const { data } = await axios.post("/api/user/register", {username, email, password})
            console.log(data);
            dispatch({ type: "USER_REGISTER_SUCCESS", payload: data })
            const log = await userActions.login(data.newUser.username, data.newUser.password)
         
        } catch (error) {
           dispatch({ type: "USER_REGISTER_FAIL", payload: error.response })
        }
    },
    

}


export default userActions