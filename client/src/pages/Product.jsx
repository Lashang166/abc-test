import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import ProductActions from "../store/actions/productActions";

const Product = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  //const { product } = useSelector(state => state.productState)

  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    axios
      .get(`/api/product/get/${id}`, { cancelToken: source.token })
      .then((res) => {
        setProduct(res.data.product);
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
          <p>
            color:{" "}
            {product.colors.map((s, i) => (
              <span key={i}>{s}, </span>
            ))}
          </p>
          <p>
            size:{" "}
            {product.variation.map((s, i) => (
              <span key={i}>{s}, </span>
            ))}
          </p>
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
        </div>
      </div>
    )
  );
};

export default Product;
