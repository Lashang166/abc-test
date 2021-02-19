import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

//import {images} from '/images/assets/D_ChEFFWwAESBEB.jpg'

const Home = () => {
    const image = "/images/assets/D_ChEFFWwAESBEB.jpg"
    return (
        <div>
            <Header />
            {/* <img
                src={"/assets//images/D_ChEFFWwAESBEB.jpg"}
                alt="piture" 
                width="250px"
            /> */}
            <ul className="text-white">
                <li><Link to="/shop">shop</Link></li>
                <li><Link to="/admin/product">productManager</Link></li>
                <li><Link to="/admin/category">categoryManager</Link></li>
                <li><Link to="/admin/brand">brandManager</Link></li>
            </ul>
        </div>
    )
}

export default Home
