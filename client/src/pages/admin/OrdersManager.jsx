import React, { useState, useEffect } from 'react'
import axios from 'axios'

const OrdersManager = () => {
    const [list, setList] = useState([])
    const [orders, setOrders] = useState()

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source();
        
        axios.get("/api/order/get", { cancelToken: source.token })
            .then(res => {
                setList(res.data.order);
                console.log(res.data.order);
               // setLoading(false)
            })
            .catch((err) => {
                if (axios.isCancel(err)) {
                  return "axios request cancelled"
                }
                return err
              });

        return () => {
            source.cancel();
        }
    },[])


    return (
        <div>
            <div className="w-4/5 mx-auto">
                <h1 className="text-center text-2xl">Orders</h1>

                <ul>
                    { list.map((order) => (
                        <div 
                            className="bg-white "
                            key={order._id}>
                            <p>orderId: {order._id}</p>
                            <p>express: {order.express.name}</p>
                            <p>paymeny: {order.payment.name}</p>
                            <p>address: {order.address}</p>

                        </div>
                    )) }
                    <li></li>
                </ul>

            </div>
        </div>
    )
}

export default OrdersManager
