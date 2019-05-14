import types from "../types"
import store from "../store"
import { toast } from 'react-toastify';
import { getProductsAPI, getProductAPI } from "../apis/products";

const { dispatch } = store;

export function getProducts() {
   dispatch({
      type: types.GET_PRODUCTS_REQUEST,
   })
   return new Promise((resolve, reject) => getProductsAPI()
      .then(res => {
         dispatch({
            type: types.GET_PRODUCTS_SUCCESS,
            payload: res.values,
            count: res.count
         })
         resolve(res);
      })
      .catch(err => {
         dispatch({
            type: types.GET_PRODUCTS_FAILED,
         })
         toast.error(err.response.data.message || 'Something went wrong!');
         reject(err);
      })
   )
}

export function getProduct(id) {
   dispatch({
      type: types.GET_PRODUCT_REQUEST,
   })
   return new Promise((resolve, reject) => getProductAPI(id)
      .then(res => {
         dispatch({
            type: types.GET_PRODUCT_SUCCESS,
            payload: res
         })
         resolve(res);
      })
      .catch(err => {
         dispatch({
            type: types.GET_PRODUCT_FAILED,
         })
         toast.error(err.response.data.message || 'Something went wrong!');
         reject(err);
      })
   )
}