import types from "../types";

const initialstate = {
   loading: false,
   products: [],
   productsCount: 0,
   product: {}
}

export default function (state = initialstate, action) {
   switch (action.type) {
      case types.GET_PRODUCTS_REQUEST:
         return {
            ...state,
            loading: true,
            products: []
         };

      case types.GET_PRODUCTS_SUCCESS: {
         return {
            ...state,
            loading: false,
            products: [...action.payload],
            productsCount: action.count
         }
      }

      case types.GET_PRODUCTS_FAILED: {
         return {
            ...state,
            loading: false,
            products: []
         }
      }

      case types.GET_PRODUCT_REQUEST:
         return {
            ...state,
            loading: true,
            product: {}
         };

      case types.GET_PRODUCT_SUCCESS: {
         return {
            ...state,
            loading: false,
            product: { ...action.payload }
         }
      }

      case types.GET_PRODUCT_FAILED: {
         return {
            ...state,
            loading: false,
            product: {}
         }
      }

      default:
         return state;
   }
}