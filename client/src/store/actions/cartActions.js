import axios from 'axios'


export default {
    add: (item, color, size, qty, cartItems) => (dispatch) => {
        let product = {
            title: item.title,
            qty: qty,
            color: color,
            size: size,
            product_Id: item._id,
            price: item.price,
            total: item.price * qty
        }
        let Exist = false;
        let cartId = 0
        dispatch({ type: "CART_ADD_REQUEST" })

        cartItems.forEach((cart) => {
            if(cart.title === item.title && color === cart.color && size === cart.size){
                Exist = true
                cartId = cart.cartId
            }
             
        })
        if(Exist){
            return  dispatch({ type: "CART_ADD_EXIST", payload: qty, cartId, total: product.total  })
        }else{
            return dispatch({ type: "CART_ADD_PRODUCT", payload: product, color, size, qty })
        }

    },
    checkout: (cartItems, address, payment, express, totalPrice) => async (dispatch) => {
        const items= []

        cartItems.map(item => {
            let i = {
                productId: item.product_Id,
                productCount: item.qty
            }
            items.push(i)
        })

        dispatch({ type: "CART_ADD_REQUEST" })
        const { data } = await axios.post("/api/order/add", { items, address, payment, express, totalPrice })
        console.log(data);

        //dispatch({ type: "CART_CHECK_OUT", payload: items, address, payment, express, totalPrice})
    }
}