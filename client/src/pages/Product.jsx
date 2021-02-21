import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import CartActions from '../store/actions/cartActions'

const Product = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cartState)

  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")
  const [qty, setQty] = useState(0)

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    axios
      .get(`/api/product/get/${id}`, { cancelToken: source.token })
      .then((res) => {
        setProduct(res.data.product);
        setColor(res.data.product.colors[0])
        setSize(res.data.product.variation[0])
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          return "axios request cancelled"
        }
        return err
      });

    return () => {
      source.cancel();
    };
  }, []);




  return (
    product && (
      <div>
        <Header />
        <div className="flex flex-col text-white">
          <h1>Title: {product.title}</h1>
          <p>price: {product.price}</p>
          <p>color:{" "}</p>
          <select
            onChange={(e) => {setColor(e.target.value)}} 
            className="text-black">
            {product.colors.map((s, i) => (
              <option value={s} key={i}>{s} </option>
            ))}
          </select>
          <p>size:{" "}</p>
          <select 
            onChange={(e) => {setSize(e.target.value)}} 
            className="text-black">
            {product.variation.map((s, i) => (
              <option value={s} key={i}>{s} </option>
            ))}
          </select>
          <p>countInstock: {product.countInStock}</p>
          <p>description: {product.description}</p>
          <p>category: {product.category.category}</p>
          <p>brand : {product.brand.name}</p>
          <p>rating : {product.rating.length}</p>
          {product.images.map((m, i) => (
            <img
              src={`/assets//images/${m.substr(m.indexOf("f"), m.length + 1)}`}
              key={i}
              alt="1"
              width="180px"
            />
          ))}
          <div className="flex  mt-2">
            <button 
              onClick={() => qty !== 0 ? setQty(qty - 1) : "" }
              className="bg-red-400 px-2 ppy-1">-</button>
            <h1 className="text-2xl mx-5 ">{qty}</h1>
            <button 
              onClick={() => qty <= product.countInStock ? setQty(qty + 1) : null}
              className="bg-red-400 px-2 ppy-1">+</button>

          </div>
          <button 
            className="my-2 px-5 py-2 w-20 text-white bg-red-400"
            onClick={() => dispatch(CartActions.add(product, color, size, qty, cartItems))}
          >
            ADD</button>
        </div>
      </div>
    )
  );
};

export default Product;
