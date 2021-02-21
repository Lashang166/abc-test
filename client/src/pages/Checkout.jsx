import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import CartActions from '../store/actions/cartActions'
import { Link } from 'react-router-dom'

import Header from '../components/Header'


function Checkout() {
    const dispatch = useDispatch()
    const [address, setAddress] = useState();
    const [payment, setPayment] = useState();
    const [selectPayment, setSelectPayment] = useState("")
    const [selectExpress, setSelectExpress] = useState("")
    const [express, setExpress] = useState();

    const { cartItems, priceCounter } = useSelector(state => state.cartState)


    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();

        axios.get("/api/express/get", { cancelToken: source.token })
            .then((res) => {
                setExpress(res.data)
            }).catch((err) => {
                if (axios.isCancel(err)) {
                  return "axios request cancelled"
                }
                return err
              });

        axios.get("/api/payment/get", { cancelToken: source.token })
            .then((res) => {
                setPayment(res.data)
            }).catch((err) => {
                if (axios.isCancel(err)) {
                  return "axios request cancelled"
                }
                return err
              });


        return () => {
            source.cancel();
        } 
    }, [])


    const CheckoutHandle = () => {
        console.log(selectPayment, selectExpress);
        dispatch(CartActions.checkout(cartItems, address, selectPayment, selectExpress, priceCounter))
    }


    return (
        <div className="">
            <Header />
            <div className="flex flex-col bg-gray-400  w-3/4 mx-auto mt-10">

                <h1 className="text-center text-2xl">Checkout</h1>

                <div className="flex mt-2 mx-2">
                    <label> address </label>
                    <textarea 
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>

                <div className="flex mt-2 mx-2">
                    <label htmlFor="payment">payment</label>

                    <select 
                    onChange={(e) => {setSelectPayment(e.target.value)}} 
                    name="payment" id="payment">
                                <option value="#" >เลือก</option>
                        { payment &&
                            payment.map((p) => (
                                <option value={p._id} key={p._id}>{p.name} </option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex mt-2 mx-2">
                    <label htmlFor="payment">express</label>

                    <select 
                        onChange={(e) => {setSelectExpress(e.target.value)}} 
                        name="payment" id="payment">
                        <option value="#" >เลือก</option>
                        { express &&
                            express.map((p) => (
                                <option value={p._id} key={p._id}>{p.name} </option>
                            ))
                        }
                    </select>
                </div>
                
            <button to="/" onClick={() => CheckoutHandle()} className="px-2 py-1 w-20 bg-red-400 text-white">confirm</button>

            </div>


        </div>
    )
}


export default Checkout