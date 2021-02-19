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
        case "PRODUCT_FETCH_REQUEST": 
            return {...state,
                loading: true
            }
        case "PRODUCT_FETCH_SUCCESS":
            return {...state,
                loading: false,
                products: action.payload.product
            }
        case "PRODUCT_FETCH_FAIL":
            return {...state,
                loading: false
            }
        case "PRODUCT_DELETE_REQUEST": 
            return {...state,
                loading: true
            }
        case "PRODUCT_DELETE_SUCCESS":
            
            return {...state,
                loading: false,
                products: state.products.filter((p) => p._id !== action.payload.product._id),
                message: action.payload.message
                //action.payload.product
            }
        case "PRODUCT_DELETE_FAIL":
            return {...state,
                loading: false
            }

        default:
            return state

    }
}