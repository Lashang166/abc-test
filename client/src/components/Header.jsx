import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="bg-white h-10 flex justify-around">
            <h3 className="text-red-300 text-2xl px-1 w-2/4" >Tesst</h3>
            <ul className="flex w-2/4 bg-red-400 justify-around">
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/items">Items</Link> </li>
                <li><Link to="/login">Login</Link> </li>
            </ul>
        </div>
    )
}

export default Header
