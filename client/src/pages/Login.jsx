import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from '../components/Header'

import { useSelector, useDispatch } from 'react-redux'
import userActions from '../store/actions/userActions'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { isAuthenticated, loading } = useSelector(state => state.userState)
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if(isAuthenticated){
            history.push("/")
        }
    },[loading])

    const subHandle = (e) => {
        e.preventDefault()
        console.log(username, password);
        dispatch(userActions.login(username, password))

    }

    return (
        <div>
            <Header />

            <div className="flex justify-center w-3/5 ">
                <form onSubmit={subHandle} className="bg-gray-200 w-full mt-10 px-5">
                    <h1 className="text-center text-2xl">Login</h1>
                    <label htmlFor="username">USERNAME :</label>
                    <input 
                        className="ml-2"
                        type="text" 
                        name="username" 
                        id="username"
                        onChange={(e) => setusername(e.target.value)} /> <br/> <br/>
                    <label htmlFor="username">PASSWORD :</label>
                    <input 
                        className="ml-2"
                        type="text" 
                        name="password" 
                        id="password"
                        onChange={(e) => setPassword(e.target.value)} /><br/> <br/>
                        <button  className="bg-blue-400 p-2">Login</button>
               <a href="/api/auth/google" className="text-red-500">Google +</a>
                </form>

               <Link to="/register" className="text-white">Register</Link> <br />
            </div>
        </div>
    )
}

export const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [username, setusername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { loading, message, isAuthenticated } = useSelector(state => state.userState)

    useEffect(() => {
        //alert(message)
        if(isAuthenticated){
            history.push("/")
        }
    },[loading])

    const subHandle = (e) => {
        e.preventDefault()
        console.log(username,email, password);
        dispatch(userActions.register(username, email, password))
    }

    return (
        <div>
            <Header />

            <div className="flex justify-center w-3/5 ">
                <form onSubmit={subHandle} className="bg-gray-200 w-full mt-10 px-5">
                    <h1 className="text-center text-2xl">Register</h1>
                    <label htmlFor="username">USERNAME :</label>
                    <input 
                        className="ml-2"
                        type="text" 
                        name="username" 
                        value={username}
                        id="username"
                        onChange={(e) => setusername(e.target.value)}  /> <br/> <br/>
                    <label htmlFor="email">email :</label>
                    <input 
                        className="ml-2"
                        type="text" 
                        name="email" 
                        value={email}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)} /><br/> <br/>
                    <label htmlFor="password">password :</label>
                    <input 
                        className="ml-2"
                        type="text" 
                        name="password" 
                        id="password"
                        email={password}
                        onChange={(e) => setPassword(e.target.value)} /><br/> <br/>
                        <button className="bg-blue-400 p-2">Register</button>
                </form>
                <Link to="/login" className="text-white">Login</Link>
                <a href="/api/auth/google" className="text-white">Google +</a>


            </div>
        </div>
    )
}

export default Login
