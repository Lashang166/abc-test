import axios from 'axios'

export default {
    add: (product) => async (dispatch) => {
        dispatch({ type: "PRODUCT_ADD_REQUEST"})
        try {
            const { data } = await axios.post("/api/product/add", product)
            console.log(data);
            dispatch({ type: "PRODUCT_ADD_SUCCESS", payload: data})
        } catch (error) {
            dispatch({ type: "PRODUCT_ADD_FAIL", payload: error})
        }
    }
}