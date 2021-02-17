import React, { useState } from 'react'
import Header from '../components/Header'

const Login = () => {
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")

    const subHandle = (e) => {
        e.preventDefault()
        console.log(username, password);
    }

    return (
        <div>
            <Header />

            <div className="flex justify-center w-3/5 ">
                <form className="bg-gray-200 w-full mt-10 px-5">
                    <h1 className="text-center text-2xl">Login</h1>
                    <label htmlFor="username">USERNAME :</label>
                    <input 
                        className="ml-2"
                        type="text" 
                        name="username" 
                        id="username" /> <br/> <br/>
                    <label htmlFor="username">PASSWORD :</label>
                    <input 
                        className="ml-2"
                        type="text" 
                        name="password" 
                        id="password" /><br/> <br/>
                        <input type="submit" value="login"/>
                </form>
            </div>
        </div>
    )
}

export const Register = () => {
    const [username, setusername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const subHandle = (e) => {
        e.preventDefault()
        console.log(username, password);
    }

    return (
        <div>
            <Header />

            <div className="flex justify-center w-3/5 ">
                <form className="bg-gray-200 w-full mt-10 px-5">
                    <h1 className="text-center text-2xl">Login</h1>
                    <label htmlFor="username">USERNAME :</label>
                    <input 
                        className="ml-2"
                        type="text" 
                        name="username" 
                        id="username" /> <br/> <br/>
                    <label htmlFor="username">email :</label>
                    <input 
                        className="ml-2"
                        type="text" 
                        name="email" 
                        id="email" /><br/> <br/>
                        <input type="submit" value="login"/>
                    <label htmlFor="username">email :</label>
                    <input 
                        className="ml-2"
                        type="text" 
                        name="password" 
                        id="password" /><br/> <br/>
                        <input type="submit" value="login"/>
                </form>
            </div>
        </div>
    )
}

export default Login
