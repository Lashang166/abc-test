import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import userActions from '../store/actions/userActions'

const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { user, isAuthenticated, loading } = useSelector(state => state.userState)

    useEffect(() => {
       
    },[loading])


    const logoutHandle = () => {
        dispatch(
            userActions.logout()
        )
        history.push("/login")
    }

    return (
        <div className="bg-white h-10 flex justify-around">
            <h3 className="text-red-300 text-2xl px-1 w-1/4" >Tesst</h3>
            { isAuthenticated ? 
                <ul className="flex ">
                    <li className="mr-2">{user.username} You are</li>
                    <li>{user.role}</li>
                </ul>
                : null
            }
            <ul className="flex w-2/4 bg-red-400 justify-around">
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/cart">Cart</Link></li>

            {
                isAuthenticated ?
                 <li onClick={() => logoutHandle()}>Logout</li>
                 :
                <li><Link to="/login">Login</Link> </li>
            }
            </ul>
        </div>
    )
}

export default Header
