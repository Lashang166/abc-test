import React from 'react'
import Header from '../components/Header'

//import {images} from '/images/assets/D_ChEFFWwAESBEB.jpg'

const Home = () => {
    const image = "/images/assets/D_ChEFFWwAESBEB.jpg"
    return (
        <div>
            <Header />
            <img
                src={"/assets//images/D_ChEFFWwAESBEB.jpg"}
                alt="piture" 
                width="250px"
            />
        </div>
    )
}

export default Home
