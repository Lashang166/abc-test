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
    },
    fetch: () => async (dispatch) => {
        dispatch({ type: "PRODUCT_FETCH_REQUEST"})
        try {
            const { data } = await axios.get("/api/product/get")
            console.log(data);
            dispatch({ type: "PRODUCT_FETCH_SUCCESS", payload: data})
        } catch (error) {
            dispatch({ type: "PRODUCT_FETCH_FAIL", payload: error})
        }
    },
    delete: (id) => async (dispatch) => {
        dispatch({ type: "PRODUCT_DELETE_REQUEST"})
        try {
            const { data } = await axios.delete("/api/product/delete/" + id)
            console.log(data);
            dispatch({ type: "PRODUCT_DELETE_SUCCESS", payload: data})
        } catch (error) {
            dispatch({ type: "PRODUCT_DELETE_FAIL", payload: error})
        }
    },
    get: async (id) => {
        try {
            const { data } = await axios.get("/api/product/get/" + id)
            return data.product
        } catch (error) {
            console.log(error);
        }   
        // dispatch({ type: "PRODUCT_DELETE_REQUEST"})
        // try {
        //     const { data } = await axios.get("/api/product/delete/" + id)
        //     console.log(data);
        //     dispatch({ type: "PRODUCT_DELETE_SUCCESS", payload: data})
        // } catch (error) {
        //     dispatch({ type: "PRODUCT_DELETE_FAIL", payload: error})
        // }
    }
}