const initialState = {
    cartItems: [],
    counterItems: 0,
    message: "",
    error: "",
    loading: false,
    cartId: 0,
    priceCounter: 0,
    
    shipping: {
        items: [],
        address: "",
        express: "",
    }

}



export const cartReducer = (state = initialState, action) => {
    let index = state.cartItems.findIndex((cart) => cart.cartId === action.cartId)

    switch (action.type) {
        case "CART_ADD_REQUEST":
            return {...state, 
                loading: true
            }
        case "CART_ADD_PRODUCT":
            let product = action.payload;          
            return {...state, 
                        loading: false,
                        cartItems: [...state.cartItems,{...product ,cartId: state.cartId}],
                        counterItems: state.counterItems + action.qty,
                        message: "ADD TO CART",
                        cartId: state.cartId += 1,
                        priceCounter: state.priceCounter + product.total
                    }
            
        case "CART_ADD_EXIST":
                state.cartItems[index].qty += action.payload
                return {...state, 
                    loading: false,
                    //cartItems: [...index],
                    counterItems: state.counterItems += action.payload,
                    priceCounter: state.priceCounter + action.total

                }
        case "CART_REMOVE_PRODUCT":
                //let index = state.cartItems.findIndex((cart) => cart.cartId === action.cartId)
                return {...state,
                    loading: false,
                    counterItems: state.counterItems -= action.payload,
                    priceCounter: state.priceCounter - state.cartItems[index].total,
                    cartItems: state.cartItems.filter(x => x.cartId !== action.cartId),
                    
                }
        case "CART_ITEM_INCREASE":
            state.cartItems[index].qty += 1
            return {...state, 
                loading: false,
                counterItems: state.counterItems += 1,
                priceCounter: state.priceCounter + state.cartItems[index].price

            }
        case "CART_ITEM_DECREASE":
            state.cartItems[index].qty -= 1
            return {...state, 
                loading: false,
                //cartItems: [...index],
                counterItems: state.counterItems -= 1,
                priceCounter: state.priceCounter - state.cartItems[index].price
            }
            
    
        default:
            return state
            
    }
}