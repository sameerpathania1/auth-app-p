import types from '../types';
import { createProductAPI } from '../apis/products';
import store from '../store';
import { toast } from 'react-toastify';

const { dispatch } = store;

const productsfeth = () => {
   dispatch({
      type: types.ADD_PRODUCT_REQUEST
   })
}

export const addproductsapi = (data) => {
   productsfeth();
   return new Promise((resolve, reject) => {
      createProductAPI(data).then((res) => {

         dispatch({
            type: types.ADD_PRODUCT_SUCCESS,
            payload: res
         })
         resolve(res)
      }).catch(err => {
         toast.error(err.response.data.message || "Something went wrong!!.")
         reject(err);
      })
   })
}