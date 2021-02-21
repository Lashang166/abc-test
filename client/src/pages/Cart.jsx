import React, { useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'



const Cart = () => {
    const dispatch = useDispatch()
    const { cartItems, counterItems, priceCounter } = useSelector(state => state.cartState)

    return (
        <div>
            <Header />
            <h1 className="text-2xl">Cart</h1>
            <div className="flex">
            <div className=" w-3/4 bg-gray-300">
                <h1 className="text-center text-xl">category list</h1>
                <ul className="mt-2">     
                { cartItems.map((item) => (
                    <li className="bg-white mt-1 p-1"> 
                        <div>
                            <p>cartId {item.cartId}</p>
                            <p>name: {item.title}</p>
                            <p>qty: {item.qty}</p>
                            <p>color: {item.color}</p>
                            <p>size: {item.size}</p>
                            <p>price: {item.price}</p>
                            <button
                                onClick={() => {
                                    dispatch({ type: "CART_REMOVE_PRODUCT", payload: item.qty, cartId: item.cartId })
                                }}
                            >remove</button>
                            <div className="flex bg-red-400">
                                <button
                                    onClick={() => {
                                        dispatch({ type:  "CART_ITEM_DECREASE", cartId: item.cartId })
                                    }}
                                >-</button>
                                <button>{item.qty}</button>
                                <button
                                    onClick={() => {
                                        dispatch({ type:  "CART_ITEM_INCREASE", cartId: item.cartId })
                                    }}
                                >+</button>
                            </div>
                        </div>
                    </li>
                ))} 
                   
                </ul>
            </div>
            <div className="bg-white w-1/3 ml-2">
                <div className="text-2xl text-center">total {counterItems} </div>
                <div className="text-2xl text-center">Price {priceCounter} </div>
                <Link to="/cart/checkout">checkout</Link>
            </div>
            </div>
        </div>
    )
}


export default Cart
