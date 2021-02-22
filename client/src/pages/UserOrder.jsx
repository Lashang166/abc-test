import React, { useState, useEffect} from 'react'
import Header from '../components/Header'
import axios from 'axios'

const UserOrder = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        const cancelToken = axios.CancelToken;
        const source = cancelToken.source()


        axios.get("/api/order/get",{ cancelToken: source.token})
            .then(res => {
                console.log(res.data);
                setList(res.data.order)
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
    



    return (
        <div>
            <Header />
            <div className="text-center text-white">My Orders</div>

            <div>
                    { list.map((order) => (
                        <div 
                            className="bg-white  "
                            key={order._id}>
                            <p>orderId: {order._id}</p>
                            <p>user: {order.userId.username}</p>
                            <p>express: {order.express.name}</p>
                            <p>paymeny: {order.payment.name}</p>
                            <p>address: {order.address}</p>
                            <p>isDelivered: {order.isDelivered ? "sucess" : "pendding"}</p>
                            <p>totalprice: {order.totalPrice}</p>
                            <div className="pl-4">
                                <ul>
                                    {order.items.map((item) => (
                                        <li key={item._id}>- name: {item.productId.title} qty : {item.productCount} color: {item.productColor} size: {item.productSize} </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )) }
                </div>
        </div>
    )
}

export default UserOrder
