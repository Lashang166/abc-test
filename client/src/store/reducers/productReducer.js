const initialState = {
    products : [],
    product : null,
    messageL : "",
    loading: false
}

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case "PRODUCT_ADD_REQUEST": 
            return {...state,
                loading: true
            }
        case "PRODUCT_ADD_SUCCESS":
            return {...state,
                loading: false,
                products: [...state.product, action.payload.product]
            }
        case "PRODUCT_ADD_FAIL":
            return {...state,
                loading: false
            }

        default:
            return state

    }
}