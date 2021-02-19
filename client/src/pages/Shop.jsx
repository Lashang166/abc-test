import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import ProductActions from '../store/actions/productActions'
const Shop = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.productState)
    useEffect(() => {
        if(products.length === 0){
            dispatch(ProductActions.fetch())
        }
    }, [])

    return (
        <div>
            <Header />
            <h1 className="text-xl text-white text-center my-3">Products Lists</h1>
            <ul className="">
                { products.map((product) => ( 
                    <li key={product.key} className="bg-white mt-1 p-1">
                        <Link to={`/shop/product/${product._id}`}>{product.title}</Link>  
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Shop
